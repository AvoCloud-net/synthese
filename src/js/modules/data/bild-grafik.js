/**
 * SYNTHESE — Kategorie: BILD & GRAFIK
 * Owner: Content-Lead. Neues Thema = Objekt anhängen. Schema: DATA-SCHEMA.md §1.
 */

export default [
  {
    id: 'raster-vektor',
    category: 'bild-grafik',
    difficulty: 'easy',
    image: '',
    icon: 'ph-vector-two',
    tags: ['raster', 'vektor', 'pixel', 'svg', 'grafik'],
    related: ['aufloesung-dpi', 'bild-dateiformate', 'komposition'],
    de: {
      title: 'Raster vs. Vektor',
      summary:
        'Pixel oder Pfade? Der Unterschied entscheidet, ob ein Bild beim Skalieren scharf bleibt.',
      content: `
        <h3>Rastergrafik (Pixelgrafik)</h3>
        <p>Eine Rastergrafik besteht aus einem festen Gitter winziger Farbpunkte — den <strong>Pixeln</strong>. Jedes Pixel hat eine Position und eine Farbe. Fotos sind immer Raster, weil eine Kamera das Licht rasterförmig aufnimmt. Der Haken: Die Pixelzahl ist fest. Vergrößert man das Bild über seine native Größe hinaus, muss die Software Pixel „erfinden" (interpolieren) — das Bild wird unscharf oder „verpixelt".</p>
        <h3>Vektorgrafik</h3>
        <p>Eine Vektorgrafik speichert keine Pixel, sondern eine mathematische <strong>Beschreibung</strong> der Formen: Punkte, Linien, Kurven (Bézier) und Flächen samt Farben. Beim Anzeigen rechnet das Gerät die Formen frisch aus — in jeder Größe. Dadurch ist eine Vektorgrafik <strong>beliebig skalierbar ohne Qualitätsverlust</strong> und meist sehr klein in der Dateigröße. Ideal für Logos, Icons, Diagramme und Illustrationen. Nachteil: Für realistische Fotos ungeeignet.</p>
        <h3>Wann was?</h3>
        <p><strong>Raster</strong> (JPG, PNG, WebP) für Fotos und fotorealistische Bilder. <strong>Vektor</strong> (SVG, PDF, AI, EPS) für alles, was in mehreren Größen gestochen scharf sein muss — vom Favicon bis zum Plakat. Faustregel: „Hat es weiche Farbverläufe wie ein Foto? → Raster. Ist es eine klare Form/Grafik? → Vektor."</p>
      `,
      didYouKnow:
        'Ein Vektor-Logo lässt sich vom Visitenkarten-Format bis zur Hauswand vergrößern — dieselbe Datei bleibt gestochen scharf.',
    },
    en: {
      title: 'Raster vs. Vector',
      summary: 'Pixels or paths? The difference decides whether an image stays sharp when scaled.',
      content: `
        <h3>Raster (bitmap) graphics</h3>
        <p>A raster image is a fixed grid of tiny colored dots — <strong>pixels</strong>. Each pixel has a position and a color. Photos are always raster because a camera captures light in a grid. The catch: the pixel count is fixed. Enlarge the image beyond its native size and the software has to "invent" pixels (interpolation) — the image gets blurry or "pixelated".</p>
        <h3>Vector graphics</h3>
        <p>A vector image stores no pixels but a mathematical <strong>description</strong> of shapes: points, lines, curves (Bézier) and fills with colors. To display it, the device recalculates the shapes fresh — at any size. That makes a vector <strong>freely scalable without quality loss</strong> and usually tiny in file size. Ideal for logos, icons, charts and illustrations. Downside: unsuitable for realistic photos.</p>
        <h3>When to use which?</h3>
        <p><strong>Raster</strong> (JPG, PNG, WebP) for photos and photorealistic images. <strong>Vector</strong> (SVG, PDF, AI, EPS) for anything that must stay razor-sharp at many sizes — from favicon to poster. Rule of thumb: "Soft photo-like gradients? → raster. A clean shape/graphic? → vector."</p>
      `,
      didYouKnow:
        'A vector logo scales from business-card size to a building wall — the same file stays razor-sharp.',
    },
    configs: [
      {
        labelDe: 'Einfaches SVG-Icon',
        labelEn: 'Simple SVG icon',
        lang: 'svg',
        code: `<svg viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="10" fill="#ff5a3c" />
</svg>`,
      },
    ],
    example: {
      caption:
        'Dieselbe Diagonale: als Raster entsteht eine Pixel-Treppe, als Vektor eine glatte Kurve.',
      html: `
        <div style="display:flex;gap:32px;justify-content:center;flex-wrap:wrap">
          <div style="text-align:center">
            <svg width="96" height="96" viewBox="0 0 8 8" shape-rendering="crispEdges" style="border:1px solid rgba(128,128,128,.4);background:#fff">
              <rect x="0" y="6" width="2" height="2" fill="#334155"></rect><rect x="2" y="4" width="2" height="2" fill="#334155"></rect><rect x="4" y="2" width="2" height="2" fill="#334155"></rect><rect x="6" y="0" width="2" height="2" fill="#334155"></rect>
            </svg>
            <div style="opacity:.6;font-size:.8rem;margin-top:6px">Raster (Pixel)</div>
          </div>
          <div style="text-align:center">
            <svg width="96" height="96" viewBox="0 0 8 8" style="border:1px solid rgba(128,128,128,.4);background:#fff">
              <line x1="0" y1="8" x2="8" y2="0" stroke="#334155" stroke-width="1.1"></line>
            </svg>
            <div style="opacity:.6;font-size:.8rem;margin-top:6px">Vektor (Kurve)</div>
          </div>
        </div>`,
    },
  },
  {
    id: 'aufloesung-dpi',
    category: 'bild-grafik',
    difficulty: 'medium',
    image: '',
    icon: 'ph-ruler',
    tags: ['aufloesung', 'dpi', 'ppi', 'pixel', 'druck'],
    related: ['raster-vektor', 'bild-dateiformate', 'farbmodelle'],
    de: {
      title: 'Auflösung & DPI',
      summary: 'Wie viele Pixel braucht ein Bild? DPI entscheidet über Schärfe in Web und Druck.',
      content: `
        <h3>Pixel, PPI, DPI</h3>
        <p>Die <strong>Auflösung</strong> ist zunächst nur die Anzahl der Pixel, z. B. 1920×1080 (≈ 2 Megapixel). <strong>PPI</strong> (Pixel per Inch) beschreibt, wie <em>dicht</em> diese Pixel auf einem Bildschirm sitzen; <strong>DPI</strong> (Dots per Inch) ist das Gegenstück für den Druck (Farbpunkte pro Zoll). Wichtig: Dieselbe Pixelzahl kann winzig-scharf oder riesig-grob wirken — es kommt auf die Dichte an.</p>
        <h3>Web vs. Druck</h3>
        <p>Fürs <strong>Web</strong> zählt allein die Pixelzahl. Der berühmte Wert „72 DPI" ist dort ein <em>Mythos ohne Wirkung</em> — der Browser interessiert sich nur für Pixel, nicht für DPI. Für den <strong>Druck</strong> dagegen braucht man meist <strong>300 DPI bei Endgröße</strong>: Ein Bild, das 10 cm breit gedruckt wird, benötigt also rund 1180 Pixel Breite. Zu wenig → es wirkt unscharf oder pixelig.</p>
        <h3>Retina &amp; Skalierung</h3>
        <p>Moderne „Retina"-Displays haben doppelte Pixeldichte. Damit Bilder dort scharf sind, liefert man sie oft in doppelter Auflösung (2×). Grundregel: <strong>Runterskalieren</strong> (verkleinern) sieht praktisch immer gut aus, <strong>Hochskalieren</strong> kostet sichtbar Qualität, weil fehlende Pixel „erfunden" werden müssen. Deshalb lieber groß fotografieren/anlegen und bei Bedarf verkleinern.</p>
      `,
      didYouKnow:
        'Die „72 DPI fürs Web"-Regel stammt aus alten Mac-Bildschirmen — heute ist für Web nur die Pixelanzahl relevant.',
    },
    en: {
      title: 'Resolution & DPI',
      summary: 'How many pixels does an image need? DPI decides sharpness in web and print.',
      content: `
        <h3>Pixels, PPI, DPI</h3>
        <p>Resolution is first just the number of pixels, e.g. 1920×1080 (≈ 2 megapixels). <strong>PPI</strong> (pixels per inch) describes how <em>densely</em> those pixels sit on a screen; <strong>DPI</strong> (dots per inch) is the print counterpart (ink dots per inch). Important: the same pixel count can look tiny-and-sharp or huge-and-coarse — density is what matters.</p>
        <h3>Web vs. print</h3>
        <p>For the <strong>web</strong>, only the pixel count matters. The famous "72 DPI" value is a <em>myth with no effect</em> there — the browser cares only about pixels, not DPI. For <strong>print</strong> you usually need <strong>300 DPI at final size</strong>: an image printed 10 cm wide needs about 1180 pixels of width. Too few → it looks blurry or pixelated.</p>
        <h3>Retina &amp; scaling</h3>
        <p>Modern "Retina" displays have double pixel density. To stay sharp there, images are often supplied at double resolution (2×). Basic rule: <strong>scaling down</strong> practically always looks good, <strong>scaling up</strong> visibly costs quality because missing pixels have to be "invented". So shoot/create large and shrink when needed.</p>
      `,
      didYouKnow:
        'The "72 DPI for web" rule comes from old Mac screens — today only the pixel count matters for web.',
    },
    configs: [],
    example: {
      caption:
        'Gleiche Fläche, unterschiedliche Punktdichte: mehr Punkte = feineres, schärferes Bild.',
      html: `
        <div style="display:flex;gap:32px;justify-content:center;flex-wrap:wrap">
          <div style="text-align:center">
            <div style="width:96px;height:96px;background:radial-gradient(circle,#334155 34%,transparent 36%);background-size:24px 24px;border:1px solid rgba(128,128,128,.4);border-radius:6px;background-color:#fff"></div>
            <div style="opacity:.6;font-size:.8rem;margin-top:6px">niedrige DPI</div>
          </div>
          <div style="text-align:center">
            <div style="width:96px;height:96px;background:radial-gradient(circle,#334155 34%,transparent 36%);background-size:8px 8px;border:1px solid rgba(128,128,128,.4);border-radius:6px;background-color:#fff"></div>
            <div style="opacity:.6;font-size:.8rem;margin-top:6px">hohe DPI</div>
          </div>
        </div>`,
    },
  },
  {
    id: 'bild-dateiformate',
    category: 'bild-grafik',
    difficulty: 'easy',
    image: '',
    icon: 'ph-file-image',
    tags: ['jpg', 'png', 'svg', 'webp', 'format', 'transparenz'],
    related: ['raster-vektor', 'kompression-codecs', 'aufloesung-dpi'],
    de: {
      title: 'Bild-Dateiformate',
      summary:
        'JPG, PNG, SVG, WebP — welches Format wann? Transparenz, Größe und Qualität im Vergleich.',
      content: `
        <h3>Warum es viele Formate gibt</h3>
        <p>Jedes Format ist ein Kompromiss aus <strong>Qualität</strong>, <strong>Dateigröße</strong> und <strong>Funktionen</strong> (z. B. Transparenz oder Animation). Das „beste" Format hängt davon ab, was auf dem Bild ist und wo es hin soll.</p>
        <h3>Die Klassiker</h3>
        <ul>
          <li><strong>JPG/JPEG:</strong> verlustbehaftet, sehr kleine Fotos, aber <em>keine</em> Transparenz. Für Fotos mit weichen Farbverläufen ideal, für scharfe Kanten/Text schlecht (Artefakte).</li>
          <li><strong>PNG:</strong> verlustfrei, unterstützt <em>Transparenz</em> und scharfe Kanten. Größer als JPG. Perfekt für Grafiken, Screenshots, Logos mit Freistellung.</li>
          <li><strong>GIF:</strong> nur 256 Farben, unterstützt einfache Animationen. Heute meist durch Video/WebP ersetzt.</li>
          <li><strong>SVG:</strong> Vektor, winzig, beliebig skalierbar, per CSS gestaltbar — die erste Wahl für Logos und Icons.</li>
          <li><strong>WebP / AVIF:</strong> moderne Formate, die bei gleicher Qualität <em>deutlich kleiner</em> sind als JPG/PNG und Transparenz können. AVIF komprimiert am stärksten.</li>
        </ul>
        <h3>Faustregel</h3>
        <p>Foto → JPG oder WebP/AVIF. Grafik mit Transparenz → PNG oder WebP. Logo/Icon → SVG. Fürs Web nach Möglichkeit WebP/AVIF mit JPG/PNG als Fallback ausliefern (siehe Code-Beispiel).</p>
      `,
      didYouKnow: 'WebP spart oft 25–35 % Dateigröße gegenüber JPG bei vergleichbarer Qualität.',
    },
    en: {
      title: 'Image File Formats',
      summary: 'JPG, PNG, SVG, WebP — which format when? Transparency, size and quality compared.',
      content: `
        <h3>Why there are so many formats</h3>
        <p>Every format is a trade-off between <strong>quality</strong>, <strong>file size</strong> and <strong>features</strong> (e.g. transparency or animation). The "best" format depends on what's in the image and where it's going.</p>
        <h3>The classics</h3>
        <ul>
          <li><strong>JPG/JPEG:</strong> lossy, very small photos, but <em>no</em> transparency. Ideal for photos with soft gradients, poor for sharp edges/text (artifacts).</li>
          <li><strong>PNG:</strong> lossless, supports <em>transparency</em> and crisp edges. Larger than JPG. Perfect for graphics, screenshots, cut-out logos.</li>
          <li><strong>GIF:</strong> only 256 colors, supports simple animation. Today mostly replaced by video/WebP.</li>
          <li><strong>SVG:</strong> vector, tiny, freely scalable, stylable with CSS — the first choice for logos and icons.</li>
          <li><strong>WebP / AVIF:</strong> modern formats that are <em>much smaller</em> than JPG/PNG at the same quality and support transparency. AVIF compresses the most.</li>
        </ul>
        <h3>Rule of thumb</h3>
        <p>Photo → JPG or WebP/AVIF. Graphic with transparency → PNG or WebP. Logo/icon → SVG. For the web, serve WebP/AVIF with a JPG/PNG fallback where possible (see the code example).</p>
      `,
      didYouKnow: 'WebP often saves 25–35% in file size compared to JPG at similar quality.',
    },
    configs: [
      {
        labelDe: 'Responsives Bild mit WebP-Fallback',
        labelEn: 'Responsive image with WebP fallback',
        lang: 'html',
        code: `<picture>
  <source srcset="foto.webp" type="image/webp" />
  <img src="foto.jpg" alt="Beschreibung" loading="lazy" />
</picture>`,
      },
    ],
    example: [
      {
        caption: 'Gängige Formate im Web — jedes mit eigenem Stärken-Profil.',
        html: `
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <span style="padding:9px 15px;border-radius:8px;background:#ef4444;color:#fff;font-weight:700;font-size:.85rem">JPG</span>
            <span style="padding:9px 15px;border-radius:8px;background:#3b82f6;color:#fff;font-weight:700;font-size:.85rem">PNG</span>
            <span style="padding:9px 15px;border-radius:8px;background:#f59e0b;color:#fff;font-weight:700;font-size:.85rem">SVG</span>
            <span style="padding:9px 15px;border-radius:8px;background:#22c55e;color:#fff;font-weight:700;font-size:.85rem">WebP</span>
            <span style="padding:9px 15px;border-radius:8px;background:#8b5cf6;color:#fff;font-weight:700;font-size:.85rem">AVIF</span>
          </div>`,
      },
      {
        caption: 'Transparenz: PNG lässt den Hintergrund durch, JPG füllt ihn mit Farbe.',
        html: `
          <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap">
            <div style="text-align:center">
              <div style="width:80px;height:80px;border-radius:8px;background:conic-gradient(#e2e8f0 0 25%,#94a3b8 0 50%,#e2e8f0 0 75%,#94a3b8 0);background-size:20px 20px;display:flex;align-items:center;justify-content:center"><div style="width:46px;height:46px;border-radius:50%;background:#6366f1"></div></div>
              <div style="opacity:.6;font-size:.8rem;margin-top:6px">PNG (transparent)</div>
            </div>
            <div style="text-align:center">
              <div style="width:80px;height:80px;border-radius:8px;background:#fff;display:flex;align-items:center;justify-content:center"><div style="width:46px;height:46px;border-radius:50%;background:#6366f1"></div></div>
              <div style="opacity:.6;font-size:.8rem;margin-top:6px">JPG (weißer Grund)</div>
            </div>
          </div>`,
      },
    ],
  },
  {
    id: 'kompression-codecs',
    category: 'bild-grafik',
    difficulty: 'hard',
    image: '',
    icon: 'ph-file-zip',
    tags: ['kompression', 'codec', 'lossy', 'lossless', 'video', 'audio'],
    related: ['bild-dateiformate', 'aufloesung-dpi'],
    de: {
      title: 'Kompression & Codecs',
      summary:
        'Verlustbehaftet oder verlustfrei? Wie Codecs Bild, Video und Audio kleiner rechnen.',
      content: `
        <h3>Warum komprimieren?</h3>
        <p>Rohdaten sind riesig: Ein unkomprimiertes 4K-Video (60 Bilder/s) bräuchte rund 1,5 Gigabyte <em>pro Sekunde</em>. Kompression macht Dateien klein genug zum Speichern und Streamen. Es gibt zwei grundsätzliche Wege.</p>
        <h3>Verlustfrei vs. verlustbehaftet</h3>
        <ul>
          <li><strong>Verlustfrei</strong> (PNG, FLAC, ZIP): Die Originaldaten lassen sich exakt wiederherstellen. Sicher, aber die Ersparnis ist begrenzt. Nutzt Redundanz (z. B. „200× dasselbe Blau").</li>
          <li><strong>Verlustbehaftet</strong> (JPG, MP3, H.264): Wirft gezielt Informationen weg, die Auge oder Ohr kaum wahrnehmen. Spart enorm viel, aber jedes erneute Speichern verschlechtert die Qualität weiter (Generationsverlust).</li>
        </ul>
        <h3>Codecs &amp; Container</h3>
        <p>Ein <strong>Codec</strong> (Coder/Decoder) ist das Verfahren zum Kodieren und Dekodieren — z. B. H.264/H.265 oder AV1 (Video), AAC/MP3 (Audio). Der <strong>Container</strong> (MP4, MKV, WebM) ist nur die „Verpackung", die Video-, Audio- und Untertitelspuren zusammenhält. Deshalb kann eine .mp4-Datei ganz unterschiedliche Codecs enthalten.</p>
        <h3>Qualität vs. Größe</h3>
        <p>Mehr Kompression = kleinere Datei, aber sichtbare/hörbare <strong>Artefakte</strong> (Blockbildung, Farbverläufe mit Streifen, matschige Details). Die <strong>Bitrate</strong> (Datenmenge pro Sekunde) ist der zentrale Regler für diesen Kompromiss.</p>
      `,
      didYouKnow:
        'MP3 nutzt psychoakustische Modelle: Es entfernt Töne, die das menschliche Ohr ohnehin kaum wahrnimmt.',
    },
    en: {
      title: 'Compression & Codecs',
      summary: 'Lossy or lossless? How codecs shrink image, video and audio.',
      content: `
        <h3>Why compress?</h3>
        <p>Raw data is huge: uncompressed 4K video (60 frames/s) would need about 1.5 gigabytes <em>per second</em>. Compression makes files small enough to store and stream. There are two fundamental approaches.</p>
        <h3>Lossless vs. lossy</h3>
        <ul>
          <li><strong>Lossless</strong> (PNG, FLAC, ZIP): the original data can be restored exactly. Safe, but savings are limited. Exploits redundancy (e.g. "the same blue 200×").</li>
          <li><strong>Lossy</strong> (JPG, MP3, H.264): deliberately discards information the eye or ear barely notices. Saves a huge amount, but every re-save degrades quality further (generation loss).</li>
        </ul>
        <h3>Codecs &amp; containers</h3>
        <p>A <strong>codec</strong> (coder/decoder) is the method for encoding and decoding — e.g. H.264/H.265 or AV1 (video), AAC/MP3 (audio). The <strong>container</strong> (MP4, MKV, WebM) is just the "wrapper" holding video, audio and subtitle tracks together. That's why an .mp4 file can contain very different codecs.</p>
        <h3>Quality vs. size</h3>
        <p>More compression = smaller file, but visible/audible <strong>artifacts</strong> (blockiness, banded gradients, mushy detail). The <strong>bitrate</strong> (amount of data per second) is the key dial for this trade-off.</p>
      `,
      didYouKnow:
        'MP3 uses psychoacoustic models: it removes sounds the human ear can barely perceive anyway.',
    },
    configs: [],
    example: {
      caption:
        'Starke Kompression erzeugt „Banding": Der weiche Verlauf (links) zerfällt in Streifen (rechts).',
      html: `
        <div style="display:flex;gap:24px;justify-content:center;flex-wrap:wrap">
          <div style="text-align:center">
            <div style="width:110px;height:110px;border-radius:8px;background:linear-gradient(135deg,#6366f1,#ec4899)"></div>
            <div style="opacity:.6;font-size:.8rem;margin-top:6px">Original</div>
          </div>
          <div style="text-align:center">
            <div style="width:110px;height:110px;border-radius:8px;background:linear-gradient(135deg,#6366f1 0 20%,#9459cf 20% 40%,#c44dad 40% 60%,#dc479c 60% 80%,#ec4899 80% 100%)"></div>
            <div style="opacity:.6;font-size:.8rem;margin-top:6px">stark komprimiert</div>
          </div>
        </div>`,
    },
  },
  {
    id: 'prepress',
    category: 'bild-grafik',
    difficulty: 'medium',
    image: '',
    icon: 'ph-printer',
    tags: ['druck', 'pdf', 'prepress', 'cmyk', 'beschnitt'],
    related: ['bild-dateiformate', 'farbmodelle', 'aufloesung-dpi'],
    de: {
      title: 'Prepress & PDF/X-Standards',
      summary:
        'Druckvorstufe meistern: PDF/X-Compliance, Farbprofile und Beschnitt — damit gedruckt wird, was du siehst.',
      content: `
        <h3>Was ist Prepress?</h3>
        <p>Die <strong>Druckvorstufe</strong> (Prepress) ist der Schritt zwischen fertigem Design und laufender Druckmaschine. Hier wird geprüft und aufbereitet, damit am Ende wirklich das gedruckt wird, was am Bildschirm zu sehen war. Vier Dinge müssen stimmen: <strong>Farbraum</strong> (CMYK statt RGB), eingebettete <strong>Schriften</strong>, ausreichende <strong>Auflösung</strong> (300 DPI) und korrekter <strong>Beschnitt</strong>. Fehler hier sind teuer, weil sie oft erst nach dem Druck auffallen.</p>
        <h3>PDF/X — der sichere Standard</h3>
        <p>PDF/X ist eine Familie von Norm-PDFs speziell für den Druck. Sie verbietet, was Probleme macht (z. B. RGB oder fehlende Schriften), und garantiert so ein verlässliches Ergebnis.</p>
        <ul>
          <li><strong>PDF/X-1a:</strong> alle Schriften eingebettet, ausschließlich CMYK, keine Transparenzen — der sicherste, strengste Standard.</li>
          <li><strong>PDF/X-4:</strong> erlaubt Transparenzen und ICC-Farbprofile — flexibler und moderner, aber anspruchsvoller in der Handhabung.</li>
        </ul>
        <h3>Beschnitt (Bleed) &amp; Schnittmarken</h3>
        <p>Elemente, die bis an den Papierrand laufen, müssen <strong>3 mm über den Schnittrand hinaus</strong> angelegt werden (Bleed). Grund: Die Schneidemaschine arbeitet nie pixelgenau. Ohne diesen Überstand blitzen nach dem Schneiden weiße Blitzer auf. <strong>Schnittmarken</strong> zeigen der Maschine, wo geschnitten wird.</p>
      `,
      didYouKnow:
        'Ein „Rich Black" aus mehreren CMYK-Farben wirkt im Druck satter als reines K100 — aber zu viel Farbauftrag lässt das Papier durchweichen.',
    },
    en: {
      title: 'Prepress & PDF/X Standards',
      summary:
        'Master the print stage: PDF/X compliance, color profiles and bleed — so what you see is what gets printed.',
      content: `
        <h3>What is prepress?</h3>
        <p><strong>Prepress</strong> is the step between finished design and running press. Here the file is checked and prepared so that what appears on screen is actually what gets printed. Four things must be right: <strong>color space</strong> (CMYK, not RGB), embedded <strong>fonts</strong>, sufficient <strong>resolution</strong> (300 DPI) and correct <strong>bleed</strong>. Mistakes here are expensive because they often surface only after printing.</p>
        <h3>PDF/X — the safe standard</h3>
        <p>PDF/X is a family of standardized print PDFs. It forbids what causes trouble (e.g. RGB or missing fonts), guaranteeing a reliable result.</p>
        <ul>
          <li><strong>PDF/X-1a:</strong> all fonts embedded, CMYK only, no transparency — the safest, strictest standard.</li>
          <li><strong>PDF/X-4:</strong> allows transparency and ICC color profiles — more flexible and modern, but trickier to handle.</li>
        </ul>
        <h3>Bleed &amp; crop marks</h3>
        <p>Elements that run to the paper edge must extend <strong>3 mm past the trim line</strong> (bleed). Reason: the cutter is never pixel-perfect. Without this overhang, white slivers appear after cutting. <strong>Crop marks</strong> tell the machine where to cut.</p>
      `,
      didYouKnow:
        'A "rich black" mixed from several CMYK inks looks deeper in print than pure K100 — but too much ink coverage soaks the paper.',
    },
    configs: [
      {
        labelDe: 'Beschnitt & Schnittmarken (CSS @page)',
        labelEn: 'Bleed & crop marks (CSS @page)',
        lang: 'css',
        code: `@page {
  size: 210mm 297mm;   /* A4 */
  bleed: 3mm;
  marks: crop cross;
}`,
      },
    ],
    example: {
      caption:
        'Druckbogen mit CMYK-Kontrollbalken, Passermarke (rechts) und Schnittmarken an den Ecken.',
      html: `
        <div style="display:flex;justify-content:center;width:100%">
          <div style="position:relative;padding:20px">
            <div style="position:absolute;top:0;left:0;width:14px;height:14px;border-top:2px solid #888;border-left:2px solid #888"></div>
            <div style="position:absolute;top:0;right:0;width:14px;height:14px;border-top:2px solid #888;border-right:2px solid #888"></div>
            <div style="position:absolute;bottom:0;left:0;width:14px;height:14px;border-bottom:2px solid #888;border-left:2px solid #888"></div>
            <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;border-bottom:2px solid #888;border-right:2px solid #888"></div>
            <div style="background:#fff;padding:14px;border-radius:2px;display:flex;gap:7px;align-items:center">
              <span style="width:26px;height:46px;background:#00aeef"></span>
              <span style="width:26px;height:46px;background:#ec008c"></span>
              <span style="width:26px;height:46px;background:#fff200"></span>
              <span style="width:26px;height:46px;background:#000"></span>
              <span style="width:22px;height:22px;border-radius:50%;border:2px solid #000;margin-left:6px;background:conic-gradient(#000 0 25%,#fff 0 50%,#000 0 75%,#fff 0)"></span>
            </div>
          </div>
        </div>`,
    },
  },
  {
    id: 'bildoptimierung-web',
    category: 'bild-grafik',
    difficulty: 'medium',
    image: '',
    icon: 'ph-image-square',
    tags: ['web', 'optimierung', 'webp', 'avif', 'lazy-loading'],
    related: ['bild-dateiformate', 'kompression-codecs'],
    de: {
      title: 'Bildoptimierung fürs Web',
      summary: 'Optimierte Bilder machen Webseiten schneller und verbessern die Benutzererfahrung.',
      content: `
      <h3>Warum optimieren?</h3>
      <p>Bilder sind auf den meisten Websites der größte Datenposten. Unoptimierte Bilder verlängern die Ladezeit spürbar — und langsame Seiten kosten Besucher und Google-Ranking. Bildoptimierung heißt: die kleinstmögliche Datei bei gerade noch guter Qualität ausliefern.</p>
      <h3>Die wichtigsten Hebel</h3>
      <ul>
        <li><strong>Modernes Format:</strong> WebP oder AVIF statt JPG/PNG spart oft 30–70 % Größe.</li>
        <li><strong>Richtige Größe:</strong> Ein Bild nie größer ausliefern, als es angezeigt wird. Ein 300&nbsp;px breiter Thumbnail braucht keine 4000&nbsp;px.</li>
        <li><strong>Responsive Bilder:</strong> mit <code>srcset</code>/<code>sizes</code> je nach Bildschirm die passende Größe laden.</li>
        <li><strong>Lazy Loading:</strong> <code>loading="lazy"</code> lädt Bilder erst, wenn sie in den Sichtbereich scrollen.</li>
        <li><strong>Qualität justieren:</strong> JPG-Qualität 70–80 ist meist optisch nicht von 100 zu unterscheiden, aber viel kleiner.</li>
      </ul>
      <h3>Ziel &amp; Messung</h3>
      <p>Kleine Dateigröße bei hoher wahrgenommener Qualität. Wie stark Bilder die Ladezeit bremsen, zeigt die Kennzahl <strong>Largest Contentful Paint (LCP)</strong> — oft ist genau ein großes Bild der Übeltäter.</p>
    `,
      didYouKnow: 'Optimierte Bilder können die Dateigröße um mehr als 70 % reduzieren.',
    },
    en: {
      title: 'Image Optimization for the Web',
      summary: 'Optimized images make websites faster and improve user experience.',
      content: `
      <h3>Why optimize?</h3>
      <p>Images are the largest data item on most websites. Unoptimized images noticeably increase load time — and slow pages cost visitors and Google ranking. Image optimization means delivering the smallest possible file at just-good-enough quality.</p>
      <h3>The key levers</h3>
      <ul>
        <li><strong>Modern format:</strong> WebP or AVIF instead of JPG/PNG often saves 30–70% in size.</li>
        <li><strong>Right size:</strong> never serve an image larger than it's displayed. A 300px thumbnail doesn't need 4000px.</li>
        <li><strong>Responsive images:</strong> use <code>srcset</code>/<code>sizes</code> to load the right size per screen.</li>
        <li><strong>Lazy loading:</strong> <code>loading="lazy"</code> loads images only as they scroll into view.</li>
        <li><strong>Tune quality:</strong> JPG quality 70–80 is usually indistinguishable from 100 but far smaller.</li>
      </ul>
      <h3>Goal &amp; measurement</h3>
      <p>Small file size with high perceived quality. How much images slow loading shows in the <strong>Largest Contentful Paint (LCP)</strong> metric — often a single big image is the culprit.</p>
    `,
      didYouKnow: 'Optimized images can reduce file size by more than 70%.',
    },
    configs: [
      {
        labelDe: 'Lazy Loading',
        labelEn: 'Lazy Loading',
        lang: 'html',
        code: `<img
  src="bild.webp"
  loading="lazy"
  alt="Beispiel"
/>`,
      },
    ],
    example: {
      caption:
        'Dieselbe Aufnahme als WebP optimiert: rund 75 % kleiner bei kaum sichtbarem Unterschied.',
      html: `
        <div style="display:grid;gap:14px;max-width:300px;margin:0 auto">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:.8rem;opacity:.75;margin-bottom:5px"><span>Original</span><span>2.4 MB</span></div>
            <div style="height:16px;border-radius:8px;background:#ef4444;width:100%"></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:.8rem;opacity:.75;margin-bottom:5px"><span>WebP optimiert</span><span>0.6 MB</span></div>
            <div style="height:16px;border-radius:8px;background:#22c55e;width:25%"></div>
          </div>
        </div>`,
    },
  },
  {
    id: 'exif-metadaten',
    category: 'bild-grafik',
    difficulty: 'easy',
    image: '',
    icon: 'ph-info',
    tags: ['exif', 'metadaten', 'gps', 'kamera'],
    related: ['bild-dateiformate', 'aufloesung-dpi'],
    de: {
      title: 'EXIF & Metadaten',
      summary: 'Digitale Bilder enthalten häufig zusätzliche Informationen über die Aufnahme.',
      content: `
      <h3>Was sind Metadaten?</h3>
      <p>Metadaten sind „Daten über Daten" — Zusatzinformationen, die <em>im</em> Bild gespeichert sind, aber nicht auf dem Bild zu sehen. Der verbreitetste Standard bei Fotos ist <strong>EXIF</strong> (Exchangeable Image File Format). Kameras und Smartphones schreiben ihn automatisch in jede Aufnahme.</p>
      <h3>Was EXIF speichert</h3>
      <ul>
        <li><strong>Kamera:</strong> Modell, Hersteller, verwendetes Objektiv.</li>
        <li><strong>Aufnahmeparameter:</strong> Blende (f-Wert), Belichtungszeit, ISO, Brennweite, Blitz.</li>
        <li><strong>Zeit:</strong> exaktes Datum und Uhrzeit der Aufnahme.</li>
        <li><strong>GPS:</strong> bei vielen Smartphones die Koordinaten des Aufnahmeorts.</li>
      </ul>
      <p>Verwandte Standards sind <strong>IPTC</strong> (Urheber, Bildunterschrift, Stichwörter) und <strong>XMP</strong> (flexibles Adobe-Format).</p>
      <h3>Datenschutz — Vorsicht beim Teilen</h3>
      <p>Metadaten können ungewollt viel verraten: Ein privat geteiltes Foto kann über GPS die <strong>Wohnadresse</strong> preisgeben, obwohl auf dem Bild nur das Wohnzimmer zu sehen ist. Viele Plattformen entfernen EXIF beim Upload automatisch — verlassen sollte man sich darauf nicht. Vor dem Teilen persönlicher Bilder die Metadaten prüfen und bei Bedarf entfernen (die meisten Betriebssysteme bieten das direkt an).</p>
    `,
      didYouKnow:
        'Ein Foto kann deinen Standort verraten, obwohl er auf dem Bild nicht sichtbar ist.',
    },
    en: {
      title: 'EXIF & Metadata',
      summary: 'Digital images often contain additional information about the photo.',
      content: `
      <h3>What is metadata?</h3>
      <p>Metadata is "data about data" — extra information stored <em>inside</em> the image but not visible in it. The most common standard for photos is <strong>EXIF</strong> (Exchangeable Image File Format). Cameras and smartphones write it into every shot automatically.</p>
      <h3>What EXIF stores</h3>
      <ul>
        <li><strong>Camera:</strong> model, maker, the lens used.</li>
        <li><strong>Capture settings:</strong> aperture (f-number), exposure time, ISO, focal length, flash.</li>
        <li><strong>Time:</strong> exact date and time of capture.</li>
        <li><strong>GPS:</strong> on many smartphones, the coordinates of where it was taken.</li>
      </ul>
      <p>Related standards are <strong>IPTC</strong> (author, caption, keywords) and <strong>XMP</strong> (flexible Adobe format).</p>
      <h3>Privacy — careful when sharing</h3>
      <p>Metadata can reveal far more than intended: a privately shared photo can expose your <strong>home address</strong> via GPS, even though the image only shows a living room. Many platforms strip EXIF on upload automatically — but don't rely on it. Before sharing personal images, check the metadata and remove it if needed (most operating systems offer this directly).</p>
    `,
      didYouKnow: 'A photo can reveal your location even if it is not visible in the image.',
    },
    configs: [],
    example: {
      caption: 'Ein Foto trägt unsichtbare EXIF-Felder mit sich: Datum, GPS und Aufnahmeparameter.',
      html: `
        <div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap;align-items:center">
          <div style="width:120px;height:88px;border-radius:8px;background:linear-gradient(135deg,#0ea5e9,#22c55e);position:relative;flex:none">
            <span style="position:absolute;bottom:6px;right:8px;font-size:1.5rem">📷</span>
          </div>
          <ul style="list-style:none;padding:0;margin:0;font-size:.82rem;text-align:left;opacity:.85;line-height:1.85;font-family:var(--font-mono,monospace)">
            <li>📅 2026:07:06 14:32</li>
            <li>📍 47.07, 15.44</li>
            <li>⚙ f/2.8 · 1/250s · ISO 100</li>
          </ul>
        </div>`,
    },
  },
];
