# COMMANDS.md — Befehls-Spickzettel

Alle Befehle im Projekt-Ordner ausführen (`cd synthese`).

## Repo holen (einmalig)

```bash
git clone https://github.com/AvoCloud-net/synthese.git
cd synthese
```

> Schon geklont? Neuesten Stand holen: `git checkout dev && git pull`.

## Bei GitHub anmelden (einmalig — damit du pushen kannst)

Ohne Anmeldung kannst du `git pull` machen, aber **nicht pushen**. Einmal einrichten:

```bash
gh auth login
```

Antworten im Menü (mit Pfeiltasten wählen, Enter):

1. **GitHub.com**
2. **HTTPS**
3. Authenticate Git with your GitHub credentials? → **Yes** (Y)
4. **Login with a web browser** → zeigt einen Code (z. B. `AB12-CD34`), Enter drücken → Browser öffnet → Code eingeben → **Authorize**.

> Kein `gh` installiert? `sudo dnf install gh` (Fedora) bzw. `brew install gh` (Mac).
> Prüfen ob angemeldet: `gh auth status`.

Danach funktioniert `git push` ohne Passwort-Abfrage.

> **Wichtig:** Pushen geht erst, wenn der Team-Lead dich als **Collaborator** im Repo hinzugefügt hat. Melde dich einmal an (oben) und sag dem Lead deinen GitHub-Namen.
> Du pushst **immer auf deinen eigenen `feature/...`-Branch** — nie direkt auf `dev`. Ablauf: siehe „Git — täglicher Ablauf" unten.

## Setup (einmalig)

```bash
nvm use            # Node-Version aus .nvmrc (22); sonst manuell Node >=20
npm install        # Abhängigkeiten holen
```

## Starten & Ansehen

```bash
npm run dev        # Dev-Server, öffnet /pages/index.html, Auto-Reload
npm run preview    # gebauten Stand (dist/) lokal ansehen
```

> `npm run dev` läuft mit `host: true` → im LAN erreichbar. Für **Handy-Test (320px)**:
> im Terminal die „Network"-URL (`http://192.168.x.x:5173/...`) am Handy im gleichen WLAN öffnen.
> Stoppen: `Strg + C`.

## Prüfen (vor jedem PR)

```bash
npm run build          # MUSS ohne roten Fehler durchlaufen
npm run format:check   # Formatierung ok? (nur prüfen, ändert nichts)
```

Dann im Browser (F12) → keine roten Konsolen-Fehler. Voll-Checkliste: **TESTING.md**.

## Formatieren

```bash
npm run format         # formatiert alles (Prettier) — vor dem Commit
```

## Git — täglicher Ablauf (Details: CONTRIBUTING.md)

```bash
git checkout dev              # auf dev
git pull                      # neuesten Stand holen
git checkout -b feature/name-thema   # eigenen Branch von dev

# ... arbeiten ...

npm run format               # formatieren
npm run build                # testen
git add <deine-dateien>      # nur DEINE Dateien (siehe FILE-OWNERSHIP.md)
git commit -m "typ: kurze beschreibung"
git push -u origin feature/name-thema
```

Dann auf GitHub **Pull Request → base `dev`** (NIE `main`), Issue verlinken: `Closes #<nr>`.

## Nützlich

```bash
git status                   # was habe ich geändert?
git branch                   # auf welchem Branch bin ich?
git checkout dev && git pull # zurück auf dev, aktualisieren
```

## Merge-Konflikt?

**STOP.** Nicht raten, nicht mit Gewalt. Team-Lead fragen. (CONTRIBUTING.md)

---

**Regeln kurz:** von `dev` abzweigen · PR nach `dev` · nur eigene Dateien · Build grün · `de.js`==`en.js` Keys.
Mehr: [CONTRIBUTING.md](CONTRIBUTING.md) · [FILE-OWNERSHIP.md](FILE-OWNERSHIP.md) · [TESTING.md](TESTING.md) · [AGENTS.md](AGENTS.md)
