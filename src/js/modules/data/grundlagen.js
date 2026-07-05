/**
 * SYNTHESE — Kategorie: GRUNDLAGEN
 * Owner: Content-Lead. Neues Thema = Objekt anhängen. Schema: DATA-SCHEMA.md §1.
 */

export default [
  {
    id: 'ports-sockets',
    category: 'grundlagen',
    difficulty: 'easy',
    image: '',
    icon: 'ph-plugs',
    tags: ['port', 'tcp', 'udp', 'netzwerk', 'socket'],
    related: ['firewall-grundlagen', 'nginx-reverse-proxy'],
    de: {
      title: 'Ports & Sockets',
      summary:
        'Wie Dienste auf einem Server erreichbar werden — und warum jeder offene Port ein Risiko ist.',
      content: `
        <h3>Was ist ein Port?</h3>
        <p>Ein Port ist eine nummerierte "Tür" auf deinem Server. Jeder Dienst lauscht auf einem Port: Web (80/443), SSH (22), Datenbank (z.B. 5432). Ein Socket = IP-Adresse + Port + Protokoll.</p>
        <h3>TCP vs. UDP</h3>
        <p><strong>TCP</strong> ist verbindungsorientiert und zuverlässig (Web, SSH). <strong>UDP</strong> ist verbindungslos und schnell (DNS, Video).</p>
        <h3>Sicherheits-Regel</h3>
        <p>Jeder offene Port ist eine Angriffsfläche. Öffne nur, was du wirklich brauchst. Prüfe offene Ports mit <code>ss -tulpn</code>.</p>
      `,
      didYouKnow:
        'Es gibt 65.535 Ports pro Protokoll. Die "well-known ports" 0–1023 sind für Standard-Dienste reserviert.',
    },
    en: {
      title: 'Ports & Sockets',
      summary: 'How services become reachable on a server — and why every open port is a risk.',
      content: `
        <h3>What is a port?</h3>
        <p>A port is a numbered "door" on your server. Each service listens on a port: web (80/443), SSH (22), database (e.g. 5432). A socket = IP address + port + protocol.</p>
        <h3>TCP vs. UDP</h3>
        <p><strong>TCP</strong> is connection-oriented and reliable (web, SSH). <strong>UDP</strong> is connectionless and fast (DNS, video).</p>
        <h3>Security rule</h3>
        <p>Every open port is an attack surface. Only open what you truly need. Check open ports with <code>ss -tulpn</code>.</p>
      `,
      didYouKnow:
        'There are 65,535 ports per protocol. The "well-known ports" 0–1023 are reserved for standard services.',
    },
    configs: [
      {
        labelDe: 'Offene Ports anzeigen',
        labelEn: 'Show open ports',
        lang: 'bash',
        code: `# Alle lauschenden TCP/UDP-Ports mit Prozess
ss -tulpn`,
      },
    ],
  },
  {
    id: 'ssh-grundlagen',
    category: 'grundlagen',
    difficulty: 'easy',
    image: '',
    icon: 'ph-terminal-window',
    tags: ['ssh', 'schlüssel', 'login', 'remote'],
    related: ['ssh-hardening', 'ports-sockets'],
    de: {
      title: 'SSH-Grundlagen',
      summary: 'Sicherer Fernzugriff auf den Server — warum Schlüssel besser sind als Passwörter.',
      content: `
        <h3>Was ist SSH?</h3>
        <p>SSH (Secure Shell) ist die verschlüsselte Verbindung zum Server-Terminal. Standard-Port ist 22.</p>
        <h3>Passwort vs. Schlüssel</h3>
        <p>Ein SSH-Schlüsselpaar (privat + öffentlich) ist viel sicherer als ein Passwort: der private Schlüssel verlässt nie deinen Rechner, Brute-Force ist praktisch unmöglich.</p>
        <h3>Schlüssel erstellen</h3>
        <p>Mit <code>ssh-keygen</code> erzeugst du ein Paar. Der öffentliche Schlüssel kommt in <code>~/.ssh/authorized_keys</code> auf dem Server.</p>
      `,
      didYouKnow:
        'Ein moderner ed25519-Schlüssel ist kürzer und sicherer als ein alter 2048-Bit-RSA-Schlüssel.',
    },
    en: {
      title: 'SSH Basics',
      summary: 'Secure remote access to the server — why keys beat passwords.',
      content: `
        <h3>What is SSH?</h3>
        <p>SSH (Secure Shell) is the encrypted connection to the server terminal. The default port is 22.</p>
        <h3>Password vs. key</h3>
        <p>An SSH key pair (private + public) is far safer than a password: the private key never leaves your machine, and brute-force is practically impossible.</p>
        <h3>Create a key</h3>
        <p>Use <code>ssh-keygen</code> to generate a pair. The public key goes into <code>~/.ssh/authorized_keys</code> on the server.</p>
      `,
      didYouKnow: 'A modern ed25519 key is shorter and more secure than an old 2048-bit RSA key.',
    },
    configs: [
      {
        labelDe: 'SSH-Schlüssel erstellen',
        labelEn: 'Create an SSH key',
        lang: 'bash',
        code: `ssh-keygen -t ed25519 -C "dein@email.at"
# Öffentlichen Schlüssel auf den Server kopieren:
ssh-copy-id user@server-ip`,
      },
    ],
  },
];
