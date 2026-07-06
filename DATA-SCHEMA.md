# SYNTHESE — Datenstruktur & Schnittstellen (verbindlich)

> **Das ist der Vertrag.** Feld-Namen, Funktions-Signaturen und DOM-Selektoren hier sind **fix**.
> Niemand ändert sie ohne Absprache mit dem Team-Lead — sonst brechen fremde Module.
> KI-Prompts **immer** dieses Dokument mitgeben ("halte dich exakt an DATA-SCHEMA.md").

---

## 1. Das Topic-Objekt (Kern-Datenstruktur)

Jedes Thema ist ein Objekt mit **genau** diesen Feldern:

```js
{
  id: 'farbmodelle',            // string, eindeutig, kebab-case. Referenz für related/bookmarks.
  category: 'farbe-typo',       // FIX: 'gestaltung' | 'farbe-typo' | 'bild-grafik' | 'web-ux'
  difficulty: 'easy',           // FIX: 'easy' | 'medium' | 'hard'
  image: 'synthese-farbe.jpg',  // Dateiname in assets/images/ (oder '' für Icon-Fallback)
  icon: 'ph-palette',           // Phosphor-Icon-Klasse (Fallback wenn kein Bild)
  tags: ['rgb', 'cmyk', 'farbe'],  // string[], lowercase. TOP-LEVEL (nicht in de/en!)
  related: ['farbharmonie', 'accessibility'],  // string[] von anderen topic.id

  de: {
    title: 'RGB vs. CMYK',
    summary: 'Kurzbeschreibung in 1 Satz für die Card.',
    content: `<h3>...</h3><p>...</p>`,   // HTML-String, nur h3/p/ul/li/strong/code
    didYouKnow: 'Ein interessanter Fakt.'
  },
  en: {
    title: 'RGB vs. CMYK',
    summary: 'One-sentence summary for the card.',
    content: `<h3>...</h3><p>...</p>`,
    didYouKnow: 'An interesting fact.'
  },

  // NEU (Innovations-Tweak): Copy-Code-Blöcke (CSS/HTML/SVG …). Leeres Array [] wenn keine.
  configs: [
    {
      labelDe: 'HEX-Farbe als CSS-Variable',
      labelEn: 'HEX color as CSS variable',
      lang: 'css',                // 'css' | 'html' | 'svg' | 'js' | 'json'
      code: `:root {\n  --brand: #ff5a3c;\n}`
    }
  ],

  // NEU (Issue #52): Live-Code-Playground im Detail-Modal. Optional, top-level
  // (nicht in de/en — Sandbox-Code ist sprachunabhängig). Fehlt das Feld,
  // bleibt der Sandbox-Bereich im Modal versteckt. Jeder Teil (html/css/js)
  // einzeln optional.
  sandbox: {
    html: `<button class="demo-btn">Klick mich</button>`,
    css: `.demo-btn { padding: 8px 16px; }`,
    js: `document.querySelector('.demo-btn').addEventListener('click', () => alert('Hi!'));`
  },

  // NEU: statische, fertig gerenderte visuelle Beispiele (Grafiken/Demos) in
  // der Detail-Ansicht — zusätzlich zu oder statt einer Sandbox. Optional,
  // top-level. Drei Formen: String (ein Beispiel), { html, caption } (ein
  // Beispiel mit Bildunterschrift), oder Array aus beidem (mehrere Beispiele).
  // html ist selbst-enthaltenes, inline-gestyltes HTML aus unseren eigenen
  // Datendateien (vertrauenswürdig) — Inline-Styles hier erlaubt (anders als
  // bei content), da es sich um fertige visuelle Demos handelt.
  example: [
    {
      caption: 'Kurze Bildunterschrift.',
      html: `<div style="...">...</div>`
    }
  ]
}
```

**Regeln:**

- **Pflichtfelder:** `id, category, difficulty, tags, related, de, en`. `image`/`icon`/`configs`/`sandbox`/`example` optional (dann `''`, `[]` bzw. Feld weglassen).
- `tags` ist **top-level**, NICHT in `de`/`en`. (Häufiger Fehler!)
- `de` und `en` haben **dieselben Keys**: `title, summary, content, didYouKnow`.
- `related` verweist nur auf existierende `id`s.
- `content` = HTML-String. Erlaubt: `<h3> <p> <ul> <li> <strong> <em> <code>`. Keine Inline-Styles, keine `<script>`.
- `sandbox`/`example` sind **top-level** (nicht in de/en). `example.html` darf Inline-Styles enthalten (fertige Demo, kein Fließtext).

---

## 2. Datei-Layout der Daten (gegen Merge-Konflikte)

Themen liegen **pro Kategorie** in eigener Datei — so kollidieren Content-Leute nicht:

```
js/modules/data/
├── gestaltung.js       →  export default [ {...}, {...} ]
├── farbe-typo.js       →  export default [ ... ]
├── bild-grafik.js      →  export default [ ... ]
└── web-ux.js           →  export default [ ... ]
js/modules/data.js      →  Barrel: fügt alle zusammen + Helper (NICHT anfassen)
```

**Content-Leute editieren NUR ihre Kategorie-Datei.** Neues Thema = Objekt ans Array anhängen. Fertig.
`data.js` (Barrel) fasst alles zu `topics` zusammen und exportiert die Helper — **nur Lead ändert das**.

---

## 3. Data-API (`data.js`) — fixe Signaturen

Alle Feature-Module importieren **nur hier**:

```js
import {
  topics,
  getTopicById,
  getTopicsByCategory,
  getTopicsByDifficulty,
  searchTopics,
} from './data.js';

