# SYNTHESE

**Mediendesign — Gestaltung, Farbe, Typografie & Web** — ein interaktives, zweisprachiges (DE/EN) Lern-Kompendium.

> KI Challenge 2026 · Team A · entwickelt mit AI-Coding-Tools.

Ein Frontend-Nachschlagewerk, das die Grundlagen des Mediendesigns erklärt: Gestaltgesetze & Layout, Farbmodelle & Typografie, Bild & Grafik (Raster/Vektor, Formate, Kompression) sowie Web & UX. Themen als durchsuchbare, filterbare Karten mit Detailansicht, Lesezeichen und kopierbaren Code-Snippets (CSS/HTML/SVG).

---

## Quick Start

```bash
git clone https://github.com/AvoCloud-net/synthese.git
cd synthese
npm install
npm run dev      # Dev-Server (öffnet /pages/index.html)
```

Weitere Befehle:

```bash
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

**Voraussetzung:** Node.js ≥ 20.

---

## Features

- **Topic-Cards** — Grid aus Themen mit Kategorie & Schwierigkeit
- **Suche** — Echtzeit über Titel, Summary, Tags
- **Filter** — nach Kategorie und Schwierigkeit
- **Detail-Ansicht** — voller Inhalt je Thema
- **Bookmarks** — localStorage-basiert
- **Code-Copy** — kopierbare CSS/HTML/SVG-Snippets im Detail
- Zweisprachig DE/EN · Dark/Light · Accessibility · Mobile-First

## Themen-Kategorien

`Gestaltung` · `Farbe & Typografie` · `Bild & Grafik` · `Web & UX` — Gestaltgesetze, Layout/Raster, Farbmodelle, Typografie, Raster vs. Vektor, Dateiformate, Responsive Design, UI/UX & Accessibility.

---

## Tech-Stack

- **Vite** (Build/Dev-Server)
- Vanilla **HTML/CSS/JS** — keine Frameworks
- **CSS:** ITCSS-Layer + BEM (`.challenge-*`)
- **JS:** ES6-Module
- **i18n:** eigenes System, `translations/de.js` + `en.js`

## Projekt-Struktur

```
src/
├── pages/index.html        # Einstieg
├── css/                    # ITCSS (00-settings … 09-print)
├── js/
│   ├── main.js             # Entry
│   └── modules/            # Feature-Module + data/
│       └── data/           # Themen pro Kategorie
├── translations/           # de.js / en.js
└── assets/                 # Bilder, Favicon
```

---

## Mitarbeiten

Wir arbeiten mit **Feature-Branches → PR nach `dev` → `main`** (stabiler Präsi-Branch).

- 🧑‍💻 **Coder:** [CONTRIBUTING.md](CONTRIBUTING.md) — Schritt-für-Schritt Git-/PR-Anleitung
- 🧩 **Datenstruktur & Schnittstellen (verbindlich):** [DATA-SCHEMA.md](DATA-SCHEMA.md)
- 🗺️ **Projektplan & Zeitplan:** [PLAN.md](PLAN.md)
- ✅ **Test-Checkliste:** [TESTING.md](TESTING.md)

> **Wichtig:** immer von `dev` abzweigen, PR nach `dev`, `main` nie direkt anfassen. Nur eigene Dateien ändern.
