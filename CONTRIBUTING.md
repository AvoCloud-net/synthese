# Mitarbeiten am SYNTHESE-Projekt — Anleitung für Coder

> Diese Anleitung ist für **alle im Team**. Genau so arbeiten, dann gibt es keine Merge-Konflikte.
> Bei **jedem** Problem mit Git: **NICHTS löschen, NICHTS erzwingen → sofort Team-Lead fragen.**

---

## 0. Einmalig einrichten (nur beim ersten Mal)

1. **GitHub-Account** erstellen: https://github.com/signup
   → deinen Benutzernamen dem Team-Lead schicken (er lädt dich zum Repo ein).
2. **Git installieren:** https://git-scm.com/downloads
3. **Namen + E-Mail setzen** (Terminal öffnen, beide Zeilen mit deinen Daten ausführen):
   ```bash
   git config --global user.name "Vorname Nachname"
   git config --global user.email "deine@email.at"
   ```

---

## 1. Projekt herunterladen (nur beim ersten Mal)

Team-Lead gibt dir die Repo-Adresse. Dann im Terminal:

```bash
git clone https://github.com/DEIN-TEAM-LEAD/synthese.git
cd synthese
npm install
npm run dev
```

`npm run dev` startet die Seite lokal (Adresse steht im Terminal, z.B. `http://localhost:5173`).

---

## 2. Welche Dateien darfst DU anfassen?

**Nur deine eigenen Dateien anfassen** — das ist der wichtigste Trick gegen Konflikte.

| Rolle | Deine Dateien |
|-------|---------------|
| Feature-Dev A | `js/modules/cards.js`, `search.js`, `filter.js` |
| Feature-Dev B | `js/modules/topics.js`, `bookmarks.js` |
| Content / i18n | `js/modules/data/*.js`, `translations/de.js`, `translations/en.js` |
| Design / a11y | `css/**`, Bilder in `assets/` |
| Team-Lead | `main.js`, `index.html`, alles beim Review, **`dev → main` Merges** |

Musst du eine **fremde** Datei ändern? → **erst im Team absprechen**, nicht einfach machen.

---

## 3. Der tägliche Ablauf (IMMER so)

> **Wichtig:** Wir arbeiten gegen den **`dev`**-Branch, NICHT `main`.
> `main` ist der stabile Vorführ-Branch — den fasst nur der Team-Lead an.
> Ablauf: `feature/...` → PR nach **`dev`** → (Lead testet) → Lead schiebt nach `main`.

### Schritt 1 — Neuesten Stand holen
Bevor du anfängst, immer zuerst den `dev`-Stand holen:
```bash
git checkout dev
git pull
```

### Schritt 2 — Eigenen Branch erstellen
Nie direkt auf `dev` oder `main` arbeiten! Eigenen Branch **von `dev`** machen:
```bash
git checkout -b feature/deinname-was-du-machst
```
Beispiel: `git checkout -b feature/lisa-suche`
(Wichtig: vorher in Schritt 1 auf `dev` sein — dann zweigt der Branch korrekt von `dev` ab.)

### Schritt 3 — Arbeiten
Code schreiben. `npm run dev` läuft nebenbei und zeigt Änderungen live.

### Schritt 4 — Speichern (commit)
Wenn ein Stück fertig ist (klein halten!):
```bash
git add .
git commit -m "feat: Suche filtert jetzt nach Titel"
```

### Schritt 5 — Hochladen (push)
```bash
git push -u origin feature/deinname-was-du-machst
```
(Beim ersten Push zeigt Git dir einen Link — den brauchst du in Schritt 6.)

### Schritt 6 — Pull Request (PR) an den Lead — im Browser
1. Gehe auf die Repo-Seite auf **github.com**.
2. Gelber Balken oben: **"Compare & pull request"** → klick.
   (Kein Balken? → Reiter **"Pull requests"** → **"New pull request"** → deinen Branch wählen.)
3. **base:** `dev`  ←  **compare:** dein Branch. ⚠️ **base muss `dev` sein, NICHT `main`!** (Prüfen!)
4. Titel = kurz was du gemacht hast. Beschreibung = 1-2 Sätze.
5. Rechts bei **"Reviewers"** den **Team-Lead** auswählen.
6. **"Create pull request"** klicken. Fertig — Lead bekommt Bescheid.

### Schritt 7 — Warten auf Review
- Lead schaut drauf und **merged** (übernimmt) deinen Code, **oder** schreibt einen Kommentar mit Änderungswunsch.
- Änderungswunsch? → einfach im **gleichen Branch** weiterarbeiten, wieder `git add .` → `git commit` → `git push`. Der PR aktualisiert sich automatisch.

### Schritt 8 — Nach dem Merge: neu anfangen
Wenn dein PR gemerged ist, für die nächste Aufgabe zurück zu Schritt 1:
```bash
git checkout dev
git pull
git checkout -b feature/deinname-naechste-aufgabe
```

---

## 4. Commit-Nachrichten (einfaches Format)

`typ: was du gemacht hast` — kurz, Gegenwart.

| typ | wofür |
|-----|-------|
| `feat` | neues Feature |
| `fix` | Bug behoben |
| `style` | CSS/Design |
| `content` | Themen-Texte |
| `docs` | Doku |

Beispiele: `feat: Bookmark-Button speichert in localStorage` · `fix: Filter zeigte falsche Kategorie` · `content: Thema fail2ban DE`

---

## 5. Branch-Namen

Immer: `feature/deinname-thema` — z.B. `feature/tom-bookmarks`, `feature/lisa-detail-modal`.

---

## 6. ⚠️ Merge-Konflikt? → STOP

Wenn Git etwas von **"conflict"** oder **"CONFLICT"** sagt:
1. **Nicht in Panik löschen, nichts mit `--force` erzwingen.**
2. **Team-Lead holen.** Zusammen lösen. Das ist normal, kein Drama.

Konflikte vermeidest du, indem du (a) nur deine Dateien anfässt und (b) oft `git checkout dev && git pull` machst.

---

## 7. Spickzettel

```bash
git status                          # was habe ich geändert?
git checkout dev && git pull        # neuesten dev-Stand holen
git checkout -b feature/name-thema  # neuer Branch (von dev!)
git add . && git commit -m "feat: ..."   # speichern
git push -u origin feature/name-thema    # hochladen → dann PR nach dev im Browser
```

**Goldene Regeln:** von `dev` abzweigen · PR nach `dev` · `main` nie anfassen · kleine PRs · oft pushen · nur eigene Dateien · bei Git-Problem sofort Lead fragen.
