# SYNTHESE — Projektplan

**Team A · KI Challenge 2026**
**Titel:** SYNTHESE — Server absichern & selbst hosten (kostenlos)
**Deliverable:** Frontend-Lern-Kompendium (Vite, HTML/CSS/JS). **Kein** echter Server — Thema = Inhalt der Lernkarten.
**Methode:** Entwicklung **mit AI-Coding-Tools** (Kern-Ziel des Projekts). KI generiert Code + Content, Team reviewt, passt in Architektur ein, kann jede Entscheidung erklären. Gute Prompts = eigene Bonus-Kategorie.

---

## 1. Ziel

Ein bilinguales (DE/EN), barrierefreies, gamifiziertes Web-Kompendium, das erklärt, wie man einen Server **kostenlos** gegen typische Angriffe (Brute-Force, DoS/DDoS, Scanning) absichert und mit Docker + nginx selbst hostet. Zielgruppe: Schüler/Einsteiger im Self-Hosting.

Bewertet wird (Rubric, 100 P): Architektur 25 · Funktionalität 25 · Design/UX 15 · i18n/a11y 15 · Team/Präsentation 10 · Innovation +10.

**Nicht-Ziele:** echten Server aufsetzen, Backend, Login, DB. Alles Client-seitig (localStorage für Bookmarks).

---

## 2. Architektur-Regeln (nicht verhandelbar — 25 P)

- **CSS:** ITCSS-Layer (`00-settings` … `09-print`), `@layer`. Alle Klassen `.challenge-*` (BEM) bzw. `.u-*` / `.is-*` / `.has-*`.
- **JS:** modular, ES6 Import/Export, **keine** Inline-Scripts.
- **HTML:** semantisch (`<header> <main> <article> <nav>`), `data-i18n` auf jedem sichtbaren Text.
- **i18n:** `de.js` und `en.js` **immer gleiche Keys**. Sprachwechsel ohne Reload.
- **a11y:** ARIA-Labels, sichtbarer Fokus, logische Tab-Reihenfolge, Mobile 320–768px, Dark/Light.

Scaffold existiert schon in `src/` (Module + CSS-Komponenten + i18n). Wird umgenutzt, nicht neu gebaut.

---

## 3. Themen (Content) — nginx-fokussiert

4 Kategorien, difficulty easy/medium/hard. Kern = 16, Rest = Stretch.

### Grundlagen
| # | Thema | Diff | Kern-Inhalt |
|---|-------|------|-------------|
| 1 | Ports & Sockets | easy | TCP/UDP, well-known ports, `ss -tulpn`, was hört wo |
| 2 | Firewall-Grundlagen | easy | default-deny, ingress/egress, stateful |
| 3 | SSH-Grundlagen | easy | Key vs Passwort, `ssh-keygen`, `~/.ssh/authorized_keys` |
| 4 | TLS / HTTPS & Zertifikate | medium | Handshake, CA, warum HTTPS überall |
| 5 | Linux-User & Least Privilege | medium | non-root, `sudo`, warum nie als root laufen |

### Angriffe
| # | Thema | Diff | Kern-Inhalt |
|---|-------|------|-------------|
| 6 | Brute-Force & Credential Stuffing | easy | dictionary, geleakte Passwörter |
| 7 | DoS vs DDoS | medium | volumetric, amplification, Botnet |
| 8 | Port-Scanning & Recon | medium | `nmap`, wie Angreifer offene Dienste finden |
| 9 | Slowloris & L7-Angriffe | hard | HTTP-Level-DoS gegen nginx, langsame Requests |
| 10 | Phishing / Social Engineering | easy | Human Layer, warum Technik allein nicht reicht |

### Schutz
| # | Thema | Diff | Kern-Inhalt |
|---|-------|------|-------------|
| 11 | fail2ban | medium | Jails, Filter, Ban nach X Fehlversuchen (SSH + nginx-Logs) |
| 12 | Rate-Limiting mit nginx | hard | `limit_req_zone`, `limit_conn`, burst, gegen Brute-Force/L7 |
| 13 | ufw / iptables | medium | default deny, nur 22/80/443 erlauben |
| 14 | SSH-Hardening | medium | Key-only, `PermitRootLogin no`, `MaxAuthTries`, Port ändern |
| 15 | 2FA / MFA | easy | TOTP, warum zweiter Faktor Brute-Force killt |
| 16 | GeoIP / IP-Allowlist in nginx | hard | `geo`-Modul, `allow`/`deny`, Angriffs-Regionen sperren |

### Infrastruktur
| # | Thema | Diff | Kern-Inhalt |
|---|-------|------|-------------|
| 17 | Docker-Grundlagen | easy | Image vs Container, Isolation als Schutz |
| 18 | docker-compose | medium | services, networks, volumes |
| 19 | nginx als Reverse-Proxy | medium | `proxy_pass`, `upstream`, warum vor die App |
| 20 | Let's Encrypt / certbot + nginx | medium | Auto-Renew, kostenloses TLS |
| 21 | Security-Header in nginx | medium | HSTS, CSP, X-Frame-Options, X-Content-Type |
| 22 | Monitoring & Uptime | easy | Logs, `fail2ban-client status`, uptime-kuma |
| 23 | Backups & Recovery | easy | 3-2-1-Regel, warum Recovery testen |

**Related-Graph-Beispiel:** Brute-Force → fail2ban → SSH-Hardening → Rate-Limiting → nginx-Reverse-Proxy.

