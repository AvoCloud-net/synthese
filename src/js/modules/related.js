/**
 * SYNTHESE — Related Links Module
 * Zeigt verwandte Themen basierend auf dem `related`-Array
 */

import { getTopicById } from './data.js';
import { getLanguage } from './i18n.js';

/**
 * Findet verwandte Topics für eine gegebene Topic-ID
 * @param {string} currentTopicId - ID des aktuellen Topics
 * @param {number} [limit=3] - Maximale Anzahl verwandter Topics
 * @returns {Array} Array verwandter Topic-Objekte
 */
export function getRelatedTopics(currentTopicId, limit = 3) {
  const topic = getTopicById(currentTopicId);

  return (topic?.related || [])
    .map((id) => getTopicById(id))
    .filter(Boolean) // ungültige/fehlende IDs robust rauswerfen
    .slice(0, limit);
}

/**
 * Rendert verwandte Topics in den Container
 * @param {string} currentTopicId - ID des aktuellen Topics
 * @param {string} containerSelector - Selector für den Container
 */
export function renderRelated(currentTopicId, containerSelector = '#related-topics') {
  const box = document.querySelector(containerSelector);
  if (!box) return;

  const related = getRelatedTopics(currentTopicId);

  if (related.length === 0) {
    box.innerHTML = '';
    return;
  }

  box.innerHTML = related.map(createRelatedCardHtml).join('');
}

/**
 * Erstellt HTML für eine Related-Mini-Card
 * @param {Object} topic - Topic-Objekt
 * @returns {string} HTML-String
 */
function createRelatedCardHtml(topic) {
  const lang = getLanguage();
  const title = topic?.[lang]?.title ?? topic?.de?.title ?? topic.id;
  const safeTitle = escapeHtml(title);
  const safeId = escapeHtml(topic.id);

  return `
    <button class="challenge-related__link" data-id="${safeId}" type="button" aria-label="${safeTitle}">
      ${safeTitle}
    </button>
  `;
}

/**
 * Escaped einfache HTML-Sonderzeichen, um XSS über Topic-Titel/IDs zu verhindern
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}