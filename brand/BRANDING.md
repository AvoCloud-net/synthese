# avocloud · Brand Guide

**v1.0.0 — 2026-05-29**
System: **mono-first + coral accent (LOUD)**

This is the single source of truth for how avocloud looks, reads, and feels across
every service. Machine tokens live in [`tokens/`](./tokens/). Edit
[`tokens/tokens.json`](./tokens/tokens.json) first, then mirror into the CSS / Python.

---

## 1. Brand essence

avocloud is a **small open-source crew** (since 2024) building **Discord bots,
Minecraft plugins & web tools**. GitHub-native, honest, no corporate gloss.

**Personality:** trustworthy & clean **×** bold & modern. Calm monochrome base,
one loud coral spark. Reads like a good terminal: precise, fast, a little playful.

**Primary audience:** the Minecraft / gaming community (CraftAttack, servers,
Discord) and people using the internal tools (Baxi, pwgen, qrgate, mail, …).

**One-liner voice sample:** _"Tools that just **run**."_

---

## 2. Logo — **LOCKED** (mark 4c-h)

The mark is **code brackets `[ ]` + a terminal chevron `›` + a coral caret cursor** —
it reads as a command prompt: open-source, dev, terminal. The "cloud" of the name is
carried by the wordmark. Minimal, two-color, legible to 16px. Full kit + rules in
[`logo/README.md`](./logo/README.md).

![lockup](./logo/avocloud-lockup-dark.png)

**Files:** [`logo/`](./logo/) — mark (light/dark/adaptive/mono), app icons, lockups,
`favicon.ico`, PNG exports. Source SVG is canonical; regenerate rasters with cairosvg.

**Retire:** the old glassy "FI" cloud (`logo.png` at website root). Legacy.

**Wordmark:** `AVOCLOUD.NET` in Syne 800, `-0.5` tracking. `AVOCLOUD` ink, `.NET`
muted (`--avo-text-muted`). Coral stays on the mark's cursor — keep the wordmark mono.

**Usage rules:**

- Clearspace = one bracket-width on all sides.
- Min size: 16px (proven legible — coral cursor anchors it).
- Variants: ink on light, cream on dark; cursor coral-700 on light / coral-500 on dark.
- **Don't:** recolor brackets/chevron to coral, add shadows/gradients, stretch, rotate,
  put a filled block touching the chevron (revives the play-button read), or place
  busy imagery behind the mark.

---

## 3. Color

Mono carries ~90% of every surface. Coral is the spark — CTAs, links, key
highlight words, ASCII glow, tags. Never wallpaper coral.

### Neutrals (the spine)

| Role       | Light           | Dark            |
| ---------- | --------------- | --------------- |
| bg         | `#F2EFE6` cream | `#0B0B0B` black |
| surface    | `#E9E5D8` sand  | `#131313` coal  |
| border     | `#DCD8CB`       | `#1E1E1E`       |
| text       | `#141414` ink   | `#EDEDED` snow  |
| text-muted | `#6B6B63`       | `#8A8A8A`       |

### Coral ramp

`50 #FFEEEA` · `100 #FFD8CF` · `200 #FFB6A4` · `300 #FF9379` · `400 #FF7A5C` ·
**`500 #FF6B4A`** · `600 #ED5333` · **`700 #C73D20`** · `800 #9C2E16` · `900 #5F1C0D`

- **Dark mode primary = `500 #FF6B4A`** (glows on black).
- **Light mode primary = `700 #C73D20`** (passes contrast on cream).
- Hover: shift one step (`500→600`, `700→ED5333`).

### Semantic (utility, used small)

`success #46A758` · `warning #E0A33A` · `error #DC3838` · `info #3B82C4`

> Error red is kept distinct from coral on purpose — coral is _brand_, red is _danger_.

### Accessibility

- Body text always ink/snow on bg — never coral on cream for paragraphs.
- Coral text only at large/bold sizes; for small coral text on light use `700`.
- Coral buttons use white text (`primary-on`); on dark, coral-on-black for inverted chips.

### Discord (Baxi)

