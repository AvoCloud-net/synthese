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
        <p>Gestaltgesetze beschreiben, wie unser Gehirn einzelne Sinnesreize unbewusst zu Gruppen, Mustern und ganzen Formen zusammenfasst. Sie wurden Anfang des 20. Jahrhunderts von der Berliner Gestaltpsychologie (u.a. Max Wertheimer, Kurt Koffka, Wolfgang Köhler) formuliert. Der Kerngedanke: „Das Ganze ist mehr als die Summe seiner Teile." Wir sehen nicht viele einzelne Punkte, sondern sofort eine Reihe, eine Gruppe, ein Gesicht.</p>
        <p>Für Gestaltung heißt das: Du musst nichts „erzwingen". Wenn du Elemente richtig anordnest, erledigt die Wahrnehmung die Ordnung von selbst — der Blick weiß intuitiv, was zusammengehört.</p>
        <h3>Die wichtigsten Prinzipien</h3>
        <ul>
          <li><strong>Nähe:</strong> Elemente, die räumlich nah beieinanderstehen, werden als Gruppe gelesen — auch ohne Rahmen oder Linie. Deshalb trennt Weißraum Inhalte oft besser als eine Trennlinie.</li>
          <li><strong>Ähnlichkeit:</strong> Gleiche Farbe, Form, Größe oder Ausrichtung fasst das Auge zusammen. So erkennst du z. B. alle klickbaren Links, weil sie gleich aussehen.</li>
          <li><strong>Geschlossenheit:</strong> Das Auge ergänzt fehlende Kanten zu vollständigen Formen. Ein Kreis aus Strichen wird als Kreis gesehen — Logos nutzen das ständig.</li>
          <li><strong>Kontinuität:</strong> Der Blick folgt lieber durchgehenden Linien und weichen Kurven als abrupten Sprüngen. Wichtig für Leserichtung und Anordnung von Listen.</li>
          <li><strong>Figur-Grund:</strong> Wir trennen ein Objekt (Figur) automatisch vom Hintergrund (Grund). Mehrdeutige Bilder wie die Rubin-Vase kippen zwischen beiden Deutungen.</li>
          <li><strong>Gemeinsames Schicksal:</strong> Elemente, die sich gemeinsam bewegen oder verändern, gehören für uns zusammen — Grundlage vieler Animationen.</li>
        </ul>
        <h3>Warum das wichtig ist</h3>
        <p>Layouts, Menüs, Formulare und Diagramme wirken erst durch bewusste Gruppierung ruhig und verständlich. Ein Formular mit passenden Abständen zwischen Label und Feld ist ohne ein einziges zusätzliches Element sofort leichter auszufüllen. Wer die Gesetze ignoriert, produziert „Rauschen" — der Nutzer muss die Ordnung dann mühsam selbst herstellen.</p>
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
        <p>Gestalt principles describe how our brain subconsciously combines single sensory cues into groups, patterns and whole shapes. They were formulated in the early 20th century by the Berlin school of Gestalt psychology (Max Wertheimer, Kurt Koffka, Wolfgang Köhler and others). The core idea: "The whole is greater than the sum of its parts." We don't see many separate dots — we instantly see a row, a group, a face.</p>
        <p>For design this means you rarely have to "force" anything. Arrange elements well and perception does the ordering for you — the eye intuitively knows what belongs together.</p>
        <h3>The key principles</h3>
        <ul>
          <li><strong>Proximity:</strong> Elements placed close together read as a group — no box or line needed. That's why whitespace often separates content better than a divider.</li>
          <li><strong>Similarity:</strong> Same color, shape, size or orientation is grouped by the eye. It's how you recognise every clickable link because they all look alike.</li>
          <li><strong>Closure:</strong> The eye completes missing edges into whole shapes. A circle made of dashes is seen as a circle — logos exploit this constantly.</li>
          <li><strong>Continuity:</strong> The gaze prefers to follow continuous lines and smooth curves rather than abrupt jumps. Key for reading order and list layout.</li>
          <li><strong>Figure-ground:</strong> We automatically separate an object (figure) from its background (ground). Ambiguous images like the Rubin vase flip between both readings.</li>
          <li><strong>Common fate:</strong> Elements that move or change together are perceived as belonging together — the basis of many animations.</li>
        </ul>
        <h3>Why it matters</h3>
        <p>Layouts, menus, forms and charts only feel calm and clear through deliberate grouping. A form with the right spacing between label and field is instantly easier to fill in without adding a single element. Ignore the principles and you produce "noise" — the user then has to reconstruct the order themselves.</p>
      `,
      didYouKnow:
        'The term "Gestalt" is used untranslated in English literature — there is no exact English equivalent.',
    },
    configs: [],
    example: [
      {
        caption: 'Nähe: Die beiden engen Cluster liest man sofort als zwei getrennte Gruppen.',
        html: `
          <div style="display:flex;gap:56px;justify-content:center;align-items:center;flex-wrap:wrap">
            <div style="display:grid;grid-template-columns:repeat(3,14px);gap:7px">
              <span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span><span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span><span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span>
              <span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span><span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span><span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,14px);gap:7px">
              <span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span><span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span><span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span>
              <span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span><span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span><span style="width:14px;height:14px;border-radius:50%;background:#6366f1"></span>
            </div>
          </div>`,
      },
      {
        caption: 'Ähnlichkeit: Gleiche Farbe gruppiert — die orangen Punkte bilden ein „X".',
        html: `
          <div style="display:grid;grid-template-columns:repeat(5,14px);gap:9px">
            <span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span>
            <span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span>
            <span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span>
            <span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span>
            <span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#94a3b8"></span><span style="width:14px;height:14px;border-radius:50%;background:#f59e0b"></span>
          </div>`,
      },
      {
        caption: 'Geschlossenheit: Aus Strichen ergänzt das Auge einen ganzen Kreis.',
        html: `
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="48" fill="none" stroke="#6366f1" stroke-width="8" stroke-dasharray="20 16"></circle>
          </svg>`,
      },
    ],
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
        <p>Ein Gestaltungsraster (Grid) teilt die Fläche in unsichtbare Spalten und Zeilen. Alle Elemente richten sich an diesen Linien aus. Das Ergebnis: Kanten fluchten, Abstände wiederholen sich, das Auge findet Halt. Ohne Raster wirkt eine Seite schnell „zusammengewürfelt", selbst wenn jedes Einzelteil hübsch ist — es fehlt die gemeinsame Ordnung.</p>
        <h3>Die Bausteine</h3>
        <ul>
          <li><strong>Spalten (columns):</strong> die vertikalen Streifen, die den Inhalt tragen.</li>
          <li><strong>Stege (gutter):</strong> die gleichbleibenden Abstände zwischen den Spalten.</li>
          <li><strong>Ränder (margin):</strong> der Freiraum, der das ganze Raster einrahmt.</li>
          <li><strong>Baseline-Raster:</strong> ein zusätzliches horizontales Raster, an dem Textzeilen ausgerichtet werden.</li>
        </ul>
        <p>Weißraum ist dabei kein „verschenkter" Platz, sondern ein aktives Gestaltungsmittel: Er gruppiert (Gestaltgesetz der Nähe), schafft Ruhe und lenkt den Blick auf das Wesentliche.</p>
        <h3>Modulare Skala &amp; Abstände</h3>
        <p>Profis würfeln Abstände nicht, sondern nutzen ein festes System — häufig Vielfache von 8 px (8, 16, 24, 32 …). Dieses „8-Point-Grid" sorgt dafür, dass alle Abstände zueinander im Takt stehen und auf verschiedenen Bildschirmen sauber aufgehen.</p>
        <h3>In der Praxis</h3>
        <p>Der Klassiker ist das 12-Spalten-Raster: Eine Karte über 4 Spalten (span 4) ergibt drei gleiche Kacheln pro Zeile, über 6 Spalten zwei. Im Web setzt man das flexibel mit <code>CSS Grid</code> um; auf kleinen Bildschirmen kollabiert das Raster einfach auf eine Spalte. Wichtig ist Konsequenz: Lieber ein Raster strikt einhalten als drei verschiedene halbherzig.</p>
      `,
      didYouKnow:
        'Das 12-Spalten-Raster ist so beliebt, weil 12 durch 2, 3, 4 und 6 teilbar ist — es erlaubt viele saubere Aufteilungen.',
    },
    en: {
      title: 'Layout & Grid Systems',
      summary: 'A grid gives every element a place — order instead of chance on the page.',
      content: `
        <h3>Why a grid?</h3>
        <p>A layout grid divides the surface into invisible columns and rows. Every element aligns to these lines. The result: edges line up, spacing repeats, the eye finds structure. Without a grid a page quickly looks "thrown together" even if each part is pretty — the shared order is missing.</p>
        <h3>The building blocks</h3>
        <ul>
          <li><strong>Columns:</strong> the vertical strips that carry the content.</li>
          <li><strong>Gutters:</strong> the constant gaps between columns.</li>
          <li><strong>Margins:</strong> the free space framing the whole grid.</li>
          <li><strong>Baseline grid:</strong> an extra horizontal grid that text lines snap to.</li>
        </ul>
        <p>White space is not "wasted" space but an active tool: it groups (Gestalt law of proximity), creates calm and guides the eye to what matters.</p>
        <h3>Modular scale &amp; spacing</h3>
        <p>Pros don't guess spacing — they use a fixed system, often multiples of 8px (8, 16, 24, 32 …). This "8-point grid" keeps all spacing in rhythm and divides cleanly across different screens.</p>
        <h3>In practice</h3>
        <p>The classic is the 12-column grid: a card spanning 4 columns gives three equal tiles per row, spanning 6 gives two. On the web you implement it flexibly with <code>CSS Grid</code>; on small screens the grid simply collapses to one column. Consistency is key: better to follow one grid strictly than three half-heartedly.</p>
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
    // Issue #52: interaktives Beispiel zum 12-Spalten-Raster (Live-Vorschau).
    sandbox: {
      html: `<div class="grid">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
</div>`,
      css: `.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
}
.card {
  grid-column: span 4;
  padding: 16px;
  background: #6366f1;
  color: #fff;
  text-align: center;
  border-radius: 6px;
}`,
      js: `document.querySelectorAll('.card').forEach((c) => {
  c.addEventListener('click', () => {
    c.style.background = '#22c55e';
  });
});`,
    },
    example: [
      {
        caption: '12-Spalten-Raster: unten drei Karten à „span 4" — jede füllt vier Spalten.',
        html: `
          <div style="width:100%;max-width:340px">
            <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:3px;margin-bottom:8px">
              ${Array.from({ length: 12 })
                .map(
                  () =>
                    '<div style="height:34px;background:repeating-linear-gradient(-45deg,#6366f133 0 4px,#6366f31a 4px 8px);border-radius:2px"></div>'
                )
                .join('')}
            </div>
            <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:3px">
              <div style="grid-column:span 4;height:40px;background:#6366f1;border-radius:4px"></div>
              <div style="grid-column:span 4;height:40px;background:#818cf8;border-radius:4px"></div>
              <div style="grid-column:span 4;height:40px;background:#a5b4fc;border-radius:4px"></div>
            </div>
          </div>`,
      },
      {
        caption: '8-Point-Grid: Abstände als Vielfache von 8 px halten den Rhythmus.',
        html: `
          <div style="display:flex;gap:10px;align-items:flex-end">
            <div style="text-align:center"><div style="width:8px;height:8px;background:#22c55e;border-radius:2px"></div><div style="font-size:.7rem;opacity:.6;margin-top:6px">8</div></div>
            <div style="text-align:center"><div style="width:16px;height:16px;background:#22c55e;border-radius:2px"></div><div style="font-size:.7rem;opacity:.6;margin-top:6px">16</div></div>
            <div style="text-align:center"><div style="width:24px;height:24px;background:#22c55e;border-radius:2px"></div><div style="font-size:.7rem;opacity:.6;margin-top:6px">24</div></div>
            <div style="text-align:center"><div style="width:32px;height:32px;background:#22c55e;border-radius:2px"></div><div style="font-size:.7rem;opacity:.6;margin-top:6px">32</div></div>
            <div style="text-align:center"><div style="width:48px;height:48px;background:#22c55e;border-radius:2px"></div><div style="font-size:.7rem;opacity:.6;margin-top:6px">48</div></div>
          </div>`,
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
        <h3>Was ist Komposition?</h3>
        <p>Komposition ist die bewusste Anordnung aller Bildelemente, um den Blick des Betrachters zu lenken und eine Aussage zu treffen. Die Mitte wirkt oft statisch und langweilig — echte Spannung entsteht durch gezielte, leicht außermittige Platzierung. Gute Komposition entscheidet, was zuerst gesehen wird, wohin der Blick danach wandert und wo er zur Ruhe kommt.</p>
        <h3>Drittelregel</h3>
        <p>Teile die Fläche mit zwei waagerechten und zwei senkrechten Linien in neun gleiche Felder. Platziere wichtige Elemente <strong>auf die Linien</strong> oder besser noch auf ihre vier <strong>Schnittpunkte</strong> („Kraftpunkte"). Ein Horizont gehört auf die obere oder untere Drittellinie, nicht in die Mitte. Die Drittelregel ist die einsteigerfreundliche, vereinfachte Variante des Goldenen Schnitts.</p>
        <h3>Goldener Schnitt</h3>
        <p>Der Goldene Schnitt teilt eine Strecke so, dass sich der kleinere zum größeren Teil verhält wie der größere zum Ganzen — ein Verhältnis von rund <strong>1 : 1,618</strong> (Phi). Es taucht in Muschelschalen, Blütenständen und antiker Architektur auf und gilt seit der Renaissance als besonders harmonisch. Daraus abgeleitet ist die <strong>Goldene Spirale</strong>, an der man Motive entlangführt.</p>
        <h3>Weitere Werkzeuge</h3>
        <ul>
          <li><strong>Blickführung:</strong> Linien, Wege und Blickrichtungen leiten das Auge ins Bild.</li>
          <li><strong>Balance:</strong> Ein großes Element kann durch mehrere kleine ausgeglichen werden (symmetrisch oder asymmetrisch).</li>
          <li><strong>Negativraum:</strong> Bewusste Leere gibt dem Hauptmotiv Luft und Bedeutung.</li>
        </ul>
      `,
      didYouKnow:
        'Der Goldene Schnitt (≈1,618) wird oft mit dem griechischen Buchstaben Phi (φ) bezeichnet.',
    },
    en: {
      title: 'Composition & Golden Ratio',
      summary:
        'Where to place the key element? Rule of thirds and golden ratio give strong answers.',
      content: `
        <h3>What is composition?</h3>
        <p>Composition is the deliberate arrangement of every visual element to guide the viewer's gaze and make a statement. The center often feels static and dull — real tension comes from purposeful, slightly off-center placement. Good composition decides what is seen first, where the eye travels next and where it comes to rest.</p>
        <h3>Rule of thirds</h3>
        <p>Split the frame with two horizontal and two vertical lines into nine equal cells. Put important elements <strong>on the lines</strong> or, even better, on their four <strong>intersections</strong> ("power points"). A horizon belongs on the upper or lower third line, not in the middle. The rule of thirds is the beginner-friendly, simplified version of the golden ratio.</p>
        <h3>Golden ratio</h3>
        <p>The golden ratio splits a length so the smaller part relates to the larger as the larger relates to the whole — a ratio of about <strong>1 : 1.618</strong> (Phi). It appears in shells, flower heads and ancient architecture and has been considered especially harmonious since the Renaissance. From it comes the <strong>golden spiral</strong>, along which you can lead a subject.</p>
        <h3>More tools</h3>
        <ul>
          <li><strong>Leading lines:</strong> paths and gaze directions draw the eye into the image.</li>
          <li><strong>Balance:</strong> one large element can be balanced by several small ones (symmetric or asymmetric).</li>
          <li><strong>Negative space:</strong> deliberate emptiness gives the main subject room and meaning.</li>
        </ul>
      `,
      didYouKnow: 'The golden ratio (≈1.618) is often denoted by the Greek letter Phi (φ).',
    },
    configs: [],
    example: [
      {
        caption: 'Drittelregel: Das Motiv sitzt auf einem Schnittpunkt, nicht in der Mitte.',
        html: `
          <div style="position:relative;width:100%;max-width:340px;aspect-ratio:3/2;background:linear-gradient(135deg,#334155,#0f172a);border-radius:8px;overflow:hidden">
            <div style="position:absolute;left:33.33%;top:0;bottom:0;width:1px;background:rgba(255,255,255,.4)"></div>
            <div style="position:absolute;left:66.66%;top:0;bottom:0;width:1px;background:rgba(255,255,255,.4)"></div>
            <div style="position:absolute;top:33.33%;left:0;right:0;height:1px;background:rgba(255,255,255,.4)"></div>
            <div style="position:absolute;top:66.66%;left:0;right:0;height:1px;background:rgba(255,255,255,.4)"></div>
            <div style="position:absolute;left:66.66%;top:33.33%;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;background:#f59e0b;box-shadow:0 0 0 6px rgba(245,158,11,.3)"></div>
          </div>`,
      },
      {
        caption: 'Goldene Spirale: verschachtelte Quadrate im Verhältnis 1:1,618.',
        html: `
          <svg width="220" height="136" viewBox="0 0 220 136" style="max-width:100%">
            <rect x="0.5" y="0.5" width="219" height="135" fill="none" stroke="#64748b" stroke-width="1"></rect>
            <rect x="84.5" y="0.5" width="135" height="135" fill="none" stroke="#64748b" stroke-width="1"></rect>
            <rect x="84.5" y="0.5" width="84" height="84" fill="none" stroke="#64748b" stroke-width="1"></rect>
            <rect x="84.5" y="84.5" width="51" height="51" fill="none" stroke="#64748b" stroke-width="1"></rect>
            <path d="M84.5 0.5 A84 84 0 0 0 0.5 84.5 M219.5 135.5 A135 135 0 0 0 84.5 0.5 M84.5 135.5 A51 51 0 0 1 135.5 84.5" fill="none" stroke="#f59e0b" stroke-width="2.5"></path>
          </svg>`,
      },
    ],
  },
];
