/**
 * SYNTHESE — Kategorie: FARBE & TYPOGRAFIE
 * Owner: Content-Lead. Neues Thema = Objekt anhängen. Schema: DATA-SCHEMA.md §1.
 */

export default [
  {
    id: 'farbmodelle',
    category: 'farbe-typo',
    difficulty: 'easy',
    image: '',
    icon: 'ph-palette',
    tags: ['rgb', 'cmyk', 'farbmodell', 'farbe', 'druck'],
    related: ['farbharmonie', 'bild-dateiformate', 'accessibility'],
    de: {
      title: 'RGB vs. CMYK — Farbmodelle',
      summary:
        'Warum Bildschirmfarben leuchten und Druckfarben nicht — additiv gegen subtraktiv erklärt.',
      content: `
        <h3>Was ist ein Farbmodell?</h3>
        <p>Ein Farbmodell ist ein System, um Farben in Zahlen zu beschreiben, damit Geräte sie eindeutig darstellen können. Die zwei wichtigsten funktionieren gegensätzlich: das eine mischt <em>Licht</em>, das andere mischt <em>Farbstoff</em>. Wer das verwechselt, wundert sich, warum der Druck nie so leuchtet wie der Bildschirm.</p>
        <h3>Additiv: RGB</h3>
        <p><strong>RGB</strong> mischt farbiges Licht aus den Grundfarben Rot, Grün und Blau. Alle drei voll = Weiß, alles aus = Schwarz — man <em>addiert</em> Licht. Jeder Kanal hat meist 8 Bit, also 256 Stufen (0–255); das ergibt 256³ ≈ <strong>16,7 Mio. Farben</strong>. Im Web schreibt man Farben oft als HEX (<code>#ff5a3c</code>), was nichts anderes als RGB in Hexadezimal ist. RGB gilt für alles, was selbst leuchtet: Bildschirme, Kameras, Beamer.</p>
        <h3>Subtraktiv: CMYK</h3>
        <p><strong>CMYK</strong> mischt Druckfarbe auf Papier: Cyan, Magenta, Yellow und Key (Schwarz). Jede Farbschicht <em>schluckt</em> einen Teil des Lichts — je mehr Farbe, desto dunkler. Theoretisch ergäben C+M+Y Schwarz, praktisch aber ein schmutziges Braun; deshalb gibt es die separate Schwarzplatte K für satte Tiefen und scharfen Text.</p>
        <h3>Gamut &amp; der Praxis-Fallstrick</h3>
        <p>Der darstellbare Farbraum (Gamut) von RGB ist größer als der von CMYK. Ein leuchtendes RGB-Grün oder knalliges Orange lässt sich im Druck oft <strong>nicht exakt</strong> erzeugen und wirkt stumpfer. Regel: fürs Web in RGB/HEX arbeiten, für den Druck rechtzeitig in CMYK umwandeln und ein Farbprofil (ICC) beachten — sonst gibt es böse Überraschungen an der Druckmaschine.</p>
      `,
      didYouKnow:
        'Das „K" in CMYK steht für „Key" (die Schwarzplatte), nicht für „black" — so gibt es keine Verwechslung mit dem B von Blau.',
    },
    en: {
      title: 'RGB vs. CMYK — Color Models',
      summary: 'Why screen colors glow and print colors do not — additive versus subtractive.',
      content: `
        <h3>What is a color model?</h3>
        <p>A color model is a system for describing colors as numbers so devices can reproduce them unambiguously. The two most important ones work in opposite ways: one mixes <em>light</em>, the other mixes <em>pigment</em>. Confuse them and you'll wonder why print never glows like the screen.</p>
        <h3>Additive: RGB</h3>
        <p><strong>RGB</strong> mixes colored light from red, green and blue. All three full = white, all off = black — you <em>add</em> light. Each channel is usually 8 bit, i.e. 256 steps (0–255), giving 256³ ≈ <strong>16.7 million colors</strong>. On the web colors are often written as HEX (<code>#ff5a3c</code>), which is simply RGB in hexadecimal. RGB applies to anything that emits light: screens, cameras, projectors.</p>
        <h3>Subtractive: CMYK</h3>
        <p><strong>CMYK</strong> mixes ink on paper: cyan, magenta, yellow and key (black). Each ink layer <em>absorbs</em> part of the light — the more ink, the darker. In theory C+M+Y would make black, but in practice a muddy brown; hence the separate black plate K for deep shadows and crisp text.</p>
        <h3>Gamut &amp; the practical trap</h3>
        <p>The reproducible color space (gamut) of RGB is larger than CMYK's. A glowing RGB green or vivid orange often <strong>cannot</strong> be reproduced exactly in print and looks duller. Rule: work in RGB/HEX for web, convert to CMYK in good time for print, and mind a color profile (ICC) — otherwise the press will surprise you.</p>
      `,
      didYouKnow:
        'The "K" in CMYK stands for "key" (the black plate), not "black" — avoiding confusion with the B in blue.',
    },
    configs: [
      {
        labelDe: 'HEX-Farbe als CSS-Variable',
        labelEn: 'HEX color as CSS variable',
        lang: 'css',
        code: `:root {
  --brand: #ff5a3c; /* RGB 255, 90, 60 */
}
.button { background: var(--brand); }`,
      },
    ],
    example: [
      {
        caption: 'Additiv (RGB): Licht mischen — je mehr, desto heller, Mitte = Weiß.',
        html: `
          <div style="background:#000;padding:20px;border-radius:8px;display:flex;justify-content:center">
            <div style="position:relative;width:180px;height:150px">
              <div style="position:absolute;width:100px;height:100px;border-radius:50%;background:#ff0000;top:0;left:40px;mix-blend-mode:screen"></div>
              <div style="position:absolute;width:100px;height:100px;border-radius:50%;background:#00ff00;top:50px;left:0;mix-blend-mode:screen"></div>
              <div style="position:absolute;width:100px;height:100px;border-radius:50%;background:#0000ff;top:50px;left:80px;mix-blend-mode:screen"></div>
            </div>
          </div>`,
      },
      {
        caption: 'Subtraktiv (CMY): Farbe auf Papier — je mehr, desto dunkler, Mitte ≈ Schwarz.',
        html: `
          <div style="background:#fff;padding:20px;border-radius:8px;display:flex;justify-content:center">
            <div style="position:relative;width:180px;height:150px">
              <div style="position:absolute;width:100px;height:100px;border-radius:50%;background:#00ffff;top:0;left:40px;mix-blend-mode:multiply"></div>
              <div style="position:absolute;width:100px;height:100px;border-radius:50%;background:#ff00ff;top:50px;left:0;mix-blend-mode:multiply"></div>
              <div style="position:absolute;width:100px;height:100px;border-radius:50%;background:#ffff00;top:50px;left:80px;mix-blend-mode:multiply"></div>
            </div>
          </div>`,
      },
    ],
    // Interaktiv: mit HSL/RGB spielen und die Wirkung sofort sehen.
    sandbox: {
      html: `<div class="swatch a">HSL 210 · 80% · 55%</div>
<div class="swatch b">RGB 255 · 90 · 60</div>`,
      css: `.swatch {
  padding: 28px;
  border-radius: 14px;
  margin-bottom: 12px;
  font-family: sans-serif;
  font-weight: 700;
  color: #fff;
  text-align: center;
}
/* Zahlen ändern und zusehen! */
.a { background: hsl(210, 80%, 55%); }
.b { background: rgb(255, 90, 60); }`,
      js: ``,
    },
  },
  {
    id: 'farbharmonie',
    category: 'farbe-typo',
    difficulty: 'medium',
    image: '',
    icon: 'ph-swatches',
    tags: ['farbe', 'harmonie', 'kontrast', 'farbkreis', 'palette'],
    related: ['farbmodelle', 'accessibility', 'gestaltgesetze'],
    de: {
      title: 'Farbharmonie & Kontraste',
      summary:
        'Welche Farben passen zusammen? Der Farbkreis liefert Rezepte für stimmige Paletten.',
      content: `
        <h3>Der Farbkreis</h3>
        <p>Im Farbkreis sind die Farbtöne (Hue) kreisförmig angeordnet — von Rot über Gelb, Grün, Blau zurück zu Rot. Die <strong>Position zweier Farben zueinander</strong> entscheidet, wie ihre Kombination wirkt: nah = ruhig, gegenüber = spannungsreich. Harmonie-Schemata sind nichts anderes als geometrische Muster auf diesem Kreis.</p>
        <h3>Die wichtigsten Harmonie-Schemata</h3>
        <ul>
          <li><strong>Komplementär:</strong> zwei gegenüberliegende Farben (z. B. Blau/Orange) — maximaler Kontrast, sehr auffällig. Sparsam einsetzen, sonst „flimmert" es.</li>
          <li><strong>Analog:</strong> zwei bis drei benachbarte Farben — ruhig, natürlich, stimmig. Ideal für Hintergründe und Flächen.</li>
          <li><strong>Triadisch:</strong> drei gleichmäßig (120°) verteilte Farben — lebendig und ausgewogen zugleich.</li>
          <li><strong>Split-Komplementär:</strong> eine Farbe plus die zwei Nachbarn ihrer Komplementärfarbe — kontrastreich, aber weicher als reines Komplementär.</li>
        </ul>
        <h3>Die 60-30-10-Regel</h3>
        <p>Eine bewährte Aufteilung für stimmige Paletten: <strong>60 %</strong> dominante Grund-/Hintergrundfarbe, <strong>30 %</strong> Sekundärfarbe, <strong>10 %</strong> kräftige Akzentfarbe für Buttons und Hinweise. So bleibt das Bild ruhig, hat aber klare Blickfänge.</p>
        <h3>Kontrast lenkt den Blick</h3>
        <p>Nicht nur der Farbton zählt, sondern auch <strong>Helligkeit</strong> und <strong>Sättigung</strong>. Ein kräftiger, dunkler Akzent auf ruhigem hellen Grund zieht den Blick sofort an — perfekt für Call-to-Action-Buttons. Reiner Farbkontrast ohne Helligkeitsunterschied dagegen ist für viele Menschen schwer erkennbar.</p>
      `,
      didYouKnow:
        'Komplementärfarben verstärken sich gegenseitig: Orange wirkt neben Blau kräftiger als allein.',
    },
    en: {
      title: 'Color Harmony & Contrast',
      summary: 'Which colors go together? The color wheel offers recipes for coherent palettes.',
      content: `
        <h3>The color wheel</h3>
        <p>On the color wheel the hues are arranged in a circle — from red through yellow, green, blue and back to red. The <strong>position of two colors relative to each other</strong> decides how their combination feels: close = calm, opposite = full of tension. Harmony schemes are simply geometric patterns on this wheel.</p>
        <h3>The key harmony schemes</h3>
        <ul>
          <li><strong>Complementary:</strong> two opposite colors (e.g. blue/orange) — maximum contrast, very eye-catching. Use sparingly or it "vibrates".</li>
          <li><strong>Analogous:</strong> two or three neighboring colors — calm, natural, coherent. Great for backgrounds and areas.</li>
          <li><strong>Triadic:</strong> three evenly spaced (120°) colors — vivid and balanced at once.</li>
          <li><strong>Split-complementary:</strong> one color plus the two neighbors of its complement — high contrast but softer than pure complementary.</li>
        </ul>
        <h3>The 60-30-10 rule</h3>
        <p>A proven split for coherent palettes: <strong>60%</strong> dominant base/background color, <strong>30%</strong> secondary color, <strong>10%</strong> strong accent for buttons and highlights. The image stays calm yet has clear focal points.</p>
        <h3>Contrast guides the eye</h3>
        <p>It's not only hue that matters but also <strong>brightness</strong> and <strong>saturation</strong>. A strong, dark accent on a calm light background instantly draws the eye — perfect for call-to-action buttons. Pure hue contrast without a brightness difference, by contrast, is hard for many people to see.</p>
      `,
      didYouKnow:
        'Complementary colors intensify each other: orange looks stronger next to blue than on its own.',
    },
    configs: [],
    example: [
      {
        caption: 'Farbkreis als Donut: die Hue-Töne rundherum angeordnet.',
        html: `
          <div style="position:relative;width:150px;height:150px">
            <div style="position:absolute;inset:0;border-radius:50%;background:conic-gradient(#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)"></div>
            <div style="position:absolute;inset:32%;border-radius:50%;background:var(--bg-surface,#fff)"></div>
          </div>`,
      },
      {
        caption: 'Drei Schemata: komplementär, analog, triadisch (oben nach unten).',
        html: `
          <div style="display:grid;gap:10px">
            <div style="display:flex;border-radius:6px;overflow:hidden;width:160px"><span style="flex:1;height:30px;background:#2563eb"></span><span style="flex:1;height:30px;background:#f97316"></span></div>
            <div style="display:flex;border-radius:6px;overflow:hidden;width:160px"><span style="flex:1;height:30px;background:#0ea5e9"></span><span style="flex:1;height:30px;background:#14b8a6"></span><span style="flex:1;height:30px;background:#22c55e"></span></div>
            <div style="display:flex;border-radius:6px;overflow:hidden;width:160px"><span style="flex:1;height:30px;background:#ef4444"></span><span style="flex:1;height:30px;background:#22c55e"></span><span style="flex:1;height:30px;background:#3b82f6"></span></div>
          </div>`,
      },
    ],
    // Interaktiv: Grundton wählen, Harmonie-Paletten live berechnen lassen.
    sandbox: {
      html: `<label>Grundton (Hue):
  <input id="h" type="range" min="0" max="360" value="210">
</label>
<div class="palette"></div>`,
      css: `body { font-family: sans-serif; }
label { display: block; margin-bottom: 14px; font-size: 14px; }
input { width: 100%; }
.palette { display: grid; gap: 10px; }
.row { display: flex; border-radius: 8px; overflow: hidden; }
.row span { flex: 1; height: 46px; }
.row b { flex-basis: 100%; font-size: 12px; opacity: .6; }`,
      js: `const h = document.getElementById('h');
const box = document.querySelector('.palette');
const sw = (deg) => '<span style="background:hsl(' + deg + ' 70% 55%)"></span>';
function render() {
  const b = +h.value;
  box.innerHTML =
    '<div class="row"><b>Komplementär</b></div>' +
    '<div class="row">' + sw(b) + sw((b+180)%360) + '</div>' +
    '<div class="row"><b>Analog</b></div>' +
    '<div class="row">' + sw((b+330)%360) + sw(b) + sw((b+30)%360) + '</div>' +
    '<div class="row"><b>Triadisch</b></div>' +
    '<div class="row">' + sw(b) + sw((b+120)%360) + sw((b+240)%360) + '</div>';
}
h.addEventListener('input', render);
render();`,
    },
  },
  {
    id: 'typografie-grundlagen',
    category: 'farbe-typo',
    difficulty: 'easy',
    image: '',
    icon: 'ph-text-aa',
    tags: ['typografie', 'schrift', 'lesbarkeit', 'hierarchie'],
    related: ['schrift-klassifikation', 'layout-raster', 'accessibility'],
    de: {
      title: 'Typografie-Grundlagen',
      summary:
        'Schriftgröße, Zeilenabstand, Hierarchie — kleine Regeln, große Wirkung auf Lesbarkeit.',
      content: `
        <h3>Hierarchie</h3>
        <p>Typografische Hierarchie ordnet Inhalte mit Größe, Gewicht (Strichstärke), Farbe und Abstand: Überschrift, Zwischenüberschrift, Fließtext, Bildunterschrift. Der Blick erkennt in Sekundenbruchteilen, was wichtig ist und in welcher Reihenfolge er lesen soll — ganz ohne bewusstes Nachdenken. Eine klare Hierarchie ist der Unterschied zwischen „überfliegbar" und „anstrengend".</p>
        <h3>Die wichtigsten Stellschrauben</h3>
        <ul>
          <li><strong>Schriftgröße:</strong> Fließtext im Web meist 16–18&nbsp;px. Zu klein ermüdet, zu groß zerstückelt den Lesefluss.</li>
          <li><strong>Zeilenlänge (Satzbreite):</strong> ca. <strong>45–75 Zeichen</strong> pro Zeile lesen sich am besten. Zu lange Zeilen lassen den Blick beim Zeilensprung „verrutschen".</li>
          <li><strong>Zeilenabstand (line-height):</strong> ohne Einheit ca. <strong>1,4–1,6</strong> für Fließtext. Längere Zeilen brauchen mehr Durchschuss.</li>
          <li><strong>Laufweite (letter-spacing/Tracking):</strong> Großbuchstaben und sehr kleine Texte profitieren von etwas mehr Abstand.</li>
        </ul>
        <h3>Kontrast &amp; Rhythmus</h3>
        <p>Hierarchie lebt von Kontrast: Ein deutlicher Größensprung (z. B. Faktor 1,5–2 zwischen den Ebenen) wirkt klarer als viele ähnliche Größen. Eine <strong>modulare Skala</strong> (feste Verhältnisse wie 1,25 oder 1,333) hält die Sprünge harmonisch.</p>
        <h3>Weniger ist mehr</h3>
        <p>Zwei Schriften reichen fast immer: eine für Überschriften, eine für den Text — oder sogar nur eine Familie mit mehreren Schnitten. Zu viele Schriften und Schnitte wirken unruhig und unprofessionell.</p>
      `,
      didYouKnow:
        'Studien zeigen: eine Zeilenlänge von rund 66 Zeichen gilt als idealer Kompromiss aus Lesefluss und Augenbewegung.',
    },
    en: {
      title: 'Typography Basics',
      summary: 'Size, line spacing, hierarchy — small rules with a big impact on readability.',
      content: `
        <h3>Hierarchy</h3>
        <p>Typographic hierarchy orders content with size, weight, color and spacing: heading, subheading, body, caption. In a fraction of a second the eye sees what matters and in which order to read — without conscious effort. A clear hierarchy is the difference between "skimmable" and "exhausting".</p>
        <h3>The key levers</h3>
        <ul>
          <li><strong>Font size:</strong> body text on the web is usually 16–18px. Too small tires the eye, too big breaks the flow.</li>
          <li><strong>Line length (measure):</strong> about <strong>45–75 characters</strong> per line reads best. Overly long lines make the eye "lose its place" on the line break.</li>
          <li><strong>Line height:</strong> unitless around <strong>1.4–1.6</strong> for body text. Longer lines need more leading.</li>
          <li><strong>Letter-spacing (tracking):</strong> uppercase and very small text benefit from a little extra spacing.</li>
        </ul>
        <h3>Contrast &amp; rhythm</h3>
        <p>Hierarchy thrives on contrast: a clear size jump (e.g. a factor of 1.5–2 between levels) reads more clearly than many similar sizes. A <strong>modular scale</strong> (fixed ratios like 1.25 or 1.333) keeps the jumps harmonious.</p>
        <h3>Less is more</h3>
        <p>Two typefaces almost always suffice: one for headings, one for body — or even a single family with several weights. Too many fonts and styles feel restless and unprofessional.</p>
      `,
      didYouKnow:
        'Studies suggest a line length of around 66 characters is the ideal balance of reading flow and eye movement.',
    },
    configs: [
      {
        labelDe: 'Lesbarer Fließtext (CSS)',
        labelEn: 'Readable body text (CSS)',
        lang: 'css',
        code: `.prose {
  max-width: 66ch;
  line-height: 1.5;
  font-size: 1.125rem;
}`,
      },
    ],
    example: {
      caption: 'Hierarchie: Größe + Gewicht trennen die Ebenen (Größe px / Gewicht).',
      html: `
        <div style="display:grid;gap:8px;text-align:left;font-family:var(--font-sans,sans-serif)">
          <div style="display:flex;align-items:baseline;gap:12px"><span style="font-size:2.2rem;font-weight:800;line-height:1">Aa</span><span style="opacity:.6;font-size:.8rem">32&nbsp;/&nbsp;800</span></div>
          <div style="display:flex;align-items:baseline;gap:12px"><span style="font-size:1.4rem;font-weight:600;line-height:1">Aa</span><span style="opacity:.6;font-size:.8rem">22&nbsp;/&nbsp;600</span></div>
          <div style="display:flex;align-items:baseline;gap:12px"><span style="font-size:1rem;font-weight:400;line-height:1">Aa</span><span style="opacity:.6;font-size:.8rem">16&nbsp;/&nbsp;400</span></div>
        </div>`,
    },
    // Interaktiv: an Schriftgröße, Zeilenhöhe und Satzbreite drehen.
    sandbox: {
      html: `<p class="prose">Typografie ist die Kunst, Sprache sichtbar zu machen. Gute Lesbarkeit entsteht aus dem Zusammenspiel von Schriftgröße, Zeilenhöhe und Satzbreite. Ändere die Werte im CSS und beobachte, wie sich der Lesefluss verändert.</p>`,
      css: `.prose {
  /* An diesen drei Werten drehen! */
  font-size: 18px;
  line-height: 1.6;
  max-width: 60ch;

  font-family: Georgia, serif;
  margin: 0 auto;
}`,
      js: ``,
    },
  },
  {
    id: 'schrift-klassifikation',
    category: 'farbe-typo',
    difficulty: 'medium',
    image: '',
    icon: 'ph-text-t',
    tags: ['schrift', 'serif', 'sans-serif', 'klassifikation', 'font'],
    related: ['typografie-grundlagen', 'farbharmonie'],
    de: {
      title: 'Schriftklassifikation',
      summary: 'Serif, Sans, Slab, Script — Schriftfamilien erkennen und passend einsetzen.',
      content: `
        <h3>Warum klassifizieren?</h3>
        <p>Tausende Schriften lassen sich in wenige Familien einordnen. Wer die Gruppen kennt, findet schneller passende Schriften, kombiniert sie sicherer und versteht, welche Stimmung eine Schrift transportiert — noch bevor das erste Wort gelesen ist.</p>
        <h3>Die großen Gruppen</h3>
        <ul>
          <li><strong>Serif (Antiqua):</strong> mit „Füßchen" an den Buchstabenenden — klassisch, seriös, sehr gut für lange gedruckte Texte (z. B. Times, Garamond). Die Serifen führen das Auge entlang der Zeile.</li>
          <li><strong>Sans-Serif (Grotesk):</strong> ohne Serifen — sachlich, modern, klar am Bildschirm (z. B. Helvetica, Arial). Standard für UI und Web.</li>
          <li><strong>Slab-Serif (Egyptienne):</strong> kräftige, rechteckige Serifen — plakativ, robust, gut für Headlines.</li>
          <li><strong>Script:</strong> handschriftlich oder kalligrafisch — dekorativ und persönlich, aber schlecht lesbar in langen Texten. Sparsam und nur groß einsetzen.</li>
          <li><strong>Display/Dekor:</strong> Effektschriften für Plakate und Logos — Charakter statt Lesbarkeit.</li>
        </ul>
        <h3>Wirkung &amp; Kombination</h3>
        <p>Serifen wirken traditionell und vertrauenswürdig, serifenlose Schriften neutral und modern. Beim Kombinieren gilt: entweder klar <strong>kontrastieren</strong> (Serif-Headline + Sans-Body) oder innerhalb einer Familie bleiben. Zwei sehr ähnliche Schriften nebeneinander wirken dagegen wie ein Fehler.</p>
      `,
      didYouKnow:
        'Am Bildschirm wurden lange serifenlose Schriften bevorzugt, weil niedrige Auflösungen feine Serifen unsauber darstellten.',
    },
    en: {
      title: 'Type Classification',
      summary: 'Serif, sans, slab, script — recognize type families and use them well.',
      content: `
        <h3>Why classify?</h3>
        <p>Thousands of typefaces fall into a few families. Knowing the groups helps you find suitable fonts faster, combine them more confidently and understand the mood a typeface conveys — before the first word is read.</p>
        <h3>The main groups</h3>
        <ul>
          <li><strong>Serif:</strong> with "feet" at the letter ends — classic, serious, excellent for long printed text (e.g. Times, Garamond). The serifs lead the eye along the line.</li>
          <li><strong>Sans-serif (grotesque):</strong> without serifs — neutral, modern, clean on screen (e.g. Helvetica, Arial). The standard for UI and web.</li>
          <li><strong>Slab serif:</strong> bold, rectangular serifs — poster-like, sturdy, great for headlines.</li>
          <li><strong>Script:</strong> handwritten or calligraphic — decorative and personal, but poor for long text. Use sparingly and large.</li>
          <li><strong>Display/decorative:</strong> effect fonts for posters and logos — character over legibility.</li>
        </ul>
        <h3>Mood &amp; combination</h3>
        <p>Serifs feel traditional and trustworthy, sans-serifs neutral and modern. When combining: either clearly <strong>contrast</strong> (serif headline + sans body) or stay within one family. Two very similar fonts side by side, however, look like a mistake.</p>
      `,
      didYouKnow:
        'Sans-serif fonts were long preferred on screen because low resolutions rendered fine serifs poorly.',
    },
    configs: [],
    example: {
      caption: 'Dasselbe „Ag" in vier Schriftgruppen — achte auf die Enden der Buchstaben.',
      html: `
        <div style="display:flex;gap:28px;justify-content:center;flex-wrap:wrap">
          <div style="text-align:center"><div style="font-family:Georgia,'Times New Roman',serif;font-size:3.4rem;line-height:1">Ag</div><div style="opacity:.6;font-size:.8rem;margin-top:6px">Serif</div></div>
          <div style="text-align:center"><div style="font-family:Helvetica,Arial,sans-serif;font-size:3.4rem;line-height:1">Ag</div><div style="opacity:.6;font-size:.8rem;margin-top:6px">Sans</div></div>
          <div style="text-align:center"><div style="font-family:'Rockwell','Courier New',monospace;font-weight:700;font-size:3.4rem;line-height:1">Ag</div><div style="opacity:.6;font-size:.8rem;margin-top:6px">Slab</div></div>
          <div style="text-align:center"><div style="font-family:'Segoe Script','Brush Script MT',cursive;font-size:3.4rem;line-height:1">Ag</div><div style="opacity:.6;font-size:.8rem;margin-top:6px">Script</div></div>
        </div>`,
    },
  },
  {
    id: 'farbpsychologie',
    category: 'farbe-typo',
    difficulty: 'easy',
    image: '',
    icon: 'ph-lightbulb',
    tags: ['farbe', 'psychologie', 'wirkung', 'emotion'],
    related: ['farbharmonie', 'farbmodelle'],
    de: {
      title: 'Farbpsychologie',
      summary: 'Farben lösen Gefühle aus — und beeinflussen, wie wir Inhalte wahrnehmen.',
      content: `
      <h3>Emotionen durch Farbe</h3>
      <p>Farben wirken nicht nur optisch, sondern lösen unbewusst Gefühle und Assoziationen aus. Sie können beruhigen, aktivieren, Appetit machen oder Vertrauen schaffen. Marken nutzen das gezielt: Blau bei Banken (Seriosität), Rot bei Sale-Aktionen (Dringlichkeit), Grün bei Bio-Produkten (Natur). Wichtig: Wirkung entsteht immer im <strong>Zusammenhang</strong> — dieselbe Farbe kann je nach Umgebung ganz anders wirken.</p>
      <h3>Typische Wirkungen (westlicher Kontext)</h3>
      <ul>
        <li><strong>Blau:</strong> ruhig, seriös, vertrauensvoll, kühl — Technik, Finanzen.</li>
        <li><strong>Rot:</strong> energisch, aufmerksamkeitsstark, warnend, appetitanregend — Sale, Essen, Warnungen.</li>
        <li><strong>Grün:</strong> natürlich, ausgewogen, „richtig/erfolgreich" — Umwelt, Bestätigung.</li>
        <li><strong>Gelb:</strong> freundlich, optimistisch, aufmerksamkeitsstark — Hinweise, Sonne.</li>
        <li><strong>Schwarz:</strong> elegant, luxuriös, aber auch schwer — Premium-Marken.</li>
        <li><strong>Violett:</strong> kreativ, edel, geheimnisvoll.</li>
      </ul>
      <h3>Sättigung &amp; Helligkeit</h3>
      <p>Nicht nur der Farbton zählt: Ein kräftiges, gesättigtes Rot schreit, ein entsättigtes Altrosa flüstert. Helle Töne wirken leicht und freundlich, dunkle schwer und ernst. Damit lässt sich Stimmung fein justieren, ohne den Farbton zu wechseln.</p>
      <h3>Kulturelle Unterschiede</h3>
      <p>Farbbedeutungen sind kulturell geprägt: Weiß steht im Westen für Reinheit und Hochzeit, in Teilen Asiens für Trauer. Rot bedeutet in China Glück, anderswo Gefahr. Für internationale Produkte lohnt sich deshalb immer ein Blick auf Zielgruppe und Kontext.</p>
    `,
      didYouKnow:
        'Rot steigert nachweislich die Herzfrequenz — deshalb wird es oft für Warnsignale genutzt.',
    },
    en: {
      title: 'Color Psychology',
      summary: 'Colors trigger emotions — shaping how we perceive content.',
      content: `
      <h3>Emotions through color</h3>
      <p>Colors don't just look a certain way — they subconsciously trigger feelings and associations. They can calm, energize, whet the appetite or build trust. Brands use this deliberately: blue for banks (seriousness), red for sales (urgency), green for organic products (nature). Crucially, the effect always arises in <strong>context</strong> — the same color can feel very different depending on its surroundings.</p>
      <h3>Typical effects (Western context)</h3>
      <ul>
        <li><strong>Blue:</strong> calm, serious, trustworthy, cool — tech, finance.</li>
        <li><strong>Red:</strong> energetic, attention-grabbing, warning, appetizing — sales, food, alerts.</li>
        <li><strong>Green:</strong> natural, balanced, "right/success" — environment, confirmation.</li>
        <li><strong>Yellow:</strong> friendly, optimistic, attention-grabbing — hints, sun.</li>
        <li><strong>Black:</strong> elegant, luxurious, but also heavy — premium brands.</li>
        <li><strong>Purple:</strong> creative, noble, mysterious.</li>
      </ul>
      <h3>Saturation &amp; brightness</h3>
      <p>Hue isn't everything: a strong, saturated red shouts, a desaturated dusty rose whispers. Light tones feel airy and friendly, dark ones heavy and serious. This lets you fine-tune mood without changing the hue.</p>
      <h3>Cultural differences</h3>
      <p>Color meanings are culturally shaped: white means purity and weddings in the West, mourning in parts of Asia. Red means luck in China, danger elsewhere. For international products, always consider your audience and context.</p>
    `,
      didYouKnow:
        'Red has been shown to increase heart rate — which is why it’s used for warnings.',
    },
    configs: [],
    example: [
      {
        caption: 'Grundtöne: Blau (Vertrauen), Rot (Energie), Grün (Natur), Gelb (Optimismus).',
        html: `
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <div style="width:66px;height:66px;border-radius:14px;background:#2563eb"></div>
            <div style="width:66px;height:66px;border-radius:14px;background:#ef4444"></div>
            <div style="width:66px;height:66px;border-radius:14px;background:#22c55e"></div>
            <div style="width:66px;height:66px;border-radius:14px;background:#eab308"></div>
          </div>`,
      },
      {
        caption: 'Gleicher Farbton, fallende Sättigung: von „schreit" (links) zu „flüstert".',
        html: `
          <div style="display:flex;border-radius:12px;overflow:hidden;max-width:280px">
            <span style="flex:1;height:56px;background:hsl(0 85% 55%)"></span>
            <span style="flex:1;height:56px;background:hsl(0 60% 60%)"></span>
            <span style="flex:1;height:56px;background:hsl(0 38% 66%)"></span>
            <span style="flex:1;height:56px;background:hsl(0 20% 72%)"></span>
          </div>`,
      },
    ],
  },
  {
    id: 'barrierefreie-farben',
    category: 'farbe-typo',
    difficulty: 'medium',
    image: '',
    icon: 'ph-eye',
    tags: ['accessibility', 'farbe', 'kontrast', 'wcag'],
    related: ['farbharmonie', 'typografie-grundlagen'],
    de: {
      title: 'Barrierefreie Paletten & Farbfehlsichtigkeit',
      summary: 'Kontraste und Farbkombinationen, die für alle gut wahrnehmbar sind.',
      content: `
      <h3>Kontrast ist entscheidend</h3>
      <p>Für gute Lesbarkeit braucht Text genügend <strong>Hell-Dunkel-Kontrast</strong> zum Hintergrund. Der Kontrast wird als Verhältnis von 1:1 (kein Unterschied) bis 21:1 (Schwarz auf Weiß) angegeben. Die WCAG-Richtlinien fordern:</p>
      <ul>
        <li><strong>4,5:1</strong> für normalen Fließtext (Stufe AA).</li>
        <li><strong>3:1</strong> für große Schrift (ab ~24&nbsp;px bzw. 19&nbsp;px fett) und für UI-Elemente/Icons.</li>
        <li><strong>7:1</strong> für die strengere Stufe AAA.</li>
      </ul>
      <h3>Farbfehlsichtigkeit</h3>
      <p>Rund <strong>8&nbsp;% der Männer</strong> (und ~0,5&nbsp;% der Frauen) haben eine Rot-Grün-Sehschwäche. Für sie sind rote und grüne Signale kaum unterscheidbar. Deshalb gilt: Wichtige Informationen <strong>nie nur über Farbe</strong> vermitteln — ein rotes und ein grünes Feld ohne Beschriftung oder Symbol sind für viele identisch.</p>
      <h3>Praxis-Tipps</h3>
      <ul>
        <li><strong>Farbe + zweites Signal:</strong> immer mit Icon, Text, Muster oder Form kombinieren (z. B. ✓/✗ zusätzlich zu grün/rot).</li>
        <li><strong>Kontrast prüfen:</strong> mit einem Contrast Checker die Ratio messen, nicht schätzen.</li>
        <li><strong>Nicht auf reine Farbunterschiede setzen:</strong> auch Helligkeit variieren.</li>
        <li><strong>Simulieren:</strong> Paletten in Farbfehlsichtigkeits-Simulatoren gegenprüfen.</li>
      </ul>
    `,
      didYouKnow:
        'Rot-Grün-Schwäche ist die häufigste Form der Farbfehlsichtigkeit — besonders relevant für UI-Design.',
    },
    en: {
      title: 'Accessible Palettes & Color Vision Deficiency',
      summary: 'Contrast and color choices that work for everyone.',
      content: `
      <h3>Contrast matters</h3>
      <p>Readable text needs enough <strong>light-dark contrast</strong> against the background. Contrast is expressed as a ratio from 1:1 (no difference) to 21:1 (black on white). The WCAG guidelines require:</p>
      <ul>
        <li><strong>4.5:1</strong> for normal body text (level AA).</li>
        <li><strong>3:1</strong> for large text (from ~24px, or 19px bold) and for UI elements/icons.</li>
        <li><strong>7:1</strong> for the stricter level AAA.</li>
      </ul>
      <h3>Color vision deficiency</h3>
      <p>About <strong>8% of men</strong> (and ~0.5% of women) have a red-green deficiency. For them red and green signals are hard to tell apart. So: never convey important information <strong>through color alone</strong> — a red and a green field without a label or symbol look identical to many people.</p>
      <h3>Practical tips</h3>
      <ul>
        <li><strong>Color + a second cue:</strong> always combine with an icon, text, pattern or shape (e.g. ✓/✗ in addition to green/red).</li>
        <li><strong>Check contrast:</strong> measure the ratio with a contrast checker, don't guess.</li>
        <li><strong>Don't rely on hue alone:</strong> vary brightness too.</li>
        <li><strong>Simulate:</strong> test palettes in color-blindness simulators.</li>
      </ul>
    `,
      didYouKnow:
        'Red-green deficiency is the most common form of color blindness — highly relevant for UI design.',
    },
    configs: [
      {
        labelDe: 'Kontraststarker Button (CSS)',
        labelEn: 'High-contrast button (CSS)',
        lang: 'css',
        code: `.btn {
  background: #000;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
}`,
      },
    ],
    example: {
      caption: 'Hoher Kontrast (21:1) ist gut lesbar, zu niedriger (1,2:1) fällt durch.',
      html: `
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
          <div style="background:#000;color:#fff;padding:18px 22px;border-radius:8px;font-weight:600;text-align:center">Aa<div style="font-size:.75rem;font-weight:400;margin-top:4px">21:1 ✓</div></div>
          <div style="background:#f4d03f;color:#f7e08a;padding:18px 22px;border-radius:8px;font-weight:600;text-align:center">Aa<div style="font-size:.75rem;font-weight:400;margin-top:4px">1.2:1 ✗</div></div>
        </div>`,
    },
    // Interaktiv: Vorder- und Hintergrundfarbe wählen, Kontrast live berechnen.
    sandbox: {
      html: `<label>Text: <input id="fg" type="color" value="#1a1a1a"></label>
<label>Hintergrund: <input id="bg" type="color" value="#f4d03f"></label>
<div id="preview">Beispieltext<span id="ratio"></span></div>`,
      css: `body { font-family: sans-serif; }
label { display: inline-block; margin: 0 12px 12px 0; font-size: 14px; }
#preview {
  margin-top: 8px;
  padding: 28px;
  border-radius: 12px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
}
#ratio { display: block; font-size: 14px; font-weight: 400; margin-top: 8px; }`,
      js: `const fg = document.getElementById('fg');
const bg = document.getElementById('bg');
const box = document.getElementById('preview');
const out = document.getElementById('ratio');
const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.substr(i, 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
function render() {
  box.style.color = fg.value;
  box.style.background = bg.value;
  const l1 = lum(fg.value), l2 = lum(bg.value);
  const r = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const pass = r >= 4.5 ? 'AA bestanden ✓' : (r >= 3 ? 'nur groß ✓' : 'durchgefallen ✗');
  out.textContent = 'Kontrast ' + r.toFixed(2) + ':1 — ' + pass;
}
[fg, bg].forEach((el) => el.addEventListener('input', render));
render();`,
    },
  },
  {
    id: 'variable-fonts',
    category: 'farbe-typo',
    difficulty: 'medium',
    image: '',
    icon: 'ph-text-h',
    tags: ['typografie', 'font', 'variable', 'performance'],
    related: ['typografie-grundlagen', 'schrift-klassifikation'],
    de: {
      title: 'Variable Fonts',
      summary: 'Eine Schriftdatei, viele Stile — flexibel, performant und modern.',
      content: `
      <h3>Was sind Variable Fonts?</h3>
      <p>Klassisch ist jeder Schnitt einer Schrift (Regular, Bold, Light, Italic …) eine eigene Datei. Ein <strong>Variable Font</strong> packt diese Vielfalt in <em>eine</em> Datei und macht sie über <strong>Achsen (Axes)</strong> stufenlos einstellbar. Statt „Bold oder nicht" wählst du z. B. Gewicht 437 — jeden Zwischenwert.</p>
      <h3>Die wichtigsten Achsen</h3>
      <ul>
        <li><strong>Weight (wght):</strong> Strichstärke, meist 100–900.</li>
        <li><strong>Width (wdth):</strong> schmal bis breit laufend.</li>
        <li><strong>Slant/Italic (slnt/ital):</strong> Neigung bzw. kursiv.</li>
        <li><strong>Optical Size (opsz):</strong> optische Anpassung an die Schriftgröße.</li>
      </ul>
      <h3>Vorteile</h3>
      <ul>
        <li><strong>Performance:</strong> eine Datei statt vieler — weniger Ladezeit.</li>
        <li><strong>Flexibilität:</strong> feine Abstufungen und flüssige Animationen (z. B. Gewicht beim Hover).</li>
        <li><strong>Konsistenz:</strong> einheitliche Typografie, exakt passend über alle Breakpoints.</li>
      </ul>
      <h3>Praxis</h3>
      <p>Im CSS steuerst du Achsen mit <code>font-variation-settings</code> (z. B. <code>"wght" 620</code>) oder — für Standardachsen — direkt über <code>font-weight</code> und <code>font-stretch</code>. Alle modernen Browser unterstützen das vollständig; ideal für responsive und animierte Designs.</p>
    `,
      didYouKnow:
        'Variable Fonts wurden 2016 von Google, Microsoft, Apple und Adobe gemeinsam vorgestellt.',
    },
    en: {
      title: 'Variable Fonts',
      summary: 'One font file, many styles — flexible, performant and modern.',
      content: `
      <h3>What are variable fonts?</h3>
      <p>Traditionally each style of a typeface (Regular, Bold, Light, Italic …) is its own file. A <strong>variable font</strong> packs that variety into <em>one</em> file and makes it continuously adjustable via <strong>axes</strong>. Instead of "bold or not" you can pick weight 437 — any value in between.</p>
      <h3>The main axes</h3>
      <ul>
        <li><strong>Weight (wght):</strong> stroke thickness, usually 100–900.</li>
        <li><strong>Width (wdth):</strong> condensed to extended.</li>
        <li><strong>Slant/Italic (slnt/ital):</strong> slant or italics.</li>
        <li><strong>Optical Size (opsz):</strong> optical adjustment to the font size.</li>
      </ul>
      <h3>Benefits</h3>
      <ul>
        <li><strong>Performance:</strong> one file instead of many — less load time.</li>
        <li><strong>Flexibility:</strong> fine steps and smooth animation (e.g. weight on hover).</li>
        <li><strong>Consistency:</strong> unified typography, precisely tuned across breakpoints.</li>
      </ul>
      <h3>In practice</h3>
      <p>In CSS you control axes with <code>font-variation-settings</code> (e.g. <code>"wght" 620</code>) or — for standard axes — directly via <code>font-weight</code> and <code>font-stretch</code>. All modern browsers fully support it; perfect for responsive and animated design.</p>
    `,
      didYouKnow: 'Variable fonts were introduced in 2016 by Google, Microsoft, Apple and Adobe.',
    },
    configs: [
      {
        labelDe: 'Variable Font nutzen (CSS)',
        labelEn: 'Using a variable font (CSS)',
        lang: 'css',
        code: `h1 {
  font-variation-settings: "wght" 700;
}`,
      },
    ],
    example: {
      caption: 'Gewichtsachse (wght): derselbe Buchstabe von dünn (200) bis fett (900).',
      html: `
        <div style="display:flex;gap:16px;align-items:baseline;justify-content:center;flex-wrap:wrap;font-family:var(--font-sans,sans-serif)">
          <span style="font-size:2.8rem;font-weight:200">A</span>
          <span style="font-size:2.8rem;font-weight:400">A</span>
          <span style="font-size:2.8rem;font-weight:600">A</span>
          <span style="font-size:2.8rem;font-weight:800">A</span>
          <span style="font-size:2.8rem;font-weight:900">A</span>
        </div>`,
    },
    // Interaktiv: am Gewicht drehen und den Text live dicker/dünner machen.
    sandbox: {
      html: `<label>Gewicht:
  <input id="w" type="range" min="100" max="900" step="10" value="400">
</label>
<p id="demo">Variable Fonts sind stufenlos.</p>`,
      css: `body { font-family: sans-serif; }
label { display: block; margin-bottom: 12px; font-size: 14px; }
input { width: 100%; }
#demo { font-size: 32px; margin: 0; }`,
      js: `const w = document.getElementById('w');
const demo = document.getElementById('demo');
w.addEventListener('input', () => {
  demo.style.fontWeight = w.value;
});`,
    },
  },
];
