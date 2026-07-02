/**
 * SYNTHESE — Kategorie: SCHUTZ
 * Owner: Content-Lead. Neues Thema = Objekt anhängen. Schema: DATA-SCHEMA.md §1.
 */

export default [
  {
    id: 'fail2ban',
    category: 'schutz',
    difficulty: 'medium',
    image: '',
    icon: 'ph-shield-check',
    tags: ['fail2ban', 'ban', 'brute-force', 'ssh', 'log'],
    related: ['brute-force', 'ssh-hardening', 'rate-limiting-nginx'],
    de: {
      title: 'fail2ban',
      summary: 'Sperrt automatisch IPs, die zu oft falsche Logins versuchen — kostenloser Brute-Force-Schutz.',
      content: `
        <h3>Wie es funktioniert</h3>
        <p>fail2ban liest Server-Logs (z.B. SSH, nginx). Erkennt es zu viele Fehlversuche von einer IP, fügt es diese per Firewall-Regel zu einer Sperrliste ("Jail") hinzu.</p>
        <h3>Jails, Filter, Actions</h3>
        <p><strong>Filter</strong> = Muster im Log (Fehlversuch). <strong>Jail</strong> = welche Logs + wie oft + wie lange sperren. <strong>Action</strong> = was passiert (IP bannen).</p>
        <h3>Warum wichtig</h3>
        <p>Ein einfacher, ressourcenschonender Basisschutz — läuft auf jedem Linux-Server kostenlos.</p>
      `,
      didYouKnow: 'Nach der Installation blockt fail2ban oft schon in den ersten Minuten reale Angreifer-IPs.'
    },
    en: {
      title: 'fail2ban',
      summary: 'Automatically bans IPs that fail login too often — free brute-force protection.',
      content: `
        <h3>How it works</h3>
        <p>fail2ban reads server logs (e.g. SSH, nginx). If it detects too many failed attempts from one IP, it adds that IP to a ban list ("jail") via a firewall rule.</p>
        <h3>Jails, filters, actions</h3>
        <p><strong>Filter</strong> = the log pattern (failed attempt). <strong>Jail</strong> = which logs + how often + how long to ban. <strong>Action</strong> = what happens (ban the IP).</p>
        <h3>Why it matters</h3>
        <p>A simple, lightweight baseline protection — runs free on any Linux server.</p>
      `,
      didYouKnow: 'After installation, fail2ban often blocks real attacker IPs within the first few minutes.'
    },
    configs: [
      {
        labelDe: 'SSH-Jail (jail.local)',
        labelEn: 'SSH jail (jail.local)',
        lang: 'ini',
        code: `[sshd]
enabled  = true
port     = ssh
maxretry = 3
findtime = 600
bantime  = 3600`
      }
    ]
  },
  {
    id: 'rate-limiting-nginx',
    category: 'schutz',
    difficulty: 'hard',
    image: '',
    icon: 'ph-gauge',
    tags: ['rate-limiting', 'nginx', 'ddos', 'brute-force', 'limit'],
    related: ['dos-ddos', 'brute-force', 'nginx-reverse-proxy', 'slowloris'],
    de: {
      title: 'Rate-Limiting mit nginx',
      summary: 'Begrenzt Anfragen pro IP — bremst Brute-Force und L7-DoS direkt am Webserver aus.',
      content: `
        <h3>Idee</h3>
        <p>Kein normaler Nutzer schickt 100 Anfragen pro Sekunde. nginx kann pro IP eine Obergrenze setzen und überschüssige Requests verzögern oder ablehnen.</p>
        <h3>limit_req_zone</h3>
        <p>Definiert eine "Zone" (Speicher pro IP) und eine Rate (z.B. 10 Anfragen/Sekunde). <code>burst</code> erlaubt kurze Spitzen.</p>
        <h3>Wogegen es hilft</h3>
        <p>Brute-Force auf Login-Seiten, Layer-7-DoS, aggressive Bots. Kein Ersatz gegen große volumetrische DDoS, aber starke erste Verteidigung.</p>
      `,
      didYouKnow: 'Mit einer einzigen limit_req-Zeile lässt sich ein Login-Endpoint gegen die meisten Passwort-Bots absichern.'
    },
    en: {
      title: 'Rate Limiting with nginx',
      summary: 'Caps requests per IP — throttles brute-force and L7 DoS right at the web server.',
      content: `
        <h3>The idea</h3>
        <p>No normal user sends 100 requests per second. nginx can cap requests per IP and delay or reject the excess.</p>
        <h3>limit_req_zone</h3>
        <p>Defines a "zone" (memory per IP) and a rate (e.g. 10 requests/second). <code>burst</code> allows short spikes.</p>
        <h3>What it helps against</h3>
        <p>Brute-force on login pages, layer-7 DoS, aggressive bots. Not a cure for large volumetric DDoS, but a strong first line of defense.</p>
      `,
      didYouKnow: 'A single limit_req line can protect a login endpoint against most password bots.'
    },
    configs: [
      {
        labelDe: 'Rate-Limit für Login',
        labelEn: 'Rate limit for login',
        lang: 'nginx',
        code: `# http-Block: Zone definieren (10 Req/s pro IP)
limit_req_zone $binary_remote_addr zone=login:10m rate=10r/s;

server {
  location /login {
    limit_req zone=login burst=20 nodelay;
    proxy_pass http://app;
  }
}`
      }
    ]
  }
];
