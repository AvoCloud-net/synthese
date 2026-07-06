/**
 * SYNTHESE — Sandbox Module (Issue #52)
 * Live-Code-Playground im Detail-Modal: editierbare HTML/CSS/JS-Felder mit
 * Live-Vorschau in einem gekapselten <iframe>.
 *
 * Sicherheit (siehe Issue #52):
 * - Vorschau-iframe IMMER nur mit sandbox="allow-scripts", NIEMALS zusätzlich
 *   allow-same-origin → so kann der Nutzer-Code nicht auf das Eltern-Dokument
 *   (Cookies, DOM, andere Topics) zugreifen.
 * - Inhalt via srcdoc, kein eval()/innerHTML mit Nutzer-Code im Elternfenster.
 */

import { getTopicById } from './data.js';

const DEBOUNCE_MS = 300;

/**
 * Rendert den Sandbox-Bereich für ein Topic in den Container.
 * Fehlt `topic.sandbox`, bleibt der Bereich unsichtbar (kein leerer Rahmen).
 * @param {string} topicId - ID des Topics
 * @param {string} [containerSelector='#topic-sandbox'] - Ziel-Container
 */
export function renderSandbox(topicId, containerSelector = '#topic-sandbox') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const topic = getTopicById(topicId);
  const sandbox = topic?.sandbox;

  // Kein sandbox-Feld → Bereich komplett verstecken, Inhalt leeren.
  if (!sandbox) {
    container.hidden = true;
    container.innerHTML = '';
    return;
  }

  // Nur vorhandene Teile (html/css/js) als Felder anbieten.
  const parts = ['html', 'css', 'js']
    .filter((key) => typeof sandbox[key] === 'string' && sandbox[key].length > 0)
    .map((key) => ({ key, value: sandbox[key] }));

  if (parts.length === 0) {
    container.hidden = true;
    container.innerHTML = '';
    return;
  }

  container.hidden = false;
  container.innerHTML = buildMarkup(parts);

  const textareas = parts.map(({ key }) => ({
    key,
    el: container.querySelector(`.challenge-sandbox__input[data-lang="${key}"]`),
  }));
  const iframe = container.querySelector('.challenge-sandbox__preview');
  const resetBtn = container.querySelector('.challenge-sandbox__reset');

  // Start-Code merken, damit "Zurücksetzen" ihn wiederherstellen kann.
  const initial = Object.fromEntries(parts.map(({ key, value }) => [key, value]));

  const update = () => updatePreview(iframe, textareas);
  const debouncedUpdate = debounce(update, DEBOUNCE_MS);

  textareas.forEach(({ el }) => el?.addEventListener('input', debouncedUpdate));

  resetBtn?.addEventListener('click', () => {
    textareas.forEach(({ key, el }) => {
      if (el) el.value = initial[key] ?? '';
    });
    update();
  });

  // Erste Vorschau sofort (nicht debounced) rendern.
  update();
}

/**
 * Baut das statische Markup: pro vorhandenem Teil eine <textarea> + Vorschau.
 * @param {Array<{key: string, value: string}>} parts
 * @returns {string} HTML-String
 */
function buildMarkup(parts) {
  const labels = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
  const fields = parts
    .map(
      ({ key, value }) => `
      <div class="challenge-sandbox__field">
        <label class="challenge-sandbox__label" for="sandbox-${key}">${labels[key]}</label>
        <textarea
          id="sandbox-${key}"
          class="challenge-sandbox__input"
          data-lang="${key}"
          spellcheck="false"
          autocapitalize="off"
          autocomplete="off"
          rows="5"
        >${escapeTextarea(value)}</textarea>
      </div>`
    )
    .join('');

  return `
    <div class="challenge-sandbox">
      <div class="challenge-sandbox__header">
        <h3 class="challenge-sandbox__heading">Ausprobieren</h3>
        <button type="button" class="challenge-sandbox__reset">
          <i class="ph ph-arrow-counter-clockwise" aria-hidden="true"></i>
          Zurücksetzen
        </button>
      </div>
      <div class="challenge-sandbox__editors">${fields}</div>
      <div class="challenge-sandbox__preview-frame">
        <iframe
          class="challenge-sandbox__preview"
          title="Live-Vorschau"
          sandbox="allow-scripts"
        ></iframe>
        <span class="challenge-sandbox__resize-hint" aria-hidden="true">↘ ziehen zum Größe ändern</span>
      </div>
    </div>
  `;
}

/**
 * Baut das srcdoc aus den aktuellen Feld-Werten zusammen und setzt es.
 * @param {HTMLIFrameElement} iframe
 * @param {Array<{key: string, el: HTMLTextAreaElement}>} textareas
 */
function updatePreview(iframe, textareas) {
  if (!iframe) return;
  const code = { html: '', css: '', js: '' };
  textareas.forEach(({ key, el }) => {
    if (el) code[key] = el.value;
  });
  // Reihenfolge: <style> … html … <script> (siehe Issue #52).
  iframe.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>${code.css}</style></head><body>${code.html}<script>${code.js}<\/script></body></html>`;
}

/**
 * Verzögert Aufrufe bis `wait` ms nach dem letzten Aufruf verstrichen sind.
 * @param {Function} fn
 * @param {number} wait
 * @returns {Function}
 */
function debounce(fn, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

/**
 * Escaping für Text, der in eine <textarea> eingesetzt wird — verhindert, dass
 * `</textarea>` oder `<`/`&` im Start-Code das Markup aufbricht.
 * @param {string} str
 * @returns {string}
 */
function escapeTextarea(str = '') {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
