/**
 * SYNTHESE — Cards Module
 * Rendert Topic-Cards aus dem topics-Array (BEM: .challenge-topic-card__*)
 *
 * Issue #11: renderCards() + createCardHtml() (Grundgerüst, Klick → Detail)
 * Issue #12: Meta-Block — Kategorie-/Difficulty-Badge + Icon, Texte via i18n
 */

import { topics } from './data.js';
import { getLanguage, updateI18nAttributes } from './i18n.js';

/**
 * Rendert alle Topic-Cards in den Container
 * @param {string} containerSelector - Selector für den Container
 * @param {Array} [data=topics] - Array der zu rendernden Themen
 */
export function renderCards(containerSelector = '#topics-grid', data = topics) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = data.map(createCardHtml).join('');

  // Badge-Texte hängen an data-i18n → nach dem Rendern neu übersetzen,
  // sonst bleiben die Badges leer.
  updateI18nAttributes();

  container.querySelectorAll('.challenge-topic-card').forEach((card) => {
    card.addEventListener('click', () => openTopicDetail(card.dataset.id));
  });
}

/**
 * Erstellt das HTML für eine einzelne Card
 * @param {Object} topic - Ein Topic-Objekt aus data.js
 * @returns {string} HTML-String (BEM)
 */
function createCardHtml(topic) {
  const lang = getLanguage();
  const l = topic[lang] || topic.de;

  return `
    <article class="challenge-topic-card ${getCategoryClass(topic.category)}"
             data-id="${topic.id}"
             data-category="${topic.category}"
             data-difficulty="${topic.difficulty}"
             tabindex="0">
      <div class="challenge-topic-card__meta">
        <span class="challenge-topic-card__badge challenge-topic-card__badge--cat ${topic.category}"
              data-i18n="category.${topic.category}"></span>
        <span class="challenge-topic-card__badge challenge-topic-card__badge--diff ${topic.difficulty}"
              data-i18n="filter.${topic.difficulty}"></span>
        <i class="challenge-topic-card__icon ph ${topic.icon}" aria-hidden="true"></i>
      </div>
      <h3 class="challenge-topic-card__title">${escapeHtml(l.title)}</h3>
      <p class="challenge-topic-card__summary">${escapeHtml(l.summary)}</p>
    </article>
  `;
}

/**
 * Gibt eine Modifier-Klasse für die Kategorie-Farbcodierung zurück
 * @param {string} category - Kategorie-Enum (DATA-SCHEMA §7)
 * @returns {string} CSS-Klasse
 */
function getCategoryClass(category) {
  return `is-${category}`;
}

/**
 * Minimales HTML-Escaping für aus Daten eingesetzten Text
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Öffnet die Detail-Ansicht für ein Topic.
 * Feuert ein CustomEvent 'topic:open' — der Detail-/Modal-Handler
 * (eigenes Issue) hört darauf. Kein harter Link auf eine (noch)
 * nicht existierende Seite.
 * @param {string} topicId - ID des Topics
 */
function openTopicDetail(topicId) {
  if (!topicId) return;
  document.dispatchEvent(new CustomEvent('topic:open', { detail: { id: topicId } }));
}
