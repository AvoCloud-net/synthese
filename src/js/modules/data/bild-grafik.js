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
        <p>Die <strong>Druckvorstufe</strong> bereitet eine Datei druckfertig auf: Farbraum, Schriften, Auflösung und Beschnitt müssen stimmen, bevor die Druckmaschine startet.</p>
        <h3>PDF/X — der sichere Standard</h3>
        <ul>
          <li><strong>PDF/X-1a:</strong> alle Schriften eingebettet, nur CMYK — der sicherste, strengste Standard.</li>
          <li><strong>PDF/X-4:</strong> erlaubt Transparenzen und ICC-Profile — flexibler, aber anspruchsvoller.</li>
        </ul>
        <h3>Beschnitt (Bleed)</h3>
        <p>Elemente, die bis zum Papierrand laufen, brauchen <strong>3 mm Überstand</strong> über den Schnittrand. Sonst blitzen nach dem Schneiden weiße Ränder auf.</p>
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
        <p><strong>Prepress</strong> gets a file ready to print: color space, fonts, resolution and bleed must be right before the press starts.</p>
        <h3>PDF/X — the safe standard</h3>
        <ul>
          <li><strong>PDF/X-1a:</strong> all fonts embedded, CMYK only — the safest, strictest standard.</li>
          <li><strong>PDF/X-4:</strong> allows transparency and ICC profiles — more flexible, but trickier.</li>
        </ul>
        <h3>Bleed</h3>
        <p>Elements that run to the paper edge need <strong>3 mm of bleed</strong> past the trim line. Otherwise white slivers appear after cutting.</p>
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
  },
  ,
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
      <p>Große Bilder verlängern die Ladezeit einer Website. Optimierte Bilder verbessern Performance und SEO.</p>

      <h3>Empfehlungen</h3>
      <ul>
        <li><strong>WebP oder AVIF</strong> verwenden.</li>
        <li><strong>Lazy Loading</strong> aktivieren.</li>
        <li><strong>Responsive Bilder</strong> mit <code>srcset</code> nutzen.</li>
        <li>Bilder nur so groß speichern wie nötig.</li>
      </ul>

      <h3>Ziel</h3>
      <p>Möglichst kleine Dateigröße bei hoher Bildqualität.</p>
    `,
      didYouKnow: 'Optimierte Bilder können die Dateigröße um mehr als 70 % reduzieren.',
    },
    en: {
      title: 'Image Optimization for the Web',
      summary: 'Optimized images make websites faster and improve user experience.',
      content: `
      <h3>Why optimize?</h3>
      <p>Large images slow down websites. Optimized images improve performance and SEO.</p>

      <h3>Recommendations</h3>
      <ul>
        <li>Use <strong>WebP or AVIF</strong>.</li>
        <li>Enable <strong>lazy loading</strong>.</li>
        <li>Use responsive images with <code>srcset</code>.</li>
        <li>Only save images as large as necessary.</li>
      </ul>

      <h3>Goal</h3>
      <p>Keep file sizes as small as possible while maintaining good quality.</p>
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
      <h3>EXIF-Daten</h3>
      <p>EXIF speichert Informationen wie Kameramodell, ISO, Belichtungszeit, Brennweite und Aufnahmedatum.</p>

      <h3>GPS-Daten</h3>
      <p>Viele Smartphones speichern zusätzlich den Aufnahmeort eines Fotos.</p>

      <h3>Datenschutz</h3>
      <p>Vor dem Teilen persönlicher Bilder sollten Metadaten überprüft oder entfernt werden.</p>
    `,
      didYouKnow:
        'Ein Foto kann deinen Standort verraten, obwohl er auf dem Bild nicht sichtbar ist.',
    },
    en: {
      title: 'EXIF & Metadata',
      summary: 'Digital images often contain additional information about the photo.',
      content: `
      <h3>EXIF Data</h3>
      <p>EXIF stores information such as camera model, ISO, exposure time, focal length and capture date.</p>

      <h3>GPS Data</h3>
      <p>Many smartphones also store the location where the photo was taken.</p>

      <h3>Privacy</h3>
      <p>Check or remove metadata before sharing personal photos.</p>
    `,
      didYouKnow: 'A photo can reveal your location even if it is not visible in the image.',
    },
    configs: [],
  },
];
