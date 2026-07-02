# SYNTHESE — Test-Checkliste

Kein CI in 2 Tagen → **manuelles Test-Gate**. Zwei Stufen:
- **A) Vor jedem PR-Merge nach `dev`** (Lead, schnell): baut es + tut das neue Feature was es soll?
- **B) Vor jedem `dev → main`** (Lead, voll): komplette Durchklick-Runde. `main` muss immer demo-fähig sein.

---

## A) Vor Merge nach `dev` (pro PR, ~2 Min)

```bash
git checkout <feature-branch>
npm install     # falls package.json sich änderte
npm run build   # MUSS ohne Fehler durchlaufen
npm run dev     # Seite öffnen
```

- [ ] `npm run build` läuft ohne roten Fehler durch
- [ ] Keine roten Fehler in der Browser-Konsole (F12)
- [ ] Das im PR beschriebene Feature funktioniert sichtbar
- [ ] Nur erwartete Dateien geändert (kein fremdes Modul mit-verändert)

Passt alles → PR mergen. Sonst → Kommentar an den Coder, zurück.

---

## B) Vor `dev → main` (Meilenstein, ~10 Min)

### Build & Konsole
- [ ] `npm run build` grün
- [ ] `npm run preview` öffnet die gebaute Seite, keine Konsolen-Fehler

### Pflicht-Features (durchklicken)
- [ ] **Cards:** Alle Themen erscheinen als Karten mit Titel, Kategorie, Schwierigkeit
- [ ] **Search:** Tippen filtert live; "keine Ergebnisse" erscheint bei Unsinn-Eingabe
- [ ] **Filter:** Kategorie- + Schwierigkeits-Filter zeigen korrekte Teilmenge; Reset funktioniert
- [ ] **Detail:** Klick auf Card öffnet Detail mit vollem Inhalt; schließen geht
- [ ] **Bookmarks:** Setzen/Entfernen funktioniert; bleibt nach Seiten-Reload (localStorage)

### Extra (wenn aktiv)
- [ ] **Config-Copy:** Copy-Button kopiert den Snippet in die Zwischenablage

### i18n
- [ ] Sprachumschalter DE ↔ EN wechselt ALLE sichtbaren Texte (kein Reload)
- [ ] Keine fehlenden Keys (kein `filter.category` roh sichtbar)
- [ ] Topic-Inhalte wechseln mit der Sprache

### Accessibility (Schnell-Check)
- [ ] Nur mit Tab-Taste durch Cards/Filter/Buttons navigierbar
- [ ] Fokus-Rahmen sichtbar
- [ ] Enter/Space öffnet fokussierte Card
- [ ] Bilder haben alt-Text

### Design / Responsive
- [ ] Dark/Light-Umschalter funktioniert
- [ ] Bei 320px Breite (DevTools Mobile) kein horizontales Scrollen, nichts abgeschnitten
- [ ] Hover-/Übergangseffekte flüssig

### Daten-Integrität (Schema)
- [ ] Jedes neue Thema hat: `id, category, difficulty, tags, related, de{title,summary,content,didYouKnow}, en{...}`
- [ ] `de.js` und `en.js` haben dieselben Keys
- [ ] `related` verweist nur auf existierende `id`s

Alles grün → `git checkout main && git merge --no-ff dev && git push`.
