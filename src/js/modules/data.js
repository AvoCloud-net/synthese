/**
 * SYNTHESE — Daten-Barrel (Aggregator)
 *
 * ⚠️ Diese Datei NICHT für Inhalte bearbeiten!
 * Themen liegen pro Kategorie in js/modules/data/<kategorie>.js.
 * Nur der Team-Lead ändert diesen Aggregator. Schema: DATA-SCHEMA.md.
 */

import gestaltung from './data/gestaltung.js';
import farbeTypo from './data/farbe-typo.js';
import bildGrafik from './data/bild-grafik.js';
import webUx from './data/web-ux.js';

/** Fixe Enums — siehe DATA-SCHEMA.md §7 */
export const CATEGORIES = ['gestaltung', 'farbe-typo', 'bild-grafik', 'web-ux'];
export const DIFFICULTIES = ['easy', 'medium', 'hard'];

/** Alle Themen, zusammengefügt aus den Kategorie-Dateien */
export const topics = [...gestaltung, ...farbeTypo, ...bildGrafik, ...webUx];

/** Thema nach ID finden → Topic | undefined */
export function getTopicById(id) {
  return topics.find((t) => t.id === id);
}

/** Themen nach Kategorie filtern ('all' = alle) → Array<Topic> */
export function getTopicsByCategory(category) {
  if (category === 'all') return topics;
  return topics.filter((t) => t.category === category);
}

/** Themen nach Schwierigkeit filtern ('all' = alle) → Array<Topic> */
export function getTopicsByDifficulty(difficulty) {
  if (difficulty === 'all') return topics;
  return topics.filter((t) => t.difficulty === difficulty);
}

/**
 * Volltextsuche über Titel, Summary (DE+EN) und Tags → Array<Topic>
 * tags sind top-level (nicht in de/en) — siehe DATA-SCHEMA.md §1.
 */
export function searchTopics(query) {
  const q = query.trim().toLowerCase();
  if (!q) return topics;
  return topics.filter(
    (t) =>
      t.de.title.toLowerCase().includes(q) ||
      t.de.summary.toLowerCase().includes(q) ||
      t.en.title.toLowerCase().includes(q) ||
      t.en.summary.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}
