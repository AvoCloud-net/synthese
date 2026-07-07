/**
 * SYNTHESE — Cards Module
 * Rendert Topic-Cards aus dem topics-Array (BEM: .challenge-topic-card__*)
 *
 * Issue #11: renderCards() + createCardHtml() (Grundgerüst, Klick → Detail)
 * Issue #12: Meta-Block — Kategorie-/Difficulty-Badge + Icon, Texte via i18n
 */

import { topics, getTopicById, CATEGORIES } from './data.js';
import { getLanguage, updateI18nAttributes } from './i18n.js';
import { renderSandbox } from './sandbox.js';
import { renderExample } from './example.js';
import { initBookmarkButtons } from './bookmarks.js';

/**
 * Rendert alle Topic-Cards, gruppiert nach Kategorie, in den Container
 * @param {string} containerSelector - Selector für den Container
 * @param {Array} [data=topics] - Array der zu rendernden Themen
 */
export function renderCards(containerSelector = '#topics-grid', data = topics) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = CATEGORIES.map((category) =>
    createCategoryGroupHtml(
      category,
      data.filter((t) => t.category === category)
    )
  ).join('');

  // Badge-/Gruppentitel-Texte hängen an data-i18n → nach dem Rendern neu übersetzen,
  // sonst bleiben sie leer.
  updateI18nAttributes();

  initModalControls();

  container.querySelectorAll('.challenge-topic-card').forEach((card) => {
    card.addEventListener('click', () => openTopicDetail(card.dataset.id));
    // Tastatur: Enter/Space öffnet Detail (Karte ist tabindex=0)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openTopicDetail(card.dataset.id);
      }
    });
  });
}

/**
 * Erstellt eine Kategorie-Sektion (Überschrift + Card-Grid). Leere Kategorien
 * werden nicht gerendert.
 * @param {string} category - Kategorie-Enum (DATA-SCHEMA §7)
 * @param {Array} items - Themen dieser Kategorie
 * @returns {string} HTML-String
 */
function createCategoryGroupHtml(category, items) {
  if (items.length === 0) return '';

  return `
    <section class="topics-group" data-category="${category}">
      <h3 class="topics-group__title" data-i18n="category.${category}"></h3>
      <div class="topics-grid">${items.map(createCardHtml).join('')}</div>
    </section>
  `;
}

/**
 * Erstellt das HTML für eine einzelne Card
 * @param {Object} topic - Ein Topic-Objekt aus data.js
 * @returns {string} HTML-String (BEM)
 */
function createCardHtml(topic) {
  const lang = getLanguage();
  const l = topic[lang] || topic.de || topic.en || {};

  return `
    <article class="challenge-topic-card ${getCategoryClass(topic.category)}"
             data-id="${topic.id}"
             data-category="${topic.category}"
             data-difficulty="${topic.difficulty}"
             tabindex="0">
      <button type="button"
              class="challenge-topic-card__bookmark challenge-bookmark-btn"
              data-id="${topic.id}"
              aria-pressed="false"
              aria-label="Lesezeichen setzen">
        <i class="ph ph-bookmark-simple" aria-hidden="true"></i>
      </button>
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
 *
 * Provisorisch: befüllt das vorhandene #topic-modal direkt mit dem echten
 * Inhalt aus data.js. Das dedizierte Detail-Modal (Issue #18/#19) ersetzt
 * diese Funktion später — dann hier stattdessen ein CustomEvent 'topic:open'
 * dispatchen, auf das das Modal-Modul hört.
 * @param {string} topicId - ID des Topics
 */
function openTopicDetail(topicId) {
  if (!topicId) return;

  const topic = getTopicById(topicId);
  const modal = document.getElementById('topic-modal');
  const body = document.getElementById('modal-body');
  if (!topic || !modal || !body) return;

  const lang = getLanguage();
  const l = topic[lang] || topic.de || topic.en || {};
  body.innerHTML = `
    <button type="button"
            class="challenge-topic-card__bookmark challenge-bookmark-btn challenge-topic-detail__bookmark"
            data-id="${topic.id}"
            aria-pressed="false"
            aria-label="Lesezeichen setzen">
      <i class="ph ph-bookmark-simple" aria-hidden="true"></i>
    </button>
    <h2 id="modal-title" class="challenge-topic-detail__title">${escapeHtml(l.title)}</h2>
    <div class="challenge-topic-detail__body">${l.content || `<p>${escapeHtml(l.summary)}</p>`}</div>
    <div id="topic-example" hidden></div>
    <div id="topic-sandbox" hidden></div>
  `;

  // Visuelles Beispiel (nur sichtbar, wenn topic.example existiert).
  renderExample(topicId);
  // Issue #52: Sandbox-Bereich (nur sichtbar, wenn topic.sandbox existiert).
  renderSandbox(topicId);
  // Neuen Button im Modal binden (initBookmarkButtons() ist idempotent, s. bookmarks.js).
  initBookmarkButtons();

  modal.hidden = false;
  // Seite dahinter sperren — nur der Detail-Inhalt scrollt. Klasse auf <html>,
  // damit der Viewport-Scroll wirklich blockiert ist (body-overflow allein
  // reicht in Standards-Mode nicht zuverlässig).
  document.documentElement.classList.add('is-detail-open');
  modal.querySelector('.challenge-modal__close')?.focus();
}

/**
 * Schließt das Detail-Modal.
 */
function closeTopicDetail() {
  const modal = document.getElementById('topic-modal');
  if (!modal) return;
  modal.hidden = true;
  document.documentElement.classList.remove('is-detail-open');
}

/**
 * Bindet die Schließen-Handler des Modals einmalig (Close-Button, Backdrop, Esc).
 * Setzt zusätzlich die ARIA-Attribute für den Dialog, falls sie in index.html
 * (noch) nicht statisch gesetzt sind — Fallback, damit das Modal auch ohne
 * Änderung an index.html korrekt als Dialog ausgezeichnet ist.
 */
function initModalControls() {
  const modal = document.getElementById('topic-modal');
  if (!modal || modal.dataset.controlsBound) return;
  modal.dataset.controlsBound = 'true';

  // ARIA-Fallback: nur setzen, falls noch nicht in index.html vorhanden,
  // damit eine spätere manuelle Ergänzung dort nichts überschreibt.
  if (!modal.hasAttribute('role')) modal.setAttribute('role', 'dialog');
  if (!modal.hasAttribute('aria-modal')) modal.setAttribute('aria-modal', 'true');
  if (!modal.hasAttribute('aria-labelledby')) modal.setAttribute('aria-labelledby', 'modal-title');

  modal.querySelector('.challenge-modal__close')?.addEventListener('click', closeTopicDetail);
  modal.querySelector('.challenge-modal__backdrop')?.addEventListener('click', closeTopicDetail);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeTopicDetail();
  });
}
