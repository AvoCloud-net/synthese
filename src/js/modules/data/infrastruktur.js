/**
 * SYNTHESE — Kategorie: INFRASTRUKTUR
 * Owner: Content-Lead. Neues Thema = Objekt anhängen. Schema: DATA-SCHEMA.md §1.
 */

export default [
  {
    id: 'docker-grundlagen',
    category: 'infrastruktur',
    difficulty: 'easy',
    image: '',
    icon: 'ph-shipping-container',
    tags: ['docker', 'container', 'isolation', 'image'],
    related: ['nginx-reverse-proxy', 'ports-sockets'],
    de: {
      title: 'Docker-Grundlagen',
      summary: 'Dienste isoliert in Containern betreiben — mehr Sicherheit und einfacheres Deployment.',
      content: `
        <h3>Image vs. Container</h3>
        <p>Ein <strong>Image</strong> ist die Vorlage (App + Abhängigkeiten). Ein <strong>Container</strong> ist eine laufende Instanz davon — isoliert vom Host.</p>
        <h3>Warum sicherer?</h3>
        <p>Läuft ein Dienst im Container und wird kompromittiert, ist der Schaden auf den Container begrenzt — nicht das ganze System.</p>
        <h3>Grundbefehle</h3>
        <p><code>docker run</code> startet einen Container, <code>docker ps</code> zeigt laufende, <code>docker logs</code> zeigt Ausgaben.</p>
      `,
      didYouKnow: 'Container teilen sich den Kernel des Hosts — deshalb starten sie in Sekunden, während echte VMs Minuten brauchen.'
    },
    en: {
      title: 'Docker Basics',
      summary: 'Run services isolated in containers — more security and easier deployment.',
      content: `
        <h3>Image vs. container</h3>
        <p>An <strong>image</strong> is the template (app + dependencies). A <strong>container</strong> is a running instance of it — isolated from the host.</p>
        <h3>Why safer?</h3>
        <p>If a service runs in a container and gets compromised, the damage is limited to that container — not the whole system.</p>
        <h3>Core commands</h3>
        <p><code>docker run</code> starts a container, <code>docker ps</code> lists running ones, <code>docker logs</code> shows output.</p>
      `,
      didYouKnow: 'Containers share the host kernel — that is why they start in seconds while real VMs take minutes.'
    },
    configs: [
      {
        labelDe: 'nginx-Container starten',
        labelEn: 'Start an nginx container',
        lang: 'bash',
        code: `docker run -d --name web -p 8080:80 nginx
docker ps        # laufende Container
docker logs web  # Ausgaben ansehen`
      }
    ]
  },
  {
    id: 'nginx-reverse-proxy',
    category: 'infrastruktur',
    difficulty: 'medium',
    image: '',
    icon: 'ph-arrows-split',
    tags: ['nginx', 'reverse-proxy', 'proxy', 'upstream', 'tls'],
    related: ['rate-limiting-nginx', 'docker-grundlagen', 'ports-sockets'],
    de: {
      title: 'nginx als Reverse-Proxy',
      summary: 'Ein Tor vor deine Apps: nginx nimmt alle Anfragen an und leitet sie sicher weiter.',
      content: `
        <h3>Was ist ein Reverse-Proxy?</h3>
        <p>nginx steht vor deinen Anwendungen. Nutzer sprechen nur mit nginx; die eigentliche App bleibt intern und ist nicht direkt aus dem Internet erreichbar.</p>
        <h3>Vorteile für Sicherheit</h3>
        <p>Zentrale Stelle für TLS/HTTPS, Rate-Limiting, Security-Header und das Verstecken interner Ports. Eine Härtungsstelle statt vieler.</p>
        <h3>proxy_pass</h3>
        <p>Die Direktive <code>proxy_pass</code> leitet Anfragen an einen internen Dienst (upstream) weiter.</p>
      `,
      didYouKnow: 'Weil nur nginx nach außen offen ist, reduziert ein Reverse-Proxy die Angriffsfläche deiner Apps drastisch.'
    },
    en: {
      title: 'nginx as a Reverse Proxy',
      summary: 'A gate in front of your apps: nginx receives all requests and forwards them safely.',
      content: `
        <h3>What is a reverse proxy?</h3>
        <p>nginx sits in front of your applications. Users only talk to nginx; the actual app stays internal and is not directly reachable from the internet.</p>
        <h3>Security benefits</h3>
        <p>A single place for TLS/HTTPS, rate limiting, security headers, and hiding internal ports. One hardening point instead of many.</p>
        <h3>proxy_pass</h3>
        <p>The <code>proxy_pass</code> directive forwards requests to an internal service (upstream).</p>
      `,
      didYouKnow: 'Because only nginx is exposed, a reverse proxy drastically reduces your apps\' attack surface.'
    },
    configs: [
      {
        labelDe: 'Reverse-Proxy (server-Block)',
        labelEn: 'Reverse proxy (server block)',
        lang: 'nginx',
        code: `server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}`
      }
    ]
  }
];