### Priorität (Content via AI-Coding-Tools → geht sich aus)
Ziel = alle **16 Kern**, plus Stretch (17–23) wenn Zeit. Content wird KI-generiert + vom Team geprüft/eingepasst (accuracy + i18n-sync + BEM). Die 8 unten = **Tag-1-Sicherheitsnetz** (muss Ende Tag 1 stehen), damit selbst im schlimmsten Fall voller Kategorie- + Difficulty-Spread da ist.

**Tag-1-Sicherheitsnetz (8):** Ports · SSH-Grundlagen · Brute-Force · DoS/DDoS · fail2ban · Rate-Limiting nginx · Docker · nginx Reverse-Proxy.

---

## 4. Features

### Pflicht (25 P)
1. **Topic-Cards** — Grid: Bild/Icon, Titel, Kategorie, Schwierigkeit
2. **Search** — Echtzeit über Titel + Content + Tags
3. **Filter** — Kategorie + Schwierigkeit
4. **Topic-Detail** — Modal/Seite mit vollem Inhalt
5. **Bookmarks** — localStorage

### Extras (Innovation +10, schon im Scaffold)
- **Config-Copy-Block** (NEU, Kern-Tweak) — im Detail echter nginx/fail2ban/ufw/docker-compose-Schnipsel mit Copy-Button
- XP-Bar, Mission, Classroom-Mode, Reading-Mode, Related-Links

---

## 5. Rollen (4–5 Personen)

| Rolle | Owner | Aufgaben |
|-------|-------|----------|
| **Team-Lead / Architekt** | du | Vite-Setup, ITCSS/BEM durchsetzen, Datenschema, `main.js`, Reviews, Integration, Präsi-Lead |
| **Feature-Dev A** | — | Cards + Search + Filter (`cards.js`, `search.js`, `filter.js`) |
| **Feature-Dev B** | — | Topic-Detail + Bookmarks + **Config-Copy-Tweak** (`topics.js`, `bookmarks.js`) |
| **Content / i18n-Lead** | — | `data.js` alle Themen DE/EN, `de.js`/`en.js` sync, Related-Graph, Tags |
| **Design / a11y-Lead** | — | `tokens.css`, SVG-Diagramme/Icons, Hero, Dark/Light, ARIA/Keyboard/Mobile |

**Nur 4:** Design/a11y → Team-Lead übernimmt Tokens+a11y, Content-Lead macht Bilder-SVGs mit.
Extras (XP/Mission/Classroom) = Stretch, jeder nach Fertigstellung seines Kerns.

---

## 6. Zeitplan — 2 Tage (Mo 6.7 + Di 7.7 2026)

Hart getaktet. Feature-Freeze **Di früher Nachmittag** — Rest = Präsi (Rubric 10 P + Bonus).

### Tag 1 — Mo 6.7 (bauen)
| Zeit | Wer | Ziel |
|------|-----|------|
| Vormittag | Lead | **M0 Setup:** Vite init, `npm run dev` läuft, Git, Datenschema in `data.js` final, Rollen fix |
| Vormittag | Content | 3–4 Beispiel-Themen DE eintragen (damit Devs echte Daten haben) |
| Vormittag | Design | `tokens.css` (Farben/Spacing/Dark-Light), `index.html` semantisch |
| Nachmittag | Dev A | Cards + Search + Filter mit echten Daten |
| Nachmittag | Dev B | Topic-Detail + Bookmarks |
| Nachmittag | Content | Sicherheitsnetz-8 DE fertig (KI-generiert + geprüft), Tags + Related; weitere Themen wenn Zeit |
| **Ende Tag 1** | alle | **Alle 5 Pflicht-Features laufen mit ≥8 Themen (DE). i18n-Keys stehen.** |

### Tag 2 — Di 7.7 (fertig + Präsi)
| Zeit | Wer | Ziel |
|------|-----|------|
| Früh-Vormittag | Content | restliche Kern-Themen (bis 16) + EN-Übersetzungen (KI), `de.js`==`en.js` sync geprüft |
| Vormittag | Dev B | **Config-Copy-Tweak** (nginx/fail2ban/ufw-Schnipsel + Copy-Button) |
| Vormittag | Design | a11y-Pass (ARIA/Fokus/Tab), Mobile 320–768, Dark/Light, SVG-Diagramme |
| Vormittag | Dev A | Extras aktivieren wenn Zeit (XP/Mission/Classroom/Reading) |
| **~13:00** | alle | **FEATURE-FREEZE.** Nur noch Bugfix. |
| Nachmittag | alle | Präsi bauen, Probe, **jeder lernt seinen Teil erklären** (Rubric-Gesprächsfragen!) |

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

| Risiko | Gegenmaßnahme |
|--------|---------------|
| Scope-Creep → echter Server bauen | Strikt: nur Content. Kein Backend. |
| Schwache Bilder (Security = wenig Fotos) | Eigene SVG-Diagramme/Icons statt Stock → gibt Design+Innovation zurück |
| i18n-Keys driften | Content-Lead prüft `de.js`==`en.js` Keys bei jedem M |
| KI generiert BEM-Verstöße | Architekt reviewt, Prompt-Templates aus `teacher/prompt-templates/` nutzen |
| Niemand kann Code erklären (Rubric!) | Jeder dokumentiert seine Modul-Entscheidung, Präsi-Probe in M5 |
