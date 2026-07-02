/**
 * SYNTHESE — Kategorie: ANGRIFFE
 * Owner: Content-Lead. Neues Thema = Objekt anhängen. Schema: DATA-SCHEMA.md §1.
 */

export default [
  {
    id: 'brute-force',
    category: 'angriffe',
    difficulty: 'easy',
    image: '',
    icon: 'ph-lock-key-open',
    tags: ['brute-force', 'passwort', 'ssh', 'credential-stuffing'],
    related: ['fail2ban', 'ssh-hardening', 'rate-limiting-nginx'],
    de: {
      title: 'Brute-Force & Credential Stuffing',
      summary: 'Angreifer probieren automatisiert Passwörter durch — so läuft der häufigste Angriff.',
      content: `
        <h3>Brute-Force</h3>
        <p>Ein Bot probiert tausende Passwörter pro Sekunde gegen einen Login (z.B. SSH, WordPress). Schwache Passwörter fallen in Sekunden.</p>
        <h3>Credential Stuffing</h3>
        <p>Angreifer nutzen geleakte Passwort-Listen aus früheren Daten-Lecks. Wer dasselbe Passwort mehrfach nutzt, ist sofort gefährdet.</p>
        <h3>Schutz</h3>
        <p>Lange Passwörter, 2FA, SSH-Key-only, und Tools wie fail2ban, die IPs nach zu vielen Fehlversuchen sperren.</p>
      `,
      didYouKnow: 'Das Passwort "123456" taucht in geleakten Listen millionenfach auf und wird als Erstes probiert.'
    },
    en: {
      title: 'Brute-Force & Credential Stuffing',
      summary: 'Attackers automatically guess passwords — the most common attack, explained.',
      content: `
        <h3>Brute-force</h3>
        <p>A bot tries thousands of passwords per second against a login (e.g. SSH, WordPress). Weak passwords fall in seconds.</p>
        <h3>Credential stuffing</h3>
        <p>Attackers reuse leaked password lists from earlier breaches. Anyone reusing the same password is immediately at risk.</p>
        <h3>Protection</h3>
        <p>Long passwords, 2FA, SSH key-only, and tools like fail2ban that ban IPs after too many failed attempts.</p>
      `,
      didYouKnow: 'The password "123456" appears millions of times in leaked lists and is tried first.'
    },
    configs: []
  },
  {
    id: 'dos-ddos',
    category: 'angriffe',
    difficulty: 'medium',
    image: '',
    icon: 'ph-network-slash',
    tags: ['dos', 'ddos', 'botnet', 'überlastung'],
    related: ['rate-limiting-nginx', 'slowloris', 'nginx-reverse-proxy'],
    de: {
      title: 'DoS vs. DDoS',
      summary: 'Server durch Überlastung lahmlegen — der Unterschied zwischen einem und tausenden Angreifern.',
      content: `
        <h3>DoS (Denial of Service)</h3>
        <p>Ein einzelner Rechner überflutet den Server mit Anfragen, bis er nicht mehr antwortet.</p>
        <h3>DDoS (Distributed DoS)</h3>
        <p>Tausende gekaperte Geräte (ein <strong>Botnet</strong>) greifen gleichzeitig an. Viel schwerer zu blocken, weil der Traffic von überall kommt.</p>
        <h3>Amplification</h3>
        <p>Angreifer missbrauchen offene Dienste (DNS, NTP), um kleine Anfragen in riesige Antworten zu verwandeln — verstärkter Angriff.</p>
      `,
      didYouKnow: 'Große DDoS-Angriffe erreichen über 1 Terabit pro Sekunde — genug, um ganze Rechenzentren zu überlasten.'
    },
    en: {
      title: 'DoS vs. DDoS',
      summary: 'Taking a server down by overload — the difference between one and thousands of attackers.',
      content: `
        <h3>DoS (Denial of Service)</h3>
        <p>A single machine floods the server with requests until it stops responding.</p>
        <h3>DDoS (Distributed DoS)</h3>
        <p>Thousands of hijacked devices (a <strong>botnet</strong>) attack at once. Much harder to block because traffic comes from everywhere.</p>
        <h3>Amplification</h3>
        <p>Attackers abuse open services (DNS, NTP) to turn small requests into huge responses — an amplified attack.</p>
      `,
      didYouKnow: 'Large DDoS attacks exceed 1 terabit per second — enough to overwhelm entire data centers.'
    },
    configs: []
  }
];
