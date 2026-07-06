/**
 * Topics Click Handler — Minimal Modal
 * Shows "Coming Soon" with clear task description for challenge participants
 */

const TOPIC_CONTENT = {
  'RGB vs CMYK': {
    category: 'Grundlagen',
    content: `
      <h2>RGB vs CMYK — Das Fundament der Farbe</h2>
      <p><strong>RGB (Red, Green, Blue)</strong> ist das additive Farbmodell für Displays. Je mehr Licht du hinzufügst, desto heller wird das Ergebnis.</p>
      <p><strong>CMYK (Cyan, Magenta, Yellow, Key)</strong> ist das subtraktive Modell für Druck. Je mehr Farbe aufgetragen wird, desto dunkler das Ergebnis.</p>
      <h3>Praktischer Tipp</h3>
      <p>Designe immer im RGB für Digital und konvertiere erst am Ende für Druck. Nicht alle RGB-Farben sind im CMYK-Raum darstellbar!</p>
    `,
  },
  'Codec Basics: Lossy vs Lossless': {
    category: 'Technik',
    content: `
      <h2>Codec Basics — Kompression verstehen</h2>
      <p><strong>Lossy (verlustbehaftet):</strong> JPEG, MP3, H.264 — entfernt "unwichtige" Informationen. Kleinere Dateien, aber Qualitätsverlust.</p>
      <p><strong>Lossless (verlustfrei):</strong> PNG, FLAC, ALAC — behält alle Daten. Größere Dateien, aber perfekte Qualität.</p>
      <h3>Wann was?</h3>
      <p>Für Web: Lossy (schneller Ladevorgang). Für Archivierung: Lossless (Zukunftssicherheit).</p>
    `,
  },
  'Responsive Design Principles': {
    category: 'Design',
    content: `
      <h2>Responsive Design — Ein Design, alle Geräte</h2>
      <p>Mobile-First bedeutet: Designe für das kleinste Display und skaliere nach oben. Nicht umgekehrt!</p>
      <h3>Core Techniques</h3>
      <ul>
        <li>Fluid Grids (statt feste Pixel)</li>
        <li>Flexible Images (max-width: 100%)</li>
        <li>Media Queries (Breakpoints bei 640px, 768px, 1024px)</li>
      </ul>
    `,
  },
  'Prepress & PDF/X Standards': {
    category: 'Technik',
    content: `
      <h2>Prepress — Druckvorstufe meistern</h2>
      <p><strong>PDF/X-1a:</strong> Alle Schriften eingebettet, CMYK only. Der sicherste Standard.</p>
      <p><strong>PDF/X-4:</strong> Unterstützt Transparenzen und ICC-Profile. Flexibler, aber komplexer.</p>
      <h3>Wichtig: Beschnitt (Bleed)</h3>
      <p>Druckelemente, die bis zum Papierrand gehen, müssen 3mm über den Schnittrand hinausgehen!</p>
    `,
  },
  'Typography Hierarchy': {
    category: 'Design',
    content: `
      <h2>Typografie-Hierarchie — Lesen leicht gemacht</h2>
      <p>Die Hierarchie leitet das Auge des Lesers. Drei Ebenen sind essenziell:</p>
      <ul>
        <li><strong>Heading:</strong> Große Schrift, maximal 2–3 Schriftarten pro Projekt</li>
        <li><strong>Body:</strong> Lesbare Größe (16–18px), angemessener Zeilenabstand (1.5–1.7)</li>
        <li><strong>Caption/Meta:</strong> Klein, dezent, aber lesbar</li>
      </ul>
    `,
  },
  'Color Theory for Web': {
    category: 'Farbe & Typografie',
    content: `
      <h2>Color Theory — Farben, die wirken</h2>
      <p>Das 60-30-10-Regel: 60% Dominanzfarbe, 30% Sekundärfarbe, 10% Akzent.</p>
      <h3>Accessible Paletten</h3>
      <p>WCAG 2.1 AAA erfordert ein Kontrastverhältnis von 7:1 für Normaltext. Teste mit dem WebAIM Contrast Checker!</p>
    `,
  },
  'CSS Grid & Flexbox': {
    category: 'Web & UX',
    content: `
      <h2>CSS Grid & Flexbox — moderne Layouts</h2>
      <p><strong>Flexbox</strong> verteilt Elemente entlang <em>einer</em> Achse — perfekt für Navigationen, Button-Gruppen, Karten in einer Reihe.</p>
      <p><strong>Grid</strong> arbeitet in <em>zwei</em> Achsen (Zeilen + Spalten) — perfekt für ganze Seitenraster, Galerien und Dashboards.</p>
      <h3>Faustregel</h3>
      <p>Grid fürs Grobraster der Seite, Flexbox für die Feinverteilung innerhalb der Komponenten. Zusammen extrem mächtig.</p>
    `,
  },
  'Web Accessibility (A11y)': {
    category: 'Web & UX',
    content: `
      <h2>Web Accessibility — Websites für alle</h2>
      <p>Barrierefreiheit macht Inhalte für Menschen mit Seh-, Hör- oder Motorik-Einschränkungen nutzbar — und verbessert die Bedienung für alle.</p>
      <h3>Die wichtigsten Hebel</h3>
      <ul>
        <li><strong>Kontrast:</strong> mind. 4,5:1 für Normaltext (WCAG AA).</li>
        <li><strong>Tastatur:</strong> alles ohne Maus bedienbar, sichtbarer Fokus.</li>
        <li><strong>Semantik:</strong> echte Buttons, Landmarks, Alt-Texte.</li>
      </ul>
    `,
  },
  'Multi Language & i18n': {
    category: 'Web & UX',
    content: `
      <h2>Multi Language & i18n — global denken</h2>
      <p><strong>i18n</strong> baut die Technik sprach-unabhängig, <strong>l10n</strong> füllt sie mit Übersetzungen und lokalen Formaten.</p>
      <h3>Kernideen</h3>
      <ul>
        <li>Text nie hart in den Code — immer über Keys aus Wörterbüchern.</li>
        <li>Alle Sprachen brauchen dieselben Keys, sonst fehlt Text.</li>
        <li>RTL (Arabisch/Hebräisch) spiegelt das Layout; Datum/Zahlen sind Locale-abhängig.</li>
      </ul>
    `,
  },
};

