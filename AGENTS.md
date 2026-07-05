# AGENTS.md — Anleitung für KI-Agenten (SYNTHESE)

> **Für dich, KI-Agent.** Du hilfst **einem Teammitglied**, eine zugewiesene Aufgabe (GitHub-Issue) umzusetzen.
> Lies zuerst diese Datei, dann die verlinkten Verträge. **Erfinde nichts** — alles Verbindliche steht in den MD-Docs.

---

## 1. Worum geht's

**SYNTHESE** = zweisprachiges (DE/EN), barrierefreies **Frontend-Lern-Kompendium**: „Server absichern & selbst hosten (kostenlos)" — nginx, fail2ban, ufw, SSH-Hardening, Docker, Brute-Force/DoS/DDoS.
Kein echter Server — reines **Vite + Vanilla HTML/CSS/JS** (keine Frameworks). Thema = Inhalt der Lernkarten.

## 2. Wie du arbeitest

1. Das Teammitglied nennt dir ein **Issue** (z. B. `#14 [Search] initSearch`). Setze **genau das** um — nicht mehr.
2. Halte dich **strikt** an die Verträge (§4). Bei Konflikt zwischen deiner Idee und dem Vertrag → **Vertrag gewinnt**.
3. Ändere **nur die Dateien deines Bereichs** (steht im Issue). Fremde Module nicht anfassen → sonst Merge-Konflikte.
4. Keine Architektur-Alleingänge: **kein Framework, kein Inline-`<script>`, keine neue Datenstruktur.**
5. `npm run build` muss **grün** bleiben.

## 3. Wo Aufgaben + Dateien liegen

| Was                                    | Wo                                                                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Board** (Aufgaben, Status, Priority) | Work Board #3 → https://github.com/orgs/AvoCloud-net/projects/3                                                                |
| **Issues**                             | Jedes Issue nennt **Modul + Signatur + Akzeptanzkriterien** — deine Checkliste.                                                |
| **Feature-Module**                     | `src/js/modules/*.js` — **Stubs mit `TODO`**. Du **füllst** sie, erstellst sie nicht neu.                                      |
| **Daten (nur nutzen)**                 | `src/js/modules/data.js` — API: `topics`, `getTopicById`, `getTopicsByCategory`, `searchTopics`, `CATEGORIES`, `DIFFICULTIES`. |
| **Themen-Inhalte**                     | `src/js/modules/data/<kategorie>.js` (`grundlagen/angriffe/schutz/infrastruktur`).                                             |
| **i18n**                               | `src/translations/de.js` + `en.js` — **identische Keys**.                                                                      |
| **CSS**                                | `src/css/` — ITCSS-Layer (`00-settings` … `09-print`), BEM `.challenge-*`.                                                     |
| **Einstieg / DOM**                     | `src/pages/index.html`. Verdrahtung: `src/js/main.js`.                                                                         |

## 4. Verbindliche Verträge — LESEN, dann befolgen

- **[DATA-SCHEMA.md](DATA-SCHEMA.md)** — Datenstruktur, Funktions-Signaturen, DOM-IDs/Klassen. **Nie abweichen.**
- **[FILE-OWNERSHIP.md](FILE-OWNERSHIP.md)** — welche Datei zu welchem Issue gehört + einheitliche Dateinamen. **Nur eigene Dateien ändern.** Jedes Issue hat unten eine `### Dateien`-Sektion.
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — Git/PR-Ablauf (von `dev` abzweigen, PR **nach `dev`**, nie `main`).
- **[TESTING.md](TESTING.md)** — was vor einem PR grün sein muss.
- **[PLAN.md](PLAN.md)** — Gesamtplan, Rollen, Zeitplan.

## 5. Wie du Fragen des Users beantwortest

- **Antworte AUS diesen MD-Docs.** Verweise auf die konkrete Datei/Abschnitt statt zu raten.
  - Git/PR/Commit → `CONTRIBUTING.md` · Datenstruktur/Signatur/DOM → `DATA-SCHEMA.md` · Testen → `TESTING.md` · Design/Farben → `brand/BRANDING.md`.
- **Steht die Antwort nicht in den Docs oder widersprechen sie sich** → sag das offen, rate **nicht**, verweise an den **Team-Lead** (Fabian).
- Triff **keine** eigenmächtigen Architektur- oder Design-Entscheidungen. Vorschläge ok — als Vorschlag markieren.

## 6. Pflicht-Regeln (kurz)

- **Build grün:** `npm run build`, keine roten Konsolen-Fehler.
- **ES6-Module**, keine Inline-Scripts.
- **i18n:** `de.js` und `en.js` haben **exakt** dieselben Keys; sichtbare Texte über `data-i18n`.
- **a11y** (ARIA, Tab-Fokus sichtbar, Enter/Space), **Dark + Light**, **Mobile 320–768px**.
- **`main.js`-Verdrahtung (2 Schritte):** Modul fertig → `import` **oben** einkommentieren **und** Aufruf im `DOMContentLoaded`-Block einkommentieren. `renderCards()` läuft **zuerst**.
- **Merge-Konflikt → STOP**, nicht raten, Team-Lead fragen.

## 7. Design = AvoCloud-Branding

Referenz im Repo: **[brand/BRANDING.md](brand/BRANDING.md)** + **[brand/avocloud.css](brand/avocloud.css)** (Tokens) + `brand/logo/`.

- **mono-first + coral akzent.** Neutrale Basis, **coral sparsam** (CTAs, Links, Highlights) — **nie** als Flächenfarbe, nie coral-Fließtext auf Cream.
- Farben **nur** über CSS-Variablen `--avo-*` (z. B. `--avo-primary`, `--avo-bg`, `--avo-surface`, `--avo-text`). **Keine Hardcode-Hex** in Komponenten.
- Fonts: **Syne** (Headings), **Quicksand** (Body), Mono für Code/Kicker/Tags.
- **Immer Light UND Dark** liefern.
- **Integration (Issue #22), Achtung:**
  - Alt-Tokens heißen `--challenge-*` → auf `--avo-*` **mappen** (Werte umbiegen, Variablennamen der Komponenten behalten).
  - Dark-Mode-Selektor: Projekt nutzt `html.dark-mode` / `[data-theme="dark"]`; `brand/avocloud.css` nutzt `html.dark` → beim Einbau **anpassen**.

## 8. Definition of Done (pro Issue)

- [ ] Alle **Akzeptanzkriterien** des Issues erfüllt
- [ ] `npm run build` grün, keine Konsolen-Fehler
- [ ] **Nur** die eigenen Dateien geändert
- [ ] DE + EN gepflegt (falls Text betroffen)
- [ ] Branch von `dev`, **PR nach `dev`** (base = `dev`!), Issue im PR verlinkt (`Closes #<nr>`)
