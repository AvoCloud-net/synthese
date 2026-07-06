/**
 * SYNTHESE — Example Module
 * Zeigt zu Themen ein oder mehrere statische visuelle Beispiele (fertig
 * gerendert) in der Detail-Ansicht — auch zusätzlich zu einer Sandbox.
 *
 * Datenfeld pro Topic (optional): `example`
 *   - String: ein einzelnes Beispiel (HTML).
 *   - { html, caption }: ein Beispiel mit eigener Beschriftung.
 *   - Array aus den beiden obigen Formen: mehrere Beispiele nacheinander.
 * HTML ist selbst-enthalten, inline-gestylt und stammt aus unseren eigenen
 * Datendateien (vertrauenswürdig), nicht aus Nutzereingaben.
 */

import { getTopicById } from './data.js';

/**
 * Rendert die visuellen Beispiele eines Topics in den Container.
 * Fehlt `topic.example`, bleibt der Bereich unsichtbar.
 * @param {string} topicId - ID des Topics
 * @param {string} [containerSelector='#topic-example'] - Ziel-Container
 */
export function renderExample(topicId, containerSelector = '#topic-example') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const topic = getTopicById(topicId);
  const items = normalize(topic?.example);

  if (items.length === 0) {
    container.hidden = true;
    container.innerHTML = '';
    return;
  }

  container.hidden = false;
  container.innerHTML = `
    <div class="challenge-example">
      <p class="challenge-example__caption">Grafische Beispiele</p>
      <div class="challenge-example__grid">
        ${items.map(renderItem).join('')}
      </div>
    </div>
  `;
}

/**
 * Bringt das `example`-Feld in eine einheitliche Liste von { html, caption }.
 * @param {*} example
 * @returns {Array<{html: string, caption?: string}>}
 */
function normalize(example) {
  if (!example) return [];
  const list = Array.isArray(example) ? example : [example];
  return list
    .map((entry) => (typeof entry === 'string' ? { html: entry } : entry))
    .filter((entry) => entry && typeof entry.html === 'string' && entry.html.length > 0);
}

/**
 * Rendert ein einzelnes Beispiel als Bühne mit optionaler Bildunterschrift.
 * @param {{html: string, caption?: string}} item
 * @returns {string}
 */
function renderItem(item) {
  const caption = item.caption
    ? `<figcaption class="challenge-example__label">${item.caption}</figcaption>`
    : '';
  return `
    <figure class="challenge-example__item">
      <div class="challenge-example__stage">${item.html}</div>
      ${caption}
    </figure>
  `;
}
