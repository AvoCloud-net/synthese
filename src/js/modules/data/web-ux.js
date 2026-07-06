/**
 * SYNTHESE — Kategorie: WEB & UX
 * Owner: Content-Lead. Neues Thema = Objekt anhängen. Schema: DATA-SCHEMA.md §1.
 */

export default [
  {
    id: 'responsive-design',
    category: 'web-ux',
    difficulty: 'easy',
    image: '',
    icon: 'ph-device-mobile',
    tags: ['responsive', 'mobile', 'css', 'breakpoint', 'layout'],
    related: ['css-layout', 'ui-ux-grundlagen', 'layout-raster'],
    de: {
      title: 'Responsive Design',
      summary: 'Ein Layout für alle Bildschirme — vom Handy bis zum Desktop, flexibel statt fix.',
      content: `
        <h3>Mobile First</h3>
        <p>Erst fürs kleine Display gestalten, dann für größere erweitern. So bleibt das Wesentliche im Fokus und die Seite lädt schlank.</p>
        <h3>Werkzeuge</h3>
        <p><strong>Flexible Einheiten</strong> (%, rem, fr) statt fester Pixel. <strong>Media Queries</strong> ändern das Layout ab bestimmten Breakpoints. <strong>Flexbox &amp; Grid</strong> ordnen Inhalte um.</p>
        <h3>Testen</h3>
        <p>Auf echten Geräten und in den DevTools prüfen — Reihenfolge, Touch-Ziele und Lesbarkeit ab 320 px Breite.</p>
      `,
      didYouKnow: 'Der Begriff „Responsive Web Design" wurde 2010 von Ethan Marcotte geprägt.',
    },
    en: {
      title: 'Responsive Design',
      summary: 'One layout for every screen — from phone to desktop, flexible instead of fixed.',
      content: `
        <h3>Mobile first</h3>
        <p>Design for the small screen first, then expand for larger ones. The essentials stay in focus and the page loads lean.</p>
        <h3>Tools</h3>
        <p><strong>Flexible units</strong> (%, rem, fr) instead of fixed pixels. <strong>Media queries</strong> change the layout at certain breakpoints. <strong>Flexbox &amp; Grid</strong> rearrange content.</p>
        <h3>Testing</h3>
        <p>Check on real devices and in DevTools — order, touch targets and readability from 320px wide.</p>
      `,
      didYouKnow: 'The term "Responsive Web Design" was coined by Ethan Marcotte in 2010.',
    },
    configs: [
      {
        labelDe: 'Media Query (Breakpoint)',
        labelEn: 'Media query (breakpoint)',
        lang: 'css',
        code: `.grid { grid-template-columns: 1fr; }

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}`,
      },
    ],
  },
  {
    id: 'ui-ux-grundlagen',
    category: 'web-ux',
    difficulty: 'medium',
    image: '',
    icon: 'ph-cursor-click',
    tags: ['ui', 'ux', 'usability', 'interaktion', 'design'],
    related: ['responsive-design', 'accessibility', 'gestaltgesetze'],
    de: {
      title: 'UI/UX-Grundlagen',
      summary:
        'UI ist, wie es aussieht — UX, wie es sich anfühlt. Beides entscheidet über gute Produkte.',
      content: `
        <h3>UI vs. UX</h3>
        <p><strong>UI</strong> (User Interface) ist die sichtbare Oberfläche: Buttons, Farben, Layout. <strong>UX</strong> (User Experience) ist das gesamte Erlebnis: Wie leicht erreicht die Person ihr Ziel?</p>
        <h3>Prinzipien</h3>
        <ul>
          <li><strong>Konsistenz:</strong> gleiche Dinge sehen gleich aus und verhalten sich gleich.</li>
          <li><strong>Feedback:</strong> jede Aktion bekommt eine sichtbare Reaktion.</li>
          <li><strong>Klarheit:</strong> das Wichtigste zuerst, Ablenkung raus.</li>
        </ul>
        <h3>Zustände nicht vergessen</h3>
        <p>Hover, Fokus, aktiv, deaktiviert, Laden, Fehler — jedes interaktive Element hat mehrere Zustände.</p>
      `,
      didYouKnow:
        'Jakob Nielsens 10 Usability-Heuristiken von 1994 sind bis heute Standard-Checkliste im UX-Design.',
    },
    en: {
      title: 'UI/UX Basics',
      summary: 'UI is how it looks — UX is how it feels. Both decide whether a product is good.',
      content: `
        <h3>UI vs. UX</h3>
        <p><strong>UI</strong> (user interface) is the visible surface: buttons, colors, layout. <strong>UX</strong> (user experience) is the whole journey: how easily does the person reach their goal?</p>
        <h3>Principles</h3>
        <ul>
          <li><strong>Consistency:</strong> same things look and behave the same.</li>
          <li><strong>Feedback:</strong> every action gets a visible response.</li>
          <li><strong>Clarity:</strong> most important first, remove distraction.</li>
        </ul>
        <h3>Don't forget states</h3>
        <p>Hover, focus, active, disabled, loading, error — every interactive element has several states.</p>
      `,
      didYouKnow:
        "Jakob Nielsen's 10 usability heuristics from 1994 are still a standard checklist in UX design.",
    },
    configs: [],
  },
  {
    id: 'accessibility',
    category: 'web-ux',
    difficulty: 'medium',
    image: '',
    icon: 'ph-eye',
    tags: ['a11y', 'barrierefreiheit', 'kontrast', 'wcag', 'screenreader'],
    related: ['ui-ux-grundlagen', 'farbharmonie', 'typografie-grundlagen'],
    de: {
      title: 'Barrierefreiheit (A11y)',
      summary: 'Websites für alle — genügend Kontrast, Tastatur-Bedienung und semantisches HTML.',
      content: `
        <h3>Warum a11y?</h3>
        <p>Barrierefreiheit macht Inhalte für Menschen mit Seh-, Hör- oder Motorik-Einschränkungen nutzbar — und verbessert die Bedienung für alle.</p>
        <h3>Die wichtigsten Hebel</h3>
        <ul>
          <li><strong>Kontrast:</strong> mind. 4,5:1 für normalen Text (WCAG AA).</li>
          <li><strong>Tastatur:</strong> alles ohne Maus bedienbar, sichtbarer Fokus.</li>
          <li><strong>Semantik:</strong> echte <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, Alt-Texte für Bilder.</li>
          <li><strong>ARIA:</strong> nur wo nötig, HTML-Semantik hat Vorrang.</li>
        </ul>
        <h3>Testen</h3>
        <p>Mit Tastatur durch die Seite, Screenreader ausprobieren, Kontrast-Checker nutzen.</p>
      `,
      didYouKnow:
        'In der EU verpflichtet der European Accessibility Act ab Juni 2025 viele digitale Produkte zur Barrierefreiheit.',
    },
    en: {
      title: 'Accessibility (A11y)',
      summary: 'Websites for everyone — enough contrast, keyboard use and semantic HTML.',
      content: `
        <h3>Why a11y?</h3>
        <p>Accessibility makes content usable for people with visual, hearing or motor impairments — and improves usability for everyone.</p>
        <h3>The key levers</h3>
        <ul>
          <li><strong>Contrast:</strong> at least 4.5:1 for normal text (WCAG AA).</li>
          <li><strong>Keyboard:</strong> everything operable without a mouse, visible focus.</li>
          <li><strong>Semantics:</strong> real <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, alt text for images.</li>
          <li><strong>ARIA:</strong> only where needed, HTML semantics come first.</li>
        </ul>
        <h3>Testing</h3>
        <p>Navigate by keyboard, try a screen reader, use a contrast checker.</p>
      `,
      didYouKnow:
        'In the EU, the European Accessibility Act requires many digital products to be accessible from June 2025.',
    },
    configs: [
      {
        labelDe: 'Sichtbarer Fokus-Ring (CSS)',
        labelEn: 'Visible focus ring (CSS)',
        lang: 'css',
        code: `:focus-visible {
  outline: 3px solid #ff5a3c;
  outline-offset: 2px;
}`,
      },
    ],
  },
  {
    id: 'css-layout',
    category: 'web-ux',
    difficulty: 'hard',
    image: '',
    icon: 'ph-columns',
    tags: ['css', 'grid', 'flexbox', 'layout', 'web'],
    related: ['responsive-design', 'layout-raster', 'ui-ux-grundlagen'],
    de: {
      title: 'CSS Grid & Flexbox',
      summary:
        'Die zwei modernen Layout-Systeme: Grid für zweidimensional, Flexbox für eine Achse.',
      content: `
        <h3>Flexbox — eine Achse</h3>
        <p>Ideal für Reihen oder Spalten: Navigationen, Button-Gruppen, Karten in einer Zeile. Verteilt Platz entlang einer Richtung.</p>
        <h3>Grid — zwei Achsen</h3>
        <p>Ideal für echte Layouts mit Zeilen <strong>und</strong> Spalten: Seitenraster, Galerien, Dashboards. Definiert ein festes Gitter.</p>
        <h3>Kombinieren</h3>
        <p>Grid fürs Grobraster der Seite, Flexbox für die Feinverteilung innerhalb der Komponenten — zusammen extrem mächtig.</p>
      `,
      didYouKnow:
        'CSS Grid und Flexbox lösen Layout-Probleme, für die früher Tabellen oder float-Hacks missbraucht wurden.',
    },
    en: {
      title: 'CSS Grid & Flexbox',
      summary: 'The two modern layout systems: Grid for two dimensions, Flexbox for one axis.',
      content: `
        <h3>Flexbox — one axis</h3>
        <p>Ideal for rows or columns: navigation, button groups, cards in a line. Distributes space along one direction.</p>
        <h3>Grid — two axes</h3>
        <p>Ideal for real layouts with rows <strong>and</strong> columns: page grids, galleries, dashboards. Defines a fixed grid.</p>
        <h3>Combine them</h3>
        <p>Grid for the page's coarse structure, Flexbox for fine distribution inside components — extremely powerful together.</p>
      `,
      didYouKnow:
        'CSS Grid and Flexbox solve layout problems that once forced people to abuse tables or float hacks.',
    },
    configs: [
      {
        labelDe: 'Flexbox-Navigation',
        labelEn: 'Flexbox navigation',
        lang: 'css',
        code: `.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}`,
      },
    ],
  },
  {
    id: 'multi-language-i18n',
    category: 'web-ux',
    difficulty: 'medium',
    image: '',
    icon: 'ph-translate',
    tags: ['i18n', 'lokalisierung', 'js', 'rtl', 'sprache'],
    related: ['accessibility', 'ui-ux-grundlagen', 'responsive-design'],
    de: {
      title: 'Multi Language & i18n',
      summary:
        'Websites für alle Nationen: Übersetzungsstrategien, RTL-Support, Locale-Handling und Kultur-Sensitivität.',
      content: `
        <h3>i18n vs. l10n</h3>
        <p><strong>i18n</strong> (Internationalisierung) baut die Technik so, dass Sprachen austauschbar sind. <strong>l10n</strong> (Lokalisierung) füllt sie dann mit konkreten Übersetzungen, Datums- und Zahlenformaten.</p>
        <h3>Keys statt fester Texte</h3>
        <p>Sichtbarer Text kommt nie hart in den Code, sondern über <strong>Schlüssel</strong> aus Wörterbüchern (<code>de.js</code>, <code>en.js</code>). Alle Sprachen brauchen <strong>dieselben Keys</strong>, sonst fehlen Texte.</p>
        <h3>RTL & Kultur</h3>
        <ul>
          <li><strong>RTL:</strong> Arabisch/Hebräisch laufen rechts-nach-links — Layout muss spiegeln (<code>dir="rtl"</code>).</li>
          <li><strong>Formate:</strong> Datum, Uhrzeit, Währung, Zahlen sind je Locale verschieden.</li>
          <li><strong>Länge:</strong> Deutsch ist oft 30 % länger als Englisch — Platz einplanen.</li>
        </ul>
      `,
      didYouKnow:
        'Das Kürzel „i18n" steht für „internationalization" — i, dann 18 Buchstaben, dann n. Dasselbe Muster wie „a11y" für accessibility.',
    },
    en: {
      title: 'Multi Language & i18n',
      summary:
        'Websites for every nation: translation strategies, RTL support, locale handling and cultural sensitivity.',
      content: `
        <h3>i18n vs. l10n</h3>
        <p><strong>i18n</strong> (internationalization) builds the tech so languages are swappable. <strong>l10n</strong> (localization) then fills it with actual translations, date and number formats.</p>
        <h3>Keys instead of hard-coded text</h3>
        <p>Visible text never goes straight into the code but comes via <strong>keys</strong> from dictionaries (<code>de.js</code>, <code>en.js</code>). Every language needs the <strong>same keys</strong>, otherwise text goes missing.</p>
        <h3>RTL & culture</h3>
        <ul>
          <li><strong>RTL:</strong> Arabic/Hebrew read right-to-left — the layout must mirror (<code>dir="rtl"</code>).</li>
          <li><strong>Formats:</strong> date, time, currency and numbers differ per locale.</li>
          <li><strong>Length:</strong> German is often 30% longer than English — plan for space.</li>
        </ul>
      `,
      didYouKnow:
        'The abbreviation "i18n" stands for "internationalization" — i, then 18 letters, then n. Same pattern as "a11y" for accessibility.',
    },
    configs: [
      {
        labelDe: 'Mini-Wörterbuch + Lookup (JS)',
        labelEn: 'Mini dictionary + lookup (JS)',
        lang: 'js',
        code: `const dict = {
  de: { greeting: 'Hallo' },
  en: { greeting: 'Hello' },
};

const t = (lang, key) => dict[lang]?.[key] ?? key;
t('de', 'greeting'); // "Hallo"`,
      },
    ],
  },
  {
  id: 'microinteractions',
  category: 'web-ux',
  difficulty: 'medium',
  image: '',
  icon: 'ph-lightning',
  tags: ['animation', 'feedback', 'interaction', 'ui'],
  related: ['ui-ux-grundlagen', 'accessibility'],
  de: {
    title: 'Mikrointeraktionen',
    summary: 'Kleine Animationen und Reaktionen, die Bedienung lebendig und verständlich machen.',
    content: `
      <h3>Was sind Mikrointeraktionen?</h3>
      <p>Mini-Reaktionen wie ein Button-Highlight, ein Ladepunkt oder ein sanftes Einblenden. Sie geben Feedback und machen Abläufe klarer.</p>
      <h3>Regeln</h3>
      <ul>
        <li><strong>Schnell:</strong> 150–300 ms wirken natürlich.</li>
        <li><strong>Zweck:</strong> Jede Animation erklärt etwas — nie nur Deko.</li>
        <li><strong>Klar:</strong> Fokus auf Feedback, nicht auf Effekte.</li>
      </ul>
      <h3>Barrierefreiheit</h3>
      <p>Animationen müssen dezent bleiben und dürfen keine Inhalte ersetzen. Bewegungen sollten reduzierbar sein (<code>prefers-reduced-motion</code>).</p>
    `,
    didYouKnow: 'Viele moderne UI-Bibliotheken wie Material Design basieren stark auf Mikrointeraktionen.',
  },
  en: {
    title: 'Microinteractions',
    summary: 'Small animations and reactions that make interfaces feel alive and understandable.',
    content: `
      <h3>What are microinteractions?</h3>
      <p>Tiny reactions like button highlights, loading dots or gentle fades. They provide feedback and clarify actions.</p>
      <h3>Rules</h3>
      <ul>
        <li><strong>Fast:</strong> 150–300 ms feel natural.</li>
        <li><strong>Purpose:</strong> Every animation explains something — never just decoration.</li>
        <li><strong>Clarity:</strong> Focus on feedback, not effects.</li>
      </ul>
      <h3>Accessibility</h3>
      <p>Animations must stay subtle and never replace content. Motion should be reducible (<code>prefers-reduced-motion</code>).</p>
    `,
    didYouKnow: 'Many modern UI libraries like Material Design rely heavily on microinteractions.',
  },
  configs: [
    {
      labelDe: 'Motion reduzieren (CSS)',
      labelEn: 'Reduce motion (CSS)',
      lang: 'css',
      code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}`,
    },
  ],
},
{
  id: 'color-psychology',
  category: 'web-ux',
  difficulty: 'easy',
  image: '',
  icon: 'ph-palette',
  tags: ['color', 'emotion', 'design', 'branding'],
  related: ['ui-ux-grundlagen', 'farbharmonie'],
  de: {
    title: 'Farben & Psychologie',
    summary: 'Farben lösen Emotionen aus und beeinflussen Entscheidungen — bewusst einsetzen.',
    content: `
      <h3>Wirkung</h3>
      <p>Farben transportieren Stimmung: Blau wirkt ruhig, Rot energisch, Grün natürlich. Sie lenken Aufmerksamkeit und schaffen Orientierung.</p>
      <h3>Konsistenz</h3>
      <p>Ein Farbkonzept sollte klar definiert sein: Primär-, Sekundär- und Akzentfarben mit festen Rollen.</p>
      <h3>Kontext</h3>
      <p>Farben wirken kulturell unterschiedlich — Rot kann Gefahr oder Glück bedeuten. Immer Zielgruppe beachten.</p>
    `,
    didYouKnow: 'Farben beeinflussen nachweislich die Conversion Rate — besonders bei Call-to-Action-Buttons.',
  },
  en: {
    title: 'Color Psychology',
    summary: 'Colors trigger emotions and influence decisions — use them intentionally.',
    content: `
      <h3>Effect</h3>
      <p>Colors carry mood: blue feels calm, red energetic, green natural. They guide attention and create orientation.</p>
      <h3>Consistency</h3>
      <p>A color system should be clearly defined: primary, secondary and accent colors with fixed roles.</p>
      <h3>Context</h3>
      <p>Colors vary culturally — red can mean danger or luck. Always consider the audience.</p>
    `,
    didYouKnow: 'Colors measurably influence conversion rates — especially for call-to-action buttons.',
  },
  configs: [],
},
];