topics; // Array<Topic> — alle Themen
getTopicById(id); // → Topic | undefined
getTopicsByCategory(cat); // cat='all' → alle; sonst gefiltert → Array<Topic>
getTopicsByDifficulty(diff); // diff='all' → alle; sonst gefiltert → Array<Topic>
searchTopics(query); // durchsucht title+summary+tags (de & en) → Array<Topic>
```

---

## 4. Feature-Modul-Schnittstellen — fixe Signaturen

**Nicht umbenennen, nicht Parameter ändern.** Jede Funktion gehört genau einem Owner (siehe CONTRIBUTING.md).

```js
// cards.js         (Dev A)
renderCards((containerSelector = '#topics-grid'), (data = topics)); // rendert Cards in Container

// search.js        (Dev A)
initSearch((containerSelector = '.challenge-search'), (cardSelector = '.challenge-topic-card'));

// filter.js        (Dev A)
initFilter(); // liest .challenge-filter, filtert Cards
resetFilters(); // setzt Filter zurück

// topics.js        (Dev B) — Detail/Modal
initTopicCards(); // hängt Klick→Detail an alle Cards

// bookmarks.js     (Dev B)
getBookmarks(); // → string[] (topic.id[])
addBookmark(id) / removeBookmark(id) / toggleBookmark(id); // localStorage-CRUD
isBookmarked(id); // → boolean
initBookmarkButtons(); // hängt Buttons an
renderBookmarks((containerSelector = '#bookmarks-list'));

// related.js       (Content/Lead)
getRelatedTopics(currentTopicId, (limit = 3)); // → Array<Topic>
renderRelated(currentTopicId, (containerSelector = '#related-topics'));

// sandbox.js       (Issue #52) — Live-Code-Playground
renderSandbox(topicId, (containerSelector = '#topic-sandbox')); // rendert nur, wenn topic.sandbox existiert

// example.js       — statische visuelle Beispiele
renderExample(topicId, (containerSelector = '#topic-example')); // rendert nur, wenn topic.example existiert
```

**Regel:** braucht dein Modul was Neues von einem anderen? → **erst mit Owner absprechen**, dann Signatur hier ergänzen. Nie still ändern.

---

## 5. DOM-Vertrag (HTML-Hooks)

Feature-Module suchen Elemente über **diese** Selektoren. HTML (`index.html`, Lead) und JS müssen übereinstimmen:

| Zweck              | Selektor                                           | Owner     |
| ------------------ | -------------------------------------------------- | --------- |
| Card-Container     | `#topics-grid`                                     | Lead/HTML |
| Einzelne Card      | `.challenge-topic-card` (+ `data-id="<topic.id>"`) | Dev A     |
| Such-Input         | `.challenge-search__input`                         | Dev A     |
| Filter-Container   | `.challenge-filter`                                | Dev A     |
| Detail-Modal       | `.challenge-modal`                                 | Dev B     |
| Bookmark-Liste     | `#bookmarks-list`                                  | Dev B     |
| Related-Liste      | `#related-topics`                                  | Content   |
| "Keine Ergebnisse" | `.challenge-search__no-results`                    | Dev A     |

**BEM-Namen für Cards** (fix, damit CSS + JS + Search zusammenpassen):

```
.challenge-topic-card
  .challenge-topic-card__category
  .challenge-topic-card__title
  .challenge-topic-card__summary
  .challenge-topic-card__difficulty
  .challenge-topic-card__bookmark
```

Zustände: `.u-hidden` (Search/Filter verstecken), `.is-bookmarked`, `.is-active`.

---

## 6. i18n-Vertrag

- Jeder sichtbare **statische** Text im HTML: `data-i18n="bereich.key"`.
- Topic-**Inhalte** kommen aus `data.js` (`de`/`en`), NICHT aus `translations/`.
- `translations/de.js` und `translations/en.js` haben **immer dieselben Keys**.
- Kategorie-Labels: Keys `category.gestaltung`, `category.farbe-typo`, `category.bild-grafik`, `category.web-ux`.
- Schwierigkeit: `filter.easy`, `filter.medium`, `filter.hard` (existieren schon).
- Aktive Sprache lesen: `getLanguage()` → `'de'` | `'en'`. Auf Wechsel reagieren: `onLangChange(cb)`.

---

## 7. Fixe Enums (Copy-Paste)

```js
CATEGORIES = ['gestaltung', 'farbe-typo', 'bild-grafik', 'web-ux'];
DIFFICULTIES = ['easy', 'medium', 'hard'];
CONFIG_LANGS = ['css', 'html', 'svg', 'js', 'json'];
STORAGE_KEY_BOOKMARKS = 'synthese-bookmarks';
```
