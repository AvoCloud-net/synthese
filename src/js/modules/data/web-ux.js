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
        <h3>Was heißt „responsive"?</h3>
        <p>Responsive Design bedeutet: <em>ein</em> Layout, das sich flüssig an jede Bildschirmgröße anpasst — vom 320-px-Handy bis zum breiten Desktop. Statt für jede Gerätegröße eine eigene Seite zu bauen, reagiert dasselbe HTML flexibel auf den verfügbaren Platz. Das Gegenteil ist ein „fixes" Layout mit fester Pixelbreite, das auf dem Handy nur noch zum Zoomen taugt.</p>
        <h3>Mobile First</h3>
        <p>Bewährt hat sich, <strong>zuerst fürs kleine Display</strong> zu gestalten und dann für größere zu erweitern. Der Zwang zur kleinen Fläche schärft den Blick fürs Wesentliche, und die Seite lädt auf dem Handy schlank. Das Erweitern nach oben ist einfacher als das Zusammenquetschen nach unten.</p>
        <h3>Die drei Werkzeuge</h3>
        <ul>
          <li><strong>Flexible Einheiten:</strong> %, <code>rem</code>, <code>fr</code>, <code>vw</code> statt fester Pixel — Inhalte wachsen und schrumpfen mit.</li>
          <li><strong>Media Queries:</strong> <code>@media (min-width: …)</code> ändert das Layout ab definierten <em>Breakpoints</em> (typisch ~600/900/1200 px).</li>
          <li><strong>Flexbox &amp; Grid:</strong> ordnen Inhalte automatisch um, z. B. drei Spalten am Desktop, eine am Handy.</li>
        </ul>
        <h3>Testen</h3>
        <p>Immer auf echten Geräten <em>und</em> in den Browser-DevTools prüfen: Stimmt die Reihenfolge? Sind Touch-Ziele groß genug (mind. ~44&nbsp;px)? Bleibt alles ab 320&nbsp;px Breite lesbar und ohne horizontales Scrollen? Nicht vergessen: <code>&lt;meta name="viewport"&gt;</code> im HTML, sonst zoomt das Handy die Desktop-Ansicht nur herunter.</p>
      `,
      didYouKnow: 'Der Begriff „Responsive Web Design" wurde 2010 von Ethan Marcotte geprägt.',
    },
    en: {
      title: 'Responsive Design',
      summary: 'One layout for every screen — from phone to desktop, flexible instead of fixed.',
      content: `
        <h3>What does "responsive" mean?</h3>
        <p>Responsive design means <em>one</em> layout that adapts fluidly to any screen size — from a 320px phone to a wide desktop. Instead of building a separate page per device, the same HTML flexibly reacts to the available space. The opposite is a "fixed" layout with a set pixel width that's only good for zooming on a phone.</p>
        <h3>Mobile first</h3>
        <p>It's proven to <strong>design for the small screen first</strong> and then expand for larger ones. The constraint of a small area sharpens focus on the essentials, and the page loads lean on mobile. Scaling up is easier than squeezing down.</p>
        <h3>The three tools</h3>
        <ul>
          <li><strong>Flexible units:</strong> %, <code>rem</code>, <code>fr</code>, <code>vw</code> instead of fixed pixels — content grows and shrinks with the screen.</li>
          <li><strong>Media queries:</strong> <code>@media (min-width: …)</code> changes the layout at defined <em>breakpoints</em> (typically ~600/900/1200px).</li>
          <li><strong>Flexbox &amp; Grid:</strong> rearrange content automatically, e.g. three columns on desktop, one on mobile.</li>
        </ul>
        <h3>Testing</h3>
        <p>Always check on real devices <em>and</em> in browser DevTools: is the order right? Are touch targets big enough (at least ~44px)? Does everything stay readable from 320px with no horizontal scrolling? Don't forget the <code>&lt;meta name="viewport"&gt;</code> tag, or the phone just shrinks the desktop view.</p>
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
    example: {
      caption:
        'Derselbe Inhalt, drei Bildschirmgrößen: aus einer Spalte (Handy) werden mehrere (Desktop).',
      html: `
        <div style="display:flex;gap:16px;justify-content:center;align-items:flex-end;flex-wrap:wrap">
          <div style="width:42px;height:66px;border:2px solid #64748b;border-radius:6px;display:flex;flex-direction:column;gap:3px;padding:4px"><div style="height:7px;background:#6366f1;border-radius:2px"></div><div style="flex:1;background:#cbd5e1;border-radius:2px"></div></div>
          <div style="width:74px;height:58px;border:2px solid #64748b;border-radius:6px;display:flex;flex-direction:column;gap:3px;padding:4px"><div style="height:7px;background:#6366f1;border-radius:2px"></div><div style="flex:1;background:#cbd5e1;border-radius:2px"></div></div>
          <div style="width:112px;height:72px;border:2px solid #64748b;border-radius:6px;display:flex;flex-direction:column;gap:3px;padding:4px"><div style="height:8px;background:#6366f1;border-radius:2px"></div><div style="flex:1;display:flex;gap:3px"><div style="flex:1;background:#cbd5e1;border-radius:2px"></div><div style="flex:1;background:#cbd5e1;border-radius:2px"></div><div style="flex:1;background:#cbd5e1;border-radius:2px"></div></div></div>
        </div>`,
    },
    // Interaktiv: auto-fit + minmax lässt die Karten je nach Breite umbrechen.
    sandbox: {
      html: `<div class="grid">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`,
      css: `.grid {
  display: grid;
  /* minmax steuert, ab wann umgebrochen wird */
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 10px;
}
.grid div {
  background: #6366f1;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-family: sans-serif;
}`,
      js: ``,
    },
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
        <p><strong>UI</strong> (User Interface) ist die sichtbare, anfassbare Oberfläche: Buttons, Farben, Typografie, Layout. <strong>UX</strong> (User Experience) ist das gesamte Erlebnis drumherum: Wie leicht, schnell und angenehm erreicht die Person ihr Ziel? Eine hübsche UI mit schlechter UX ist wie eine schöne Tür, die klemmt. Merksatz: <em>UI ist, wie es aussieht — UX ist, wie es sich anfühlt.</em></p>
        <h3>Grundprinzipien guter UX</h3>
        <ul>
          <li><strong>Konsistenz:</strong> Gleiche Dinge sehen gleich aus und verhalten sich gleich — Nutzer lernen die Oberfläche einmal, nicht immer wieder neu.</li>
          <li><strong>Feedback:</strong> Jede Aktion bekommt eine sichtbare Reaktion (Button drückt sich, Ladebalken, Erfolgsmeldung). Ohne Feedback fühlt sich alles „kaputt" an.</li>
          <li><strong>Klarheit &amp; Hierarchie:</strong> Das Wichtigste zuerst, Ablenkung raus. Eine klare primäre Aktion pro Ansicht.</li>
          <li><strong>Fehlertoleranz:</strong> Fehler verhindern, wo möglich; wo nicht, verständlich erklären und einen Rückgängig-Weg bieten.</li>
          <li><strong>Erkennen statt Erinnern:</strong> Optionen sichtbar machen, statt zu verlangen, dass man sie auswendig kennt.</li>
        </ul>
        <h3>Zustände nicht vergessen</h3>
        <p>Ein interaktives Element ist nie nur „da". Es hat viele <strong>Zustände</strong>: normal, Hover, Fokus, aktiv/gedrückt, deaktiviert, ladend, Fehler, leer. Wer sie alle gestaltet, wirkt professionell; wer sie vergisst, produziert Verwirrung (z. B. ein Button, bei dem man nicht merkt, dass er geklickt wurde).</p>
      `,
      didYouKnow:
        'Jakob Nielsens 10 Usability-Heuristiken von 1994 sind bis heute Standard-Checkliste im UX-Design.',
    },
    en: {
      title: 'UI/UX Basics',
      summary: 'UI is how it looks — UX is how it feels. Both decide whether a product is good.',
      content: `
        <h3>UI vs. UX</h3>
        <p><strong>UI</strong> (user interface) is the visible, tangible surface: buttons, colors, typography, layout. <strong>UX</strong> (user experience) is the whole journey around it: how easily, quickly and pleasantly does the person reach their goal? A pretty UI with poor UX is like a beautiful door that jams. Remember: <em>UI is how it looks — UX is how it feels.</em></p>
        <h3>Core principles of good UX</h3>
        <ul>
          <li><strong>Consistency:</strong> same things look and behave the same — users learn the interface once, not over and over.</li>
          <li><strong>Feedback:</strong> every action gets a visible response (button presses, loading bar, success message). Without feedback everything feels "broken".</li>
          <li><strong>Clarity &amp; hierarchy:</strong> most important first, remove distraction. One clear primary action per view.</li>
          <li><strong>Error tolerance:</strong> prevent errors where possible; where not, explain them clearly and offer a way to undo.</li>
          <li><strong>Recognition over recall:</strong> make options visible instead of requiring people to memorize them.</li>
        </ul>
        <h3>Don't forget states</h3>
        <p>An interactive element is never just "there". It has many <strong>states</strong>: normal, hover, focus, active/pressed, disabled, loading, error, empty. Designing all of them looks professional; forgetting them causes confusion (e.g. a button where you can't tell it was clicked).</p>
      `,
      didYouKnow:
        "Jakob Nielsen's 10 usability heuristics from 1994 are still a standard checklist in UX design.",
    },
    configs: [],
    example: {
      caption: 'Ein Button, vier Zustände: jeder muss klar erkennbar gestaltet sein.',
      html: `
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;font-family:var(--font-sans,sans-serif)">
          <span style="padding:9px 16px;border-radius:8px;background:#6366f1;color:#fff;font-weight:600;font-size:.85rem">Default</span>
          <span style="padding:9px 16px;border-radius:8px;background:#4f46e5;color:#fff;font-weight:600;font-size:.85rem">Hover</span>
          <span style="padding:9px 16px;border-radius:8px;background:#4338ca;color:#fff;font-weight:600;font-size:.85rem;transform:translateY(1px);display:inline-block">Active</span>
          <span style="padding:9px 16px;border-radius:8px;background:#c7c9d1;color:#fff;font-weight:600;font-size:.85rem;opacity:.7">Disabled</span>
        </div>`,
    },
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
        <h3>Warum Barrierefreiheit?</h3>
        <p>Barrierefreiheit (englisch <em>accessibility</em>, kurz „a11y" — a + 11 Buchstaben + y) macht Inhalte für <strong>alle</strong> nutzbar, auch für Menschen mit Seh-, Hör-, Motorik- oder kognitiven Einschränkungen. Sie hilft aber weit mehr Leuten: bei greller Sonne, mit gebrochenem Arm, in lauter Umgebung oder mit langsamem Internet. Barrierefrei gebaute Seiten sind fast immer auch besser bedienbar und besser für SEO.</p>
        <h3>Die vier Säulen (POUR)</h3>
        <p>Die WCAG-Richtlinien fassen alles unter vier Prinzipien: Inhalte müssen <strong>wahrnehmbar</strong>, <strong>bedienbar</strong>, <strong>verständlich</strong> und <strong>robust</strong> sein.</p>
        <h3>Die wichtigsten Hebel in der Praxis</h3>
        <ul>
          <li><strong>Kontrast:</strong> mind. 4,5:1 für normalen Text (WCAG AA), Infos nie nur über Farbe.</li>
          <li><strong>Tastatur:</strong> alles ohne Maus bedienbar, mit klar <em>sichtbarem</em> Fokus-Ring und sinnvoller Reihenfolge.</li>
          <li><strong>Semantisches HTML:</strong> echte <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, Überschriften-Hierarchie und <strong>Alt-Texte</strong> für Bilder — Screenreader lesen daraus die Struktur.</li>
          <li><strong>Formulare:</strong> jedes Feld mit einem verknüpften <code>&lt;label&gt;</code>.</li>
          <li><strong>ARIA:</strong> nur ergänzend, wo natives HTML nicht reicht — „kein ARIA ist besser als falsches ARIA".</li>
        </ul>
        <h3>Testen</h3>
        <p>Einmal komplett <strong>nur mit der Tastatur</strong> (Tab/Enter) durch die Seite, einen Screenreader ausprobieren, einen Kontrast-Checker nutzen und automatische Tools wie Lighthouse oder axe laufen lassen. Automatik findet aber nur einen Teil — der Handtest bleibt wichtig.</p>
      `,
      didYouKnow:
        'In der EU verpflichtet der European Accessibility Act ab Juni 2025 viele digitale Produkte zur Barrierefreiheit.',
    },
    en: {
      title: 'Accessibility (A11y)',
      summary: 'Websites for everyone — enough contrast, keyboard use and semantic HTML.',
      content: `
        <h3>Why accessibility?</h3>
        <p>Accessibility (short "a11y" — a + 11 letters + y) makes content usable for <strong>everyone</strong>, including people with visual, hearing, motor or cognitive impairments. But it helps far more people: in bright sun, with a broken arm, in a noisy place or on a slow connection. Accessible sites are almost always more usable overall and better for SEO too.</p>
        <h3>The four pillars (POUR)</h3>
        <p>The WCAG guidelines group everything under four principles: content must be <strong>perceivable</strong>, <strong>operable</strong>, <strong>understandable</strong> and <strong>robust</strong>.</p>
        <h3>The key levers in practice</h3>
        <ul>
          <li><strong>Contrast:</strong> at least 4.5:1 for normal text (WCAG AA), never convey info by color alone.</li>
          <li><strong>Keyboard:</strong> everything operable without a mouse, with a clearly <em>visible</em> focus ring and a sensible order.</li>
          <li><strong>Semantic HTML:</strong> real <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, a heading hierarchy and <strong>alt text</strong> for images — screen readers derive structure from it.</li>
          <li><strong>Forms:</strong> every field with an associated <code>&lt;label&gt;</code>.</li>
          <li><strong>ARIA:</strong> only to supplement where native HTML falls short — "no ARIA is better than wrong ARIA".</li>
        </ul>
        <h3>Testing</h3>
        <p>Go through the whole page <strong>using only the keyboard</strong> (Tab/Enter) once, try a screen reader, use a contrast checker and run automated tools like Lighthouse or axe. Automation only catches part of it, though — the hands-on test remains essential.</p>
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
    example: {
      caption: 'Sichtbarer Fokus-Ring (Tastatur) und Zusatz-Signal neben der Farbe (Icon + Text).',
      html: `
        <div style="display:flex;gap:24px;justify-content:center;align-items:center;flex-wrap:wrap;font-family:var(--font-sans,sans-serif)">
          <span style="padding:10px 18px;border-radius:8px;background:#6366f1;color:#fff;font-weight:600;font-size:.85rem;outline:3px solid #f59e0b;outline-offset:3px;display:inline-block">Fokus sichtbar</span>
          <span style="display:inline-flex;gap:8px;align-items:center;font-size:.85rem"><span style="width:16px;height:16px;border-radius:50%;background:#22c55e;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:.7rem">✓</span> Icon + Text</span>
        </div>`,
    },
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
        <h3>Zwei Systeme, eine Aufgabe</h3>
        <p>Flexbox und Grid sind die zwei modernen CSS-Layout-Systeme. Früher zweckentfremdete man Tabellen oder <code>float</code>-Hacks; heute lösen diese beiden fast jedes Layout sauber. Die Faustregel zur Wahl: <strong>Eine Richtung → Flexbox, zwei Richtungen → Grid.</strong></p>
        <h3>Flexbox — eine Achse</h3>
        <p>Flexbox (<code>display: flex</code>) verteilt Elemente entlang <em>einer</em> Achse — als Reihe oder Spalte. Ideal für Navigationsleisten, Button-Gruppen, eine Zeile Karten oder das Zentrieren eines Elements. Die Größen richten sich flexibel nach dem Inhalt (<code>flex-grow/shrink</code>). Man denkt „vom Inhalt her".</p>
        <h3>Grid — zwei Achsen</h3>
        <p>CSS Grid (<code>display: grid</code>) spannt ein echtes Gitter aus Zeilen <strong>und</strong> Spalten auf. Ideal für Seitenlayouts, Galerien und Dashboards, bei denen Dinge in beide Richtungen ausgerichtet sein müssen. Man denkt „vom Layout her" und platziert Inhalte in die Zellen.</p>
        <h3>Kombinieren</h3>
        <p>In der Praxis nutzt man beides zusammen: <strong>Grid</strong> für das grobe Seitenraster, <strong>Flexbox</strong> für die Feinverteilung <em>innerhalb</em> einer Komponente (z. B. Icon + Text in einem Button). Diese Kombination ist extrem mächtig und deckt praktisch alle Fälle ab.</p>
      `,
      didYouKnow:
        'CSS Grid und Flexbox lösen Layout-Probleme, für die früher Tabellen oder float-Hacks missbraucht wurden.',
    },
    en: {
      title: 'CSS Grid & Flexbox',
      summary: 'The two modern layout systems: Grid for two dimensions, Flexbox for one axis.',
      content: `
        <h3>Two systems, one job</h3>
        <p>Flexbox and Grid are the two modern CSS layout systems. People once abused tables or <code>float</code> hacks; today these two solve almost any layout cleanly. The rule of thumb: <strong>one direction → Flexbox, two directions → Grid.</strong></p>
        <h3>Flexbox — one axis</h3>
        <p>Flexbox (<code>display: flex</code>) distributes elements along <em>one</em> axis — as a row or column. Ideal for nav bars, button groups, a row of cards or centering an element. Sizes flex to the content (<code>flex-grow/shrink</code>). You think "from the content".</p>
        <h3>Grid — two axes</h3>
        <p>CSS Grid (<code>display: grid</code>) spans a real grid of rows <strong>and</strong> columns. Ideal for page layouts, galleries and dashboards where things must align in both directions. You think "from the layout" and place content into cells.</p>
        <h3>Combine them</h3>
        <p>In practice you use both together: <strong>Grid</strong> for the coarse page structure, <strong>Flexbox</strong> for fine distribution <em>inside</em> a component (e.g. icon + text in a button). This combination is extremely powerful and covers virtually every case.</p>
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
    example: {
      caption: 'Flexbox verteilt entlang einer Achse, Grid ordnet in Zeilen und Spalten.',
      html: `
        <div style="display:flex;gap:28px;justify-content:center;flex-wrap:wrap">
          <div style="text-align:center">
            <div style="display:flex;gap:6px;width:132px;height:60px">
              <div style="flex:2;background:#6366f1;border-radius:4px"></div>
              <div style="flex:1;background:#818cf8;border-radius:4px"></div>
              <div style="flex:1;background:#a5b4fc;border-radius:4px"></div>
            </div>
            <div style="opacity:.6;font-size:.8rem;margin-top:6px">Flexbox</div>
          </div>
          <div style="text-align:center">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:1fr;gap:6px;width:132px;height:60px">
              <div style="background:#22c55e;border-radius:4px"></div><div style="background:#4ade80;border-radius:4px"></div><div style="background:#22c55e;border-radius:4px"></div>
              <div style="background:#4ade80;border-radius:4px"></div><div style="background:#22c55e;border-radius:4px"></div><div style="background:#4ade80;border-radius:4px"></div>
            </div>
            <div style="opacity:.6;font-size:.8rem;margin-top:6px">Grid</div>
          </div>
        </div>`,
    },
    // Interaktiv: mit justify-content / align-items an der Flexbox-Verteilung drehen.
    sandbox: {
      html: `<div class="flex">
  <div>A</div><div>B</div><div>C</div>
</div>`,
      css: `.flex {
  display: flex;
  /* Diese zwei Zeilen ausprobieren: */
  justify-content: space-between; /* center, flex-start, space-around ... */
  align-items: center;            /* stretch, flex-start, flex-end ... */

  gap: 8px;
  height: 140px;
  padding: 10px;
  background: #eef2ff;
  border-radius: 10px;
}
.flex div {
  background: #6366f1;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-family: sans-serif;
}`,
      js: ``,
    },
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
        <p>Zwei Begriffe, die oft verwechselt werden: <strong>i18n</strong> (Internationalisierung) ist die <em>technische Vorbereitung</em>, damit eine Anwendung überhaupt mehrere Sprachen und Regionen unterstützen kann — Texte auslagern, Datums-/Zahlenformate flexibel machen, Platz für längere Wörter lassen. <strong>l10n</strong> (Lokalisierung) ist der <em>Inhalt</em>: die konkrete Anpassung an eine Region — Übersetzungen, lokale Formate, Währung, Bilder. Kurz: i18n baut das Regal, l10n stellt die Bücher rein.</p>
        <h3>Keys statt fester Texte</h3>
        <p>Der wichtigste Grundsatz: Sichtbarer Text steht <strong>nie</strong> fest im Code, sondern wird über einen <strong>Schlüssel (Key)</strong> aus Wörterbuch-Dateien geholt (<code>de.js</code>, <code>en.js</code>). Im Code steht z. B. <code>t('nav.login')</code>, und je nach Sprache liefert das „Anmelden" oder „Sign in". Wichtig: Alle Sprachen brauchen <strong>dieselben Keys</strong>, sonst fehlen Texte oder es erscheint der nackte Schlüssel.</p>
        <h3>Mehr als nur Wörter</h3>
        <ul>
          <li><strong>RTL:</strong> Arabisch und Hebräisch laufen rechts-nach-links — das ganze Layout muss gespiegelt werden (<code>dir="rtl"</code>).</li>
          <li><strong>Formate:</strong> Datum (<code>06.07.2026</code> vs. <code>7/6/2026</code>), Uhrzeit, Währung und Dezimaltrennzeichen sind je Region verschieden (Intl-API nutzen).</li>
          <li><strong>Textlänge:</strong> Deutsch ist oft ~30 % länger als Englisch — Buttons und Menüs dürfen nicht bei jeder Übersetzung platzen.</li>
          <li><strong>Pluralformen &amp; Anrede:</strong> Sprachen zählen und siezen/duzen unterschiedlich.</li>
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
        <p>Two terms that are often confused: <strong>i18n</strong> (internationalization) is the <em>technical preparation</em> so an app can support multiple languages and regions at all — externalize text, make date/number formats flexible, leave room for longer words. <strong>l10n</strong> (localization) is the <em>content</em>: the concrete adaptation to a region — translations, local formats, currency, images. In short: i18n builds the shelf, l10n puts the books on it.</p>
        <h3>Keys instead of hard-coded text</h3>
        <p>The key principle: visible text is <strong>never</strong> hard-coded but fetched via a <strong>key</strong> from dictionary files (<code>de.js</code>, <code>en.js</code>). The code says e.g. <code>t('nav.login')</code>, and depending on the language it returns "Anmelden" or "Sign in". Important: every language needs the <strong>same keys</strong>, otherwise text goes missing or the raw key shows up.</p>
        <h3>More than just words</h3>
        <ul>
          <li><strong>RTL:</strong> Arabic and Hebrew read right-to-left — the whole layout must mirror (<code>dir="rtl"</code>).</li>
          <li><strong>Formats:</strong> date (<code>06.07.2026</code> vs. <code>7/6/2026</code>), time, currency and decimal separators differ by region (use the Intl API).</li>
          <li><strong>Text length:</strong> German is often ~30% longer than English — buttons and menus must not burst on translation.</li>
          <li><strong>Plurals &amp; address:</strong> languages count and address people differently.</li>
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
    example: {
      caption: 'Ein Key (nav.login), zwei Sprachen: dasselbe UI zeigt „Anmelden" bzw. „Sign in".',
      html: `
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;font-family:var(--font-sans,sans-serif)">
          <div style="width:140px;border:1px solid rgba(128,128,128,.35);border-radius:10px;padding:12px;text-align:left">
            <div style="font-size:.75rem;opacity:.6;margin-bottom:6px">🇩🇪 DE</div>
            <div style="padding:7px 12px;border-radius:7px;background:#6366f1;color:#fff;font-weight:600;font-size:.85rem;text-align:center">Anmelden</div>
          </div>
          <div style="width:140px;border:1px solid rgba(128,128,128,.35);border-radius:10px;padding:12px;text-align:left">
            <div style="font-size:.75rem;opacity:.6;margin-bottom:6px">🇬🇧 EN</div>
            <div style="padding:7px 12px;border-radius:7px;background:#6366f1;color:#fff;font-weight:600;font-size:.85rem;text-align:center">Sign in</div>
          </div>
        </div>`,
    },
  },
];
