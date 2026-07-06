# SYNTHESE — Projektplan

**Team A · KI Challenge 2026**
**Titel:** SYNTHESE — Interaktives Mediendesign-Kompendium
**Deliverable:** Frontend-Lern-Kompendium (Vite, HTML/CSS/JS). Thema = Inhalt der Lernkarten (Mediendesign).
**Methode:** Entwicklung **mit AI-Coding-Tools** (Kern-Ziel des Projekts). KI generiert Code + Content, Team reviewt, passt in Architektur ein, kann jede Entscheidung erklären. Gute Prompts = eigene Bonus-Kategorie.

---

## 1. Ziel

Ein bilinguales (DE/EN), barrierefreies, gamifiziertes Web-Kompendium, das die Grundlagen des **Mediendesigns** vermittelt: Gestaltung & Layout, Farbe & Typografie, Bild & Grafik sowie Web & UX. Zielgruppe: Schüler/Einsteiger in Medien- und Grafikgestaltung.

Bewertet wird (Rubric, 100 P): Architektur 25 · Funktionalität 25 · Design/UX 15 · i18n/a11y 15 · Team/Präsentation 10 · Innovation +10.

**Nicht-Ziele:** Backend, Login, DB, Datei-Upload/echter Editor. Alles Client-seitig (localStorage für Bookmarks).

---

## 2. Architektur-Regeln (nicht verhandelbar — 25 P)

- **CSS:** ITCSS-Layer (`00-settings` … `09-print`), `@layer`. Alle Klassen `.challenge-*` (BEM) bzw. `.u-*` / `.is-*` / `.has-*`.
- **JS:** modular, ES6 Import/Export, **keine** Inline-Scripts.
- **HTML:** semantisch (`<header> <main> <article> <nav>`), `data-i18n` auf jedem sichtbaren Text.
- **i18n:** `de.js` und `en.js` **immer gleiche Keys**. Sprachwechsel ohne Reload.
- **a11y:** ARIA-Labels, sichtbarer Fokus, logische Tab-Reihenfolge, Mobile 320–768px, Dark/Light.

Scaffold existiert schon in `src/` (Module + CSS-Komponenten + i18n). Wird umgenutzt, nicht neu gebaut.

---

## 3. Themen (Content) — Mediendesign

4 Kategorien, difficulty easy/medium/hard. Kern = 14, Rest = Stretch. Kategorie-IDs (fix): `gestaltung`, `farbe-typo`, `bild-grafik`, `web-ux`.

### Gestaltung (`gestaltung`)

| #   | Thema                          | Diff   | Kern-Inhalt                                     |
| --- | ------------------------------ | ------ | ----------------------------------------------- |
| 1   | Gestaltgesetze                 | easy   | Nähe, Ähnlichkeit, Geschlossenheit, Figur-Grund |
| 2   | Layout & Gestaltungsraster     | medium | Spalten, Stege, Weißraum, 12-Spalten-Raster     |
| 3   | Komposition & Goldener Schnitt | medium | Drittelregel, Blickführung, Proportionen        |

### Farbe & Typografie (`farbe-typo`)

| #   | Thema                      | Diff   | Kern-Inhalt                              |
| --- | -------------------------- | ------ | ---------------------------------------- |
| 4   | RGB vs. CMYK — Farbmodelle | easy   | additiv/subtraktiv, Bildschirm vs. Druck |
| 5   | Farbharmonie & Kontraste   | medium | Farbkreis, komplementär/analog/triadisch |
| 6   | Typografie-Grundlagen      | easy   | Hierarchie, Zeilenlänge, line-height     |
| 7   | Schriftklassifikation      | medium | Serif, Sans, Slab, Script — Wirkung      |

### Bild & Grafik (`bild-grafik`)

| #   | Thema                | Diff   | Kern-Inhalt                                  |
| --- | -------------------- | ------ | -------------------------------------------- |
| 8   | Raster vs. Vektor    | easy   | Pixel vs. Pfade, Skalierbarkeit, SVG         |
| 9   | Auflösung & DPI      | medium | PPI/DPI, Web vs. Druck (300 DPI), Skalieren  |
| 10  | Bild-Dateiformate    | easy   | JPG/PNG/SVG/WebP, Transparenz, Faustregeln   |
| 11  | Kompression & Codecs | hard   | lossy/lossless, Codec vs. Container, Bitrate |

### Web & UX (`web-ux`)

| #   | Thema                   | Diff   | Kern-Inhalt                                 |
| --- | ----------------------- | ------ | ------------------------------------------- |
| 12  | Responsive Design       | easy   | Mobile First, Media Queries, flexible Units |
| 13  | UI/UX-Grundlagen        | medium | UI vs. UX, Konsistenz, Feedback, Zustände   |
| 14  | Barrierefreiheit (A11y) | medium | Kontrast 4,5:1, Tastatur, Semantik, ARIA    |
| 15  | CSS Grid & Flexbox      | hard   | eine vs. zwei Achsen, kombinieren           |

**Related-Graph-Beispiel:** Gestaltgesetze → Layout/Raster → CSS Grid → Responsive Design → UI/UX.

### Priorität (Content via AI-Coding-Tools → geht sich aus)

Ziel = alle **14 Kern** (siehe Tabellen), plus weitere Themen wenn Zeit. Content wird KI-generiert + vom Team geprüft/eingepasst (accuracy + i18n-sync + BEM). Die 8 unten = **Tag-1-Sicherheitsnetz** (muss Ende Tag 1 stehen), damit selbst im schlimmsten Fall voller Kategorie- + Difficulty-Spread da ist.

**Tag-1-Sicherheitsnetz (8):** Gestaltgesetze · Layout/Raster · RGB vs. CMYK · Typografie-Grundlagen · Raster vs. Vektor · Bild-Dateiformate · Responsive Design · Barrierefreiheit.

