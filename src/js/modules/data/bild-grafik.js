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
        <h3>Rastergrafik</h3>
        <p>Besteht aus einem Gitter aus Pixeln. Fotos sind immer Raster. Beim Vergrößern werden Pixel sichtbar — das Bild „verpixelt".</p>
        <h3>Vektorgrafik</h3>
        <p>Beschreibt Formen mathematisch als Punkte, Linien und Kurven. Beliebig skalierbar ohne Qualitätsverlust — ideal für Logos, Icons, Illustrationen.</p>
        <h3>Wann was?</h3>
        <p><strong>Raster</strong> (JPG, PNG) für Fotos. <strong>Vektor</strong> (SVG, PDF, AI) für alles, was in mehreren Größen scharf sein muss.</p>
      `,
      didYouKnow:
        'Ein Vektor-Logo lässt sich vom Visitenkarten-Format bis zur Hauswand vergrößern — dieselbe Datei bleibt gestochen scharf.',
    },
    en: {
      title: 'Raster vs. Vector',
      summary: 'Pixels or paths? The difference decides whether an image stays sharp when scaled.',
      content: `
        <h3>Raster graphics</h3>
        <p>Made of a grid of pixels. Photos are always raster. Scaling up reveals the pixels — the image "pixelates".</p>
        <h3>Vector graphics</h3>
        <p>Describes shapes mathematically as points, lines and curves. Scales freely without quality loss — ideal for logos, icons, illustrations.</p>
        <h3>When to use which?</h3>
        <p><strong>Raster</strong> (JPG, PNG) for photos. <strong>Vector</strong> (SVG, PDF, AI) for anything that must stay sharp at many sizes.</p>
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
        <p><strong>Auflösung</strong> = Anzahl Pixel (z.B. 1920×1080). <strong>PPI</strong> (Pixel pro Zoll) beschreibt die Dichte am Bildschirm, <strong>DPI</strong> (Dots pro Zoll) die im Druck.</p>
        <h3>Web vs. Druck</h3>
        <p>Fürs Web zählt die reine Pixelzahl — 72 „DPI" ist ein Mythos ohne Bedeutung. Für den Druck gelten meist <strong>300 DPI</strong> bei Endgröße, sonst wirkt es unscharf.</p>
        <h3>Regel</h3>
        <p>Runterskalieren geht immer, hochskalieren kostet Qualität. Lieber groß fotografieren/anlegen und verkleinern.</p>
      `,
      didYouKnow:
        'Die „72 DPI fürs Web"-Regel stammt aus alten Mac-Bildschirmen — heute ist für Web nur die Pixelanzahl relevant.',
    },
    en: {
      title: 'Resolution & DPI',
      summary: 'How many pixels does an image need? DPI decides sharpness in web and print.',
      content: `
        <h3>Pixels, PPI, DPI</h3>
        <p><strong>Resolution</strong> = number of pixels (e.g. 1920×1080). <strong>PPI</strong> (pixels per inch) describes on-screen density, <strong>DPI</strong> (dots per inch) print density.</p>
        <h3>Web vs. print</h3>
        <p>For the web only the raw pixel count matters — "72 DPI" is a meaningless myth. For print, usually <strong>300 DPI</strong> at final size, otherwise it looks blurry.</p>
        <h3>Rule</h3>
        <p>Scaling down always works, scaling up costs quality. Better to shoot/create large and shrink.</p>
      `,
      didYouKnow:
        'The "72 DPI for web" rule comes from old Mac screens — today only the pixel count matters for web.',
    },
    configs: [],
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
        <h3>Die Klassiker</h3>
        <ul>
          <li><strong>JPG:</strong> kleine Fotos, keine Transparenz, verlustbehaftet.</li>
          <li><strong>PNG:</strong> Transparenz + scharfe Kanten, größer, verlustfrei.</li>
          <li><strong>SVG:</strong> Vektor, winzig, beliebig skalierbar — Logos/Icons.</li>
          <li><strong>WebP/AVIF:</strong> modern, deutlich kleiner bei gleicher Qualität.</li>
        </ul>
        <h3>Faustregel</h3>
        <p>Foto → JPG/WebP. Grafik mit Transparenz → PNG/WebP. Logo/Icon → SVG. Fürs Web nach Möglichkeit WebP mit Fallback.</p>
      `,
      didYouKnow: 'WebP spart oft 25–35 % Dateigröße gegenüber JPG bei vergleichbarer Qualität.',
    },
    en: {
      title: 'Image File Formats',
      summary: 'JPG, PNG, SVG, WebP — which format when? Transparency, size and quality compared.',
      content: `
        <h3>The classics</h3>
        <ul>
          <li><strong>JPG:</strong> small photos, no transparency, lossy.</li>
          <li><strong>PNG:</strong> transparency + crisp edges, larger, lossless.</li>
          <li><strong>SVG:</strong> vector, tiny, freely scalable — logos/icons.</li>
          <li><strong>WebP/AVIF:</strong> modern, much smaller at the same quality.</li>
        </ul>
        <h3>Rule of thumb</h3>
        <p>Photo → JPG/WebP. Graphic with transparency → PNG/WebP. Logo/icon → SVG. For web, prefer WebP with a fallback.</p>
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
        <h3>Zwei Wege</h3>
        <p><strong>Verlustfrei</strong> (PNG, FLAC, ZIP): rekonstruiert die Daten exakt, spart weniger. <strong>Verlustbehaftet</strong> (JPG, MP3, H.264): wirft für das Auge/Ohr Unwichtiges weg, spart viel.</p>
        <h3>Codecs</h3>
        <p>Ein <strong>Codec</strong> (Coder/Decoder) beschreibt, wie kodiert und dekodiert wird — z.B. H.264/H.265 (Video), AAC/MP3 (Audio). Der <strong>Container</strong> (MP4, MKV) verpackt Video + Audio + Untertitel.</p>
        <h3>Qualität vs. Größe</h3>
        <p>Höhere Kompression = kleinere Datei, aber sichtbare Artefakte. Die richtige Bitrate ist der Kompromiss.</p>
      `,
      didYouKnow:
        'MP3 nutzt psychoakustische Modelle: Es entfernt Töne, die das menschliche Ohr ohnehin kaum wahrnimmt.',
    },
    en: {
      title: 'Compression & Codecs',
      summary: 'Lossy or lossless? How codecs shrink image, video and audio.',
      content: `
        <h3>Two paths</h3>
        <p><strong>Lossless</strong> (PNG, FLAC, ZIP): reconstructs data exactly, saves less. <strong>Lossy</strong> (JPG, MP3, H.264): discards what the eye/ear barely notices, saves a lot.</p>
        <h3>Codecs</h3>
        <p>A <strong>codec</strong> (coder/decoder) defines how data is encoded and decoded — e.g. H.264/H.265 (video), AAC/MP3 (audio). The <strong>container</strong> (MP4, MKV) wraps video + audio + subtitles.</p>
        <h3>Quality vs. size</h3>
        <p>More compression = smaller file, but visible artifacts. The right bitrate is the compromise.</p>
      `,
      didYouKnow:
        'MP3 uses psychoacoustic models: it removes sounds the human ear can barely perceive anyway.',
    },
    configs: [],
  },
];
