# SYNTHESE — Datenstruktur & Schnittstellen (verbindlich)

> **Das ist der Vertrag.** Feld-Namen, Funktions-Signaturen und DOM-Selektoren hier sind **fix**.
> Niemand ändert sie ohne Absprache mit dem Team-Lead — sonst brechen fremde Module.
> KI-Prompts **immer** dieses Dokument mitgeben ("halte dich exakt an DATA-SCHEMA.md").

---

## 1. Das Topic-Objekt (Kern-Datenstruktur)

Jedes Thema ist ein Objekt mit **genau** diesen Feldern:

```js
{
  id: 'brute-force',            // string, eindeutig, kebab-case. Referenz für related/bookmarks.
  category: 'angriffe',         // FIX: 'grundlagen' | 'angriffe' | 'schutz' | 'infrastruktur'
  difficulty: 'easy',           // FIX: 'easy' | 'medium' | 'hard'
  image: 'synthese-brute.jpg',  // Dateiname in assets/images/ (oder '' für Icon-Fallback)
  icon: 'ph-lock',              // Phosphor-Icon-Klasse (Fallback wenn kein Bild)
  tags: ['brute-force', 'ssh', 'passwort'],  // string[], lowercase. TOP-LEVEL (nicht in de/en!)
  related: ['fail2ban', 'ssh-hardening'],    // string[] von anderen topic.id

  de: {
    title: 'Brute-Force-Angriffe',
    summary: 'Kurzbeschreibung in 1 Satz für die Card.',
    content: `<h3>...</h3><p>...</p>`,   // HTML-String, nur h3/p/ul/li/strong/code
    didYouKnow: 'Ein interessanter Fakt.'
  },
  en: {
    title: 'Brute-Force Attacks',
    summary: 'One-sentence summary for the card.',
    content: `<h3>...</h3><p>...</p>`,
    didYouKnow: 'An interesting fact.'
  },

  // NEU (Innovations-Tweak): Copy-Config-Blöcke. Leeres Array [] wenn keine.
  configs: [
    {
      labelDe: 'fail2ban SSH-Jail',
      labelEn: 'fail2ban SSH jail',
      lang: 'ini',                // 'ini' | 'bash' | 'nginx' | 'yaml' | 'conf'
      code: `[sshd]\nenabled = true\nmaxretry = 3\nbantime = 3600`
    }
  ]
}
```

**Regeln:**

- **Pflichtfelder:** `id, category, difficulty, tags, related, de, en`. `image`/`icon`/`configs` optional (dann `''` bzw. `[]`).
- `tags` ist **top-level**, NICHT in `de`/`en`. (Häufiger Fehler!)
- `de` und `en` haben **dieselben Keys**: `title, summary, content, didYouKnow`.
- `related` verweist nur auf existierende `id`s.
- `content` = HTML-String. Erlaubt: `<h3> <p> <ul> <li> <strong> <code>`. Keine Inline-Styles, keine `<script>`.

---

## 2. Datei-Layout der Daten (gegen Merge-Konflikte)

Themen liegen **pro Kategorie** in eigener Datei — so kollidieren Content-Leute nicht:

```
js/modules/data/
├── grundlagen.js       →  export default [ {...}, {...} ]
├── angriffe.js         →  export default [ ... ]
├── schutz.js           →  export default [ ... ]
└── infrastruktur.js    →  export default [ ... ]
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
- Kategorie-Labels: Keys `category.grundlagen`, `category.angriffe`, `category.schutz`, `category.infrastruktur`.
- Schwierigkeit: `filter.easy`, `filter.medium`, `filter.hard` (existieren schon).
- Aktive Sprache lesen: `getLanguage()` → `'de'` | `'en'`. Auf Wechsel reagieren: `onLangChange(cb)`.

---

## 7. Fixe Enums (Copy-Paste)

```js
CATEGORIES = ['grundlagen', 'angriffe', 'schutz', 'infrastruktur'];
DIFFICULTIES = ['easy', 'medium', 'hard'];
CONFIG_LANGS = ['ini', 'bash', 'nginx', 'yaml', 'conf'];
STORAGE_KEY_BOOKMARKS = 'synthese-bookmarks';
```