---

## 4. Features

### Pflicht (25 P)

1. **Topic-Cards** — Grid: Bild/Icon, Titel, Kategorie, Schwierigkeit
2. **Search** — Echtzeit über Titel + Content + Tags
3. **Filter** — Kategorie + Schwierigkeit
4. **Topic-Detail** — Modal/Seite mit vollem Inhalt
5. **Bookmarks** — localStorage

### Extras (Innovation +10, schon im Scaffold)

- **Code-Copy-Block** (NEU, Kern-Tweak) — im Detail echter CSS/HTML/SVG-Schnipsel mit Copy-Button
- XP-Bar, Mission, Classroom-Mode, Reading-Mode, Related-Links

---

## 5. Rollen (4–5 Personen)

| Rolle                     | Owner | Aufgaben                                                                                    |
| ------------------------- | ----- | ------------------------------------------------------------------------------------------- |
| **Team-Lead / Architekt** | du    | Vite-Setup, ITCSS/BEM durchsetzen, Datenschema, `main.js`, Reviews, Integration, Präsi-Lead |
| **Feature-Dev A**         | —     | Cards + Search + Filter (`cards.js`, `search.js`, `filter.js`)                              |
| **Feature-Dev B**         | —     | Topic-Detail + Bookmarks + **Config-Copy-Tweak** (`topics.js`, `bookmarks.js`)              |
| **Content / i18n-Lead**   | —     | `data.js` alle Themen DE/EN, `de.js`/`en.js` sync, Related-Graph, Tags                      |
| **Design / a11y-Lead**    | —     | `tokens.css`, SVG-Diagramme/Icons, Hero, Dark/Light, ARIA/Keyboard/Mobile                   |

**Nur 4:** Design/a11y → Team-Lead übernimmt Tokens+a11y, Content-Lead macht Bilder-SVGs mit.
Extras (XP/Mission/Classroom) = Stretch, jeder nach Fertigstellung seines Kerns.

---

## 6. Zeitplan — 2 Tage (Mo 6.7 + Di 7.7 2026)

Hart getaktet. Feature-Freeze **Di früher Nachmittag** — Rest = Präsi (Rubric 10 P + Bonus).

### Tag 1 — Mo 6.7 (bauen)

| Zeit           | Wer     | Ziel                                                                                           |
| -------------- | ------- | ---------------------------------------------------------------------------------------------- |
| Vormittag      | Lead    | **M0 Setup:** Vite init, `npm run dev` läuft, Git, Datenschema in `data.js` final, Rollen fix  |
| Vormittag      | Content | 3–4 Beispiel-Themen DE eintragen (damit Devs echte Daten haben)                                |
| Vormittag      | Design  | `tokens.css` (Farben/Spacing/Dark-Light), `index.html` semantisch                              |
| Nachmittag     | Dev A   | Cards + Search + Filter mit echten Daten                                                       |
| Nachmittag     | Dev B   | Topic-Detail + Bookmarks                                                                       |
| Nachmittag     | Content | Sicherheitsnetz-8 DE fertig (KI-generiert + geprüft), Tags + Related; weitere Themen wenn Zeit |
| **Ende Tag 1** | alle    | **Alle 5 Pflicht-Features laufen mit ≥8 Themen (DE). i18n-Keys stehen.**                       |

### Tag 2 — Di 7.7 (fertig + Präsi)

| Zeit           | Wer     | Ziel                                                                                  |
| -------------- | ------- | ------------------------------------------------------------------------------------- |
| Früh-Vormittag | Content | restliche Kern-Themen (bis 16) + EN-Übersetzungen (KI), `de.js`==`en.js` sync geprüft |
| Vormittag      | Dev B   | **Code-Copy-Tweak** (CSS/HTML/SVG-Schnipsel + Copy-Button)                            |
| Vormittag      | Design  | a11y-Pass (ARIA/Fokus/Tab), Mobile 320–768, Dark/Light, SVG-Diagramme                 |
| Vormittag      | Dev A   | Extras aktivieren wenn Zeit (XP/Mission/Classroom/Reading)                            |
| **~13:00**     | alle    | **FEATURE-FREEZE.** Nur noch Bugfix.                                                  |
| Nachmittag     | alle    | Präsi bauen, Probe, **jeder lernt seinen Teil erklären** (Rubric-Gesprächsfragen!)    |

**Wenn Zeit knapp:** Extras streichen (nicht Pflicht), Themen beim Sicherheitsnetz-8 lassen. Nie Präsi-Zeit opfern.

---

## 7. Setup (Team-Lead, M0)

```bash
cd projects/synthese
npm create vite@latest . -- --template vanilla   # dann src/ behalten, entry auf pages/index.html
npm install
npm run dev        # Dev-Server
npm run build      # Prod-Build
npm run preview
```

Vite Multi-Entry auf `src/pages/index.html` zeigen lassen. Git früh init, `.gitignore` für `node_modules/` + `dist/`.

---

## 8. Risiken

| Risiko                                   | Gegenmaßnahme                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| Scope-Creep → echten Editor/Upload bauen | Strikt: nur Content-Karten. Kein Backend.                                        |
| Bilder inkonsistent/rechtlich unklar     | Eigene SVG-Diagramme/Icons + einheitliche Motive → gibt Design+Innovation zurück |
| i18n-Keys driften                        | Content-Lead prüft `de.js`==`en.js` Keys bei jedem M                             |
| KI generiert BEM-Verstöße                | Architekt reviewt, Prompt-Templates aus `teacher/prompt-templates/` nutzen       |
| Niemand kann Code erklären (Rubric!)     | Jeder dokumentiert seine Modul-Entscheidung, Präsi-Probe in M5                   |
