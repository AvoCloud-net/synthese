/**
 * SYNTHESE — Search Module
 * Echtzeit-Suche über alle Themen mit Debounce
 */

import { searchTopics } from './data.js';

/**
 * Initialisiert die Suche
 * @param {string} inputSel - Selector für den Input
 * @param {string} cardSel - Selector für die zu filternden Cards
 */
export function initSearch(
  inputSel = '.challenge-search__input',
  cardSel = '.challenge-topic-card'
) {
  const input = document.querySelector(inputSel);
  if (!input) return;

  const runSearch = debounce(
    () => filterCards(input.value, document.querySelectorAll(cardSel)),
    200
  );
  input.addEventListener('input', runSearch);
}

/**
 * Filtert Cards basierend auf einem Suchbegriff
 * @param {string} query - Der Suchbegriff
 * @param {NodeList} cards - Alle Topic-Cards
 */
function filterCards(query, cards) {
  const hits = new Set(searchTopics(query).map((t) => t.id));
  cards.forEach((card) => {
    card.classList.toggle('u-hidden', !hits.has(card.dataset.id));
  });
  toggleNoResults(hits.size === 0 && cards.length > 0);
}

/**
 * Debounce-Funktion
 * @param {Function} fn - Die auszuführende Funktion
 * @param {number} delay - Verzögerung in ms
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Zeigt "Keine Ergebnisse"-Meldung an (legt Element bei Bedarf an)
 * @param {boolean} show - true = anzeigen, false = ausblenden
 */
function toggleNoResults(show) {
  let el = document.querySelector('.challenge-search__no-results');
  if (!el) {
    el = document.createElement('p');
    el.className = 'challenge-search__no-results u-hidden';
    el.textContent = 'Keine Ergebnisse gefunden.';
    document.querySelector('.challenge-search')?.appendChild(el);
  }
  el.classList.toggle('u-hidden', !show);
}