See [`tokens/baxi.py`](./tokens/baxi.py). Brand embed color = coral-500 (renders on
Discord's dark UI). Semantic colors map 1:1 to the web.

---

## 4. Typography

| Role               | Font                 | Weight    | Use                                           |
| ------------------ | -------------------- | --------- | --------------------------------------------- |
| Display / Headings | **Syne**             | 700 / 800 | h1–h4, wordmark, hero                         |
| Body / UI          | **Quicksand**        | 300–700   | paragraphs, buttons, labels                   |
| Mono               | `ui-monospace` stack | —         | code, ASCII motif, **kickers/eyebrows**, tags |

Import: `Syne:400,700,800` + `Quicksand:300..700` (Google Fonts).

**Scale** (modular ≈1.25): display 3.5rem · h1 2.5 · h2 1.75 · h3 1.25 ·
body-lg 1.125 · body 1 · small 0.875 · kicker 0.7 (uppercase, `0.18em` tracking).

---

## 5. Visual motif — the signature

The **ASCII / hex layer** is avocloud's signature. Keep it everywhere.

- **Chars:** `0123456789abcdef#@+.-=*:%`
- **Where:** hero canvas blob, card noise, scramble-in text, section dividers.
- **Color:** glow tint = coral (`--avo-ascii-glow`: `#FF6B4A` dark / `#C73D20` light),
  dimmer rows use `text-muted`. **Replace the old purple/pink/gold tints.**
- Cell/font ≈ 13px monospace.

**Coral highlight (LOUD):** wrap the key phrase in a headline in coral.
`Tools that <span class="avo-hl">just run</span>.` Use once per headline, max.

**Mono kicker:** small eyebrow prefixed `// `, e.g. `// open-source · since 2024`.

**Shape language:** rounded radii (cards 12–18px, buttons 11px), 1px borders,
dashed dividers. Friendly, not sharp.

---

## 6. Voice & tone

Terse, honest, open-source. Confident, never hypey. A bit terminal/playful.
Bilingual: **English + German** (site ships both — keep parity).

**Do:** short declaratives. Verbs. "Open-source · since 2024." "Tools that just run."
**Don't:** "revolutionary", "synergy", "best-in-class", emoji soup, exclamation spam.

| Instead of                                  | Write                                       |
| ------------------------------------------- | ------------------------------------------- |
| "The ultimate all-in-one Discord solution!" | "A Discord bot that does the boring parts." |
| "Leverage our powerful cloud platform"      | "Small tools. They just run."               |

---

## 7. Components

All defined in [`tokens/avocloud.css`](./tokens/avocloud.css):

- **`.avo-btn`** — primary, coral-500 bg, white text, radius-md.
- **`.avo-btn-ghost`** — transparent, ink border, inverts on hover.
- **`.avo-tag`** — mono coral pill badge.
- **`.avo-link`** — coral, underlined, 3px offset.
- **`.avo-card`** — surface + 1px border + radius-lg.
- **`.avo-kicker`** — mono uppercase eyebrow.
- **`.avo-hl`** — coral highlight span for headline keywords.
- **`.avo-divider`** — dashed border-top.
- **`.avo-topbar`** — the 4px animated bar, recolored mono→coral.

---

## 8. Using the tokens

| File                  | For                    | How                                                                                                       |
| --------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------- |
| `tokens/tokens.json`  | source of truth        | edit first                                                                                                |
| `tokens/avocloud.css` | website + any web tool | `@import` or paste; uses `:root` + `html.dark`. Back-compat aliases `--card` / `--border` already mapped. |
| `tokens/baxi.py`      | Baxi Discord bot       | replace `config.Discord` color lines                                                                      |

---

## 9. Rollout plan (per service)

Order: lock logo → website → Baxi → the rest. Each step = swap tokens, replace the
purple/pink/gold, verify light+dark.

### Website (`avocloud.net-website`)

1. Drop `avocloud.css` in `assets/css/` (or merge into `main.css`).
2. Replace hardcoded `#9333ea / #ec4899 / #eab308` → `var(--avo-primary)` etc.
3. `main.js` ASCII: swap the `['#9333ea','#ec4899','#eab308']` array →
   read `--avo-ascii-glow` / coral ramp.
4. Recolor `#gradientbar` → `.avo-topbar` gradient.
5. Apply `.avo-hl` to hero headline keyword. Update favicon/og once logo is final.

### Baxi (`BaxiBot/Baxi`)

1. Replace `config.py` lines 7–11 with block from `tokens/baxi.py`.
2. Re-host any colored icons at `avocloud.net/img/icons/` in new palette if tinted.
3. Check embed legibility on Discord dark.

### Then: pwgen · qrgate · mail · discord · edugrade · craftattack · link

Each: pull in `avocloud.css`, replace legacy colors, add kicker + ASCII motif where
it fits. Keep components consistent.

---

## 10. Do / Don't (cheat sheet)

✅ mono base, coral spark · ✅ one coral highlight per headline · ✅ ASCII motif tinted coral
· ✅ Syne headings + Quicksand body + mono kickers · ✅ light **and** dark, always

❌ purple/pink/gold (retired) · ❌ coral as a background wash · ❌ coral body text on cream
· ❌ gradients/shadows on the logo · ❌ hype copy · ❌ shipping only one theme
