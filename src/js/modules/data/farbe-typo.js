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
        <h3>Additiv: RGB</h3>
        <p><strong>RGB</strong> mischt Licht: Rot, Grün, Blau. Alle drei voll = Weiß, alles aus = Schwarz. Gilt für Bildschirme, Kameras, Web.</p>
        <h3>Subtraktiv: CMYK</h3>
        <p><strong>CMYK</strong> mischt Farbe auf Papier: Cyan, Magenta, Yellow, Key (Schwarz). Farbe schluckt Licht — je mehr, desto dunkler. Gilt für den Druck.</p>
        <h3>Der Praxis-Fallstrick</h3>
        <p>Ein leuchtendes RGB-Grün lässt sich im Druck oft nicht exakt erzeugen. Deshalb: fürs Web in RGB/HEX, für den Druck in CMYK anlegen und vorher umrechnen.</p>
      `,
      didYouKnow:
        'Das „K" in CMYK steht für „Key" (die Schwarzplatte), nicht für „black" — so gibt es keine Verwechslung mit dem B von Blau.',
    },
    en: {
      title: 'RGB vs. CMYK — Color Models',
      summary: 'Why screen colors glow and print colors do not — additive versus subtractive.',
      content: `
        <h3>Additive: RGB</h3>
        <p><strong>RGB</strong> mixes light: red, green, blue. All three full = white, all off = black. Used for screens, cameras, web.</p>
        <h3>Subtractive: CMYK</h3>
        <p><strong>CMYK</strong> mixes ink on paper: cyan, magenta, yellow, key (black). Ink absorbs light — the more, the darker. Used for print.</p>
        <h3>The practical trap</h3>
        <p>A glowing RGB green often cannot be reproduced exactly in print. So: design in RGB/HEX for web, in CMYK for print, and convert beforehand.</p>
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
        <p>Farben ordnen sich im Kreis an. Ihre Position zueinander bestimmt die Wirkung einer Kombination.</p>
        <h3>Harmonie-Schemata</h3>
        <ul>
          <li><strong>Komplementär:</strong> gegenüberliegend — starker Kontrast.</li>
          <li><strong>Analog:</strong> benachbart — ruhig, stimmig.</li>
          <li><strong>Triadisch:</strong> drei gleichmäßig verteilte Farben — lebendig, ausgewogen.</li>
        </ul>
        <h3>Kontrast lenkt</h3>
        <p>Hell-Dunkel- und Farbkontraste steuern, was zuerst gesehen wird — ideal für Call-to-Action-Elemente.</p>
      `,
      didYouKnow:
        'Komplementärfarben verstärken sich gegenseitig: Orange wirkt neben Blau kräftiger als allein.',
    },
    en: {
      title: 'Color Harmony & Contrast',
      summary: 'Which colors go together? The color wheel offers recipes for coherent palettes.',
      content: `
        <h3>The color wheel</h3>
        <p>Colors sit around a wheel. Their position to each other determines how a combination feels.</p>
        <h3>Harmony schemes</h3>
        <ul>
          <li><strong>Complementary:</strong> opposite — strong contrast.</li>
          <li><strong>Analogous:</strong> adjacent — calm, coherent.</li>
          <li><strong>Triadic:</strong> three evenly spaced colors — vivid, balanced.</li>
        </ul>
        <h3>Contrast guides</h3>
        <p>Light-dark and color contrast control what gets seen first — ideal for call-to-action elements.</p>
      `,
      didYouKnow:
        'Complementary colors intensify each other: orange looks stronger next to blue than on its own.',
    },
    configs: [],
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
        <p>Größe, Gewicht und Abstand ordnen Inhalte: Überschrift, Zwischenüberschrift, Fließtext. Der Blick erkennt sofort, was wichtig ist.</p>
        <h3>Lesbarkeit</h3>
        <p><strong>Zeilenlänge</strong> von ca. 45–75 Zeichen liest sich am besten. <strong>Zeilenabstand</strong> (line-height) von 1,4–1,6 gibt dem Text Luft.</p>
        <h3>Weniger ist mehr</h3>
        <p>Zwei Schriften reichen meist: eine für Überschriften, eine für Text. Zu viele Schnitte wirken unruhig.</p>
      `,
      didYouKnow:
        'Studien zeigen: eine Zeilenlänge von rund 66 Zeichen gilt als idealer Kompromiss aus Lesefluss und Augenbewegung.',
    },
    en: {
      title: 'Typography Basics',
      summary: 'Size, line spacing, hierarchy — small rules with a big impact on readability.',
      content: `
        <h3>Hierarchy</h3>
        <p>Size, weight and spacing order content: heading, subheading, body. The eye instantly sees what matters.</p>
        <h3>Readability</h3>
        <p>A <strong>line length</strong> of about 45–75 characters reads best. A <strong>line height</strong> of 1.4–1.6 gives the text room to breathe.</p>
        <h3>Less is more</h3>
        <p>Two typefaces usually suffice: one for headings, one for body. Too many styles feel restless.</p>
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
        <h3>Die großen Gruppen</h3>
        <ul>
          <li><strong>Serif:</strong> mit Füßchen — klassisch, gut für lange Texte (z.B. Times).</li>
          <li><strong>Sans-Serif:</strong> ohne Füßchen — modern, klar am Bildschirm (z.B. Helvetica).</li>
          <li><strong>Slab-Serif:</strong> kräftige, eckige Serifen — plakativ.</li>
          <li><strong>Script:</strong> handschriftlich — dekorativ, sparsam einsetzen.</li>
        </ul>
        <h3>Wirkung wählen</h3>
        <p>Serifen wirken traditionell und seriös, serifenlose Schriften sachlich und modern. Die Wahl transportiert Stimmung, bevor das erste Wort gelesen ist.</p>
      `,
      didYouKnow:
        'Am Bildschirm wurden lange serifenlose Schriften bevorzugt, weil niedrige Auflösungen feine Serifen unsauber darstellten.',
    },
    en: {
      title: 'Type Classification',
      summary: 'Serif, sans, slab, script — recognize type families and use them well.',
      content: `
        <h3>The main groups</h3>
        <ul>
          <li><strong>Serif:</strong> with feet — classic, good for long text (e.g. Times).</li>
          <li><strong>Sans-serif:</strong> without feet — modern, clean on screen (e.g. Helvetica).</li>
          <li><strong>Slab serif:</strong> bold, blocky serifs — bold and poster-like.</li>
          <li><strong>Script:</strong> handwritten — decorative, use sparingly.</li>
        </ul>
        <h3>Choosing a mood</h3>
        <p>Serifs feel traditional and serious, sans-serifs neutral and modern. The choice conveys mood before the first word is read.</p>
      `,
      didYouKnow:
        'Sans-serif fonts were long preferred on screen because low resolutions rendered fine serifs poorly.',
    },
    configs: [],
  },
];
