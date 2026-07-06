/**
 * SYNTHESE — Kategorie: GESTALTUNG
 * Owner: Content-Lead. Neues Thema = Objekt anhängen. Schema: DATA-SCHEMA.md §1.
 */

export default [
  {
    id: 'gestaltgesetze',
    category: 'gestaltung',
    difficulty: 'easy',
    image: '',
    icon: 'ph-shapes',
    tags: ['gestaltgesetze', 'wahrnehmung', 'gestalt', 'komposition'],
    related: ['layout-raster', 'komposition', 'ui-ux-grundlagen'],
    de: {
      title: 'Gestaltgesetze',
      summary:
        'Wie unser Gehirn Elemente automatisch gruppiert — die Basis jeder guten visuellen Ordnung.',
      content: `
        <h3>Was sind Gestaltgesetze?</h3>
        <p>Gestaltgesetze beschreiben, wie Menschen einzelne Elemente unbewusst zu Gruppen und Formen zusammenfassen. Wer sie kennt, steuert gezielt, was zusammengehört und was auffällt.</p>
        <h3>Die wichtigsten Prinzipien</h3>
        <ul>
          <li><strong>Nähe:</strong> Nahe Elemente wirken als Gruppe.</li>
          <li><strong>Ähnlichkeit:</strong> Gleiche Form/Farbe wird zusammengefasst.</li>
          <li><strong>Geschlossenheit:</strong> Das Auge ergänzt fehlende Linien zu ganzen Formen.</li>
          <li><strong>Figur-Grund:</strong> Wir trennen Objekt vom Hintergrund.</li>
        </ul>
        <h3>Warum wichtig</h3>
        <p>Layout, Menüs und Formulare wirken erst durch bewusste Gruppierung ruhig und verständlich.</p>
      `,
      didYouKnow:
        'Das Wort „Gestalt" wird in der englischen Fachliteratur unübersetzt verwendet — es gibt kein exaktes englisches Pendant.',
    },
    en: {
      title: 'Gestalt Principles',
      summary:
        'How the brain groups elements automatically — the basis of any strong visual order.',
      content: `
        <h3>What are Gestalt principles?</h3>
        <p>Gestalt principles describe how people subconsciously combine single elements into groups and shapes. Knowing them lets you control what belongs together and what stands out.</p>
        <h3>The key principles</h3>
        <ul>
          <li><strong>Proximity:</strong> Nearby elements read as a group.</li>
          <li><strong>Similarity:</strong> Same shape/color is grouped.</li>
          <li><strong>Closure:</strong> The eye completes missing lines into whole shapes.</li>
          <li><strong>Figure-ground:</strong> We separate object from background.</li>
        </ul>
        <h3>Why it matters</h3>
        <p>Layouts, menus and forms only feel calm and clear through deliberate grouping.</p>
      `,
      didYouKnow:
        'The term "Gestalt" is used untranslated in English literature — there is no exact English equivalent.',
    },
    configs: [],
  },
  {
    id: 'layout-raster',
    category: 'gestaltung',
    difficulty: 'medium',
    image: '',
    icon: 'ph-grid-four',
    tags: ['layout', 'raster', 'grid', 'spalten', 'weissraum'],
    related: ['gestaltgesetze', 'komposition', 'css-layout'],
    de: {
      title: 'Layout & Gestaltungsraster',
      summary:
        'Ein Raster gibt jedem Element einen Platz — so entsteht Ordnung statt Zufall auf der Seite.',
      content: `
        <h3>Warum ein Raster?</h3>
        <p>Ein Gestaltungsraster teilt die Fläche in Spalten und Zeilen. Elemente richten sich daran aus, wodurch alles ruhiger und professioneller wirkt.</p>
        <h3>Bausteine</h3>
        <p><strong>Spalten</strong> tragen den Inhalt, <strong>Stege</strong> (Gutter) sind die Abstände dazwischen, <strong>Ränder</strong> rahmen die Fläche. Weißraum ist kein leerer Platz, sondern ein aktives Gestaltungsmittel.</p>
        <h3>In der Praxis</h3>
        <p>Print nutzt oft 12-Spalten-Raster, Web ebenso — flexibel per CSS Grid. Konsistente Abstände (z.B. 8-px-Schritte) halten alles im Takt.</p>
      `,
      didYouKnow:
        'Das 12-Spalten-Raster ist so beliebt, weil 12 durch 2, 3, 4 und 6 teilbar ist — es erlaubt viele saubere Aufteilungen.',
    },
    en: {
      title: 'Layout & Grid Systems',
      summary: 'A grid gives every element a place — order instead of chance on the page.',
      content: `
        <h3>Why a grid?</h3>
        <p>A layout grid divides the surface into columns and rows. Elements align to it, making everything calmer and more professional.</p>
        <h3>Building blocks</h3>
        <p><strong>Columns</strong> carry content, <strong>gutters</strong> are the gaps between them, <strong>margins</strong> frame the surface. White space is not empty — it is an active design tool.</p>
        <h3>In practice</h3>
        <p>Print often uses a 12-column grid; the web does too — flexibly via CSS Grid. Consistent spacing (e.g. 8px steps) keeps everything in rhythm.</p>
      `,
      didYouKnow:
        'The 12-column grid is popular because 12 divides by 2, 3, 4 and 6 — allowing many clean splits.',
    },
    configs: [
      {
        labelDe: '12-Spalten-Raster (CSS Grid)',
        labelEn: '12-column grid (CSS Grid)',
        lang: 'css',
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}
.card { grid-column: span 4; }`,
      },
    ],
  },
  {
    id: 'komposition',
    category: 'gestaltung',
    difficulty: 'medium',
    image: '',
    icon: 'ph-crop',
    tags: ['komposition', 'goldener-schnitt', 'drittelregel', 'balance'],
    related: ['gestaltgesetze', 'layout-raster', 'raster-vektor'],
    de: {
      title: 'Komposition & Goldener Schnitt',
      summary:
        'Wo platziere ich das Wichtigste? Drittelregel und Goldener Schnitt geben starke Antworten.',
      content: `
        <h3>Blickführung</h3>
        <p>Komposition heißt, den Blick des Betrachters bewusst zu lenken. Nicht die Mitte ist immer richtig — Spannung entsteht durch gezielte Platzierung.</p>
        <h3>Drittelregel</h3>
        <p>Teile die Fläche mit zwei waagerechten und zwei senkrechten Linien in neun Felder. Wichtige Elemente auf die Linien oder deren Schnittpunkte setzen.</p>
        <h3>Goldener Schnitt</h3>
        <p>Ein Verhältnis von etwa 1:1,618, das in Natur und Kunst als besonders harmonisch gilt. Es liefert Proportionen für Formate, Abstände und Platzierung.</p>
      `,
      didYouKnow:
        'Der Goldene Schnitt (≈1,618) wird oft mit dem griechischen Buchstaben Phi (φ) bezeichnet.',
    },
    en: {
      title: 'Composition & Golden Ratio',
      summary:
        'Where to place the key element? Rule of thirds and golden ratio give strong answers.',
      content: `
        <h3>Guiding the eye</h3>
        <p>Composition means deliberately directing the viewer's gaze. The center is not always right — tension comes from purposeful placement.</p>
        <h3>Rule of thirds</h3>
        <p>Split the frame with two horizontal and two vertical lines into nine cells. Put important elements on the lines or their intersections.</p>
        <h3>Golden ratio</h3>
        <p>A ratio of about 1:1.618, considered especially harmonious in nature and art. It provides proportions for formats, spacing and placement.</p>
      `,
      didYouKnow: 'The golden ratio (≈1.618) is often denoted by the Greek letter Phi (φ).',
    },
    configs: [],
  },
];
