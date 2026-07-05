# FILE-OWNERSHIP.md — wer bearbeitet welche Datei

Ziel: **keine Merge-Konflikte** + **einheitliche Dateinamen**. Jede Datei hat **einen** Besitzer (das Issue/die Person). Bevor du eine Datei anlegst → hier den Namen prüfen, **nicht** eigene Varianten erfinden.

**Grundregel:** Ändere **nur** die Datei(en) deines Issues. Fremde Datei nötig? → Team-Lead fragen, nicht selbst reingrätschen.

---

## 1. JS-Feature-Module (`src/js/modules/`) — je Datei ein Besitzer

| Datei                      | Issue(s)      | Status                              |
| -------------------------- | ------------- | ----------------------------------- |
| `cards.js`                 | #11, #12      | Stub, füllen                        |
| `search.js`                | #14           | Stub, füllen                        |
| `filter.js`                | #15, #16, #17 | Stub, füllen                        |
| `topics.js` (Detail/Modal) | #18, #19, #20 | teils fertig, erweitern             |
| `bookmarks.js`             | #21, #22, #23 | Stub, füllen                        |
| `config-copy.js`           | #24           | **neu anlegen** (genau dieser Name) |
| `related.js`               | #25           | Stub, füllen                        |
| `i18n.js`                  | #27, #28      | fertig, erweitern                   |

> Mehrere Issues auf **derselben** Datei (z. B. cards.js #11+#12) macht **dieselbe Person nacheinander** → kein Parallel-Konflikt.

## 2. Daten (`src/js/modules/data/`) — je Kategorie eine Datei

| Datei                    | Issue | Regel                              |
| ------------------------ | ----- | ---------------------------------- |
| `data/grundlagen.js`     | #34   | nur diese                          |
| `data/angriffe.js`       | #35   | nur diese                          |
| `data/schutz.js`         | #36   | nur diese                          |
| `data/infrastruktur.js`  | #37   | nur diese                          |
| `data.js` (Barrel + API) | —     | **nur LESEN**, nicht ändern (Lead) |

## 3. CSS (`src/css/`) — je Komponente eine Datei (alle: Design-Owner)

| Datei                                                 | Issue                          |
| ----------------------------------------------------- | ------------------------------ |
| `05-components/topic-card.css`                        | #29                            |
| `05-components/search-bar.css`                        | #30                            |
| `05-components/filter-bar.css`                        | #30                            |
| `05-components/topic-detail.css` (inkl. Config-Block) | #31                            |
| `05-components/bookmark-btn.css`                      | #29                            |
| `05-components/related-links.css`                     | #25/#31 (mit Design abstimmen) |
| `00-settings/tokens.css` (+ Brand-Integration)        | #32                            |
| `07-utilities/utilities.css` (Responsive-Utils)       | #33                            |

> Responsive-Feinschliff (#33) darf die Komponenten-CSS mitberühren — **derselbe** Design-Owner, daher konfliktfrei.

## 4. GETEILTE Dateien — besondere Regeln (Konflikt-Gefahr!)

### `src/js/main.js` (Verdrahtung)

- Nur die **1–2 Zeilen deines Moduls** ein-/auskommentieren (Import oben + Aufruf im Callback).
- Jedes Modul = andere Zeilen → git merged sauber. Lead prüft beim Merge.

### `src/translations/de.js` + `en.js`

- **Nur der i18n-Owner (#26)** legt UI-Text-Keys an — beide Dateien **gleiche Keys**.
- Andere Coder: **nicht** selbst reinschreiben → benötigte Keys in der **PR-Beschreibung** auflisten, #26 trägt sie ein.
- Ausnahme: Content-Issues (#34–#37) schreiben Texte **inline** in ihre `data/<kat>.js` (das sind keine translations).

### `src/pages/index.html`

- DOM-Anker existieren schon: `#topics-grid`, `.challenge-search` / `#topic-search`, `#category-filters`, `#difficulty-filters`, `#topic-modal`, `#bookmarks-list`, `#lang-switcher`.
- Karten, Filter-Buttons, Modal-Inhalt, Related, Config werden **per JS erzeugt** → index.html möglichst **nicht** anfassen.
- Musst du doch (z. B. neues Element): **nur deinen Abschnitt**, im Zweifel Lead integriert.

### `src/css/main.css` (Import-Hub)

- Nur **Lead/Design**. Neue CSS-Datei → hier `@import` ergänzen.

---

## 5. Einheitliche Namens-Konventionen

- JS-Module: **kebab-case**, ein Feature pro Datei (`config-copy.js`, nicht `configCopy.js`/`ConfigCopy.js`).
- CSS-Komponenten: **kebab-case** = BEM-Block (`topic-card.css` ↔ `.challenge-topic-card`).
- Keine Datei ohne Eintrag in dieser Tabelle neu anlegen. Unklar? → Team-Lead.