function openModal(title, html) {
  const modal = document.getElementById('topic-modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <h2 id="modal-title" style="font-size: var(--text-2xl); margin-bottom: var(--space-4); color: var(--text-primary);">${title}</h2>
    <div style="color: var(--text-secondary); line-height: var(--leading-relaxed);">
      ${html}
    </div>
    <div style="margin-top: var(--space-8); padding: var(--space-4); background: var(--bg-code); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
      <p style="margin: 0; font-size: var(--text-sm); color: var(--text-muted);">
        <i class="ph ph-lightbulb" style="color: var(--challenge-primary); margin-right: var(--space-2);"></i>
        <strong>Deine Aufgabe:</strong> Erweitere diesen Artikel mit Beispielen, Visuals und interaktiven Elementen. Nutze das PANTAM Prompting-Template für strukturierte Inhalte.
      </p>
    </div>
  `;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.challenge-modal__close').focus();
}

function closeModal() {
  const modal = document.getElementById('topic-modal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
}

function openComingSoon(title) {
  const modal = document.getElementById('topic-modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="text-align: center; padding: var(--space-8) 0;">
      <div style="font-size: var(--text-5xl); margin-bottom: var(--space-4);">🚧</div>
      <h2 id="modal-title" style="font-size: var(--text-2xl); margin-bottom: var(--space-4); color: var(--text-primary);">Coming Soon</h2>
      <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">Dieses Thema wird von deinem Team erstellt.</p>
      <div style="background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(6, 182, 212, 0.08)); padding: var(--space-6); border-radius: var(--radius-lg); border: 1px solid var(--border-color); text-align: left;">
        <h3 style="color: var(--text-primary); margin-bottom: var(--space-3);"><i class="ph ph-target" style="color: var(--challenge-primary); margin-right: var(--space-2);"></i>Deine Aufgabe</h3>
        <ol style="color: var(--text-secondary); padding-left: var(--space-6); line-height: var(--leading-relaxed);">
          <li>Recherchiere das Thema <strong>"${title}"</strong> gründlich</li>
          <li>Schreibe einen Artikel mit Summary, Haupttext und praktischen Beispielen</li>
          <li>Füge Visuals, Code-Snippets oder Diagramme hinzu</li>
          <li>Verlinke verwandte Themen im Kompendium</li>
        </ol>
        <p style="margin-top: var(--space-4); color: var(--text-muted); font-size: var(--text-sm);">
          <i class="ph ph-book-open" style="margin-right: var(--space-1);"></i>
          Tipp: Nutze das PLU Prompting-Template für strukturierte KI-gestützte Recherche.
        </p>
      </div>
    </div>
  `;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.challenge-modal__close').focus();
}

export function initTopicCards() {
  const grid = document.getElementById('topics-grid');
  const modal = document.getElementById('topic-modal');
  if (!grid || !modal) return;

  // Close modal handlers
  modal.querySelector('.challenge-modal__close')?.addEventListener('click', closeModal);
  modal.querySelector('.challenge-modal__backdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  // Card click handlers
  grid.querySelectorAll('.topic-card').forEach((card) => {
    const title = card.querySelector('.topic-card__title')?.textContent?.trim();
    const readMore = card.querySelector('.topic-card__read-more');

    if (readMore) {
      readMore.style.cursor = 'pointer';
      readMore.addEventListener('click', (e) => {
        e.stopPropagation();
        const topic = TOPIC_CONTENT[title];
        if (topic) {
          openModal(title, topic.content);
        } else {
          openComingSoon(title);
        }
      });
    }

    // Also make entire card clickable
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const topic = TOPIC_CONTENT[title];
      if (topic) {
        openModal(title, topic.content);
      } else {
        openComingSoon(title);
      }
    });
  });
}
