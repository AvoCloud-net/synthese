/**
 * SYNTHESE — Bookmark Module
 * localStorage-basiertes Lesezeichen-System
 */

import { getTopicById } from './data.js';
import { getLanguage } from './i18n.js';

const STORAGE_KEY = 'synthese-bookmarks';

/**
 * Gibt alle gespeicherten Bookmarks zurück
 * @returns {string[]} Array von Topic-IDs
 */
export function getBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // kaputter/fehlender localStorage-Eintrag → sauber leer starten statt crashen
    return [];
  }
}

/**
 * Speichert das komplette Bookmark-Array
 * @param {string[]} bookmarks
 */
function saveBookmarks(bookmarks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  } catch {
    // z. B. Safari Private Mode / Quota voll — bewusst kein Crash
  }
}

/**
 * Fügt ein Topic zu den Bookmarks hinzu
 * @param {string} topicId - ID des Topics
 */
export function addBookmark(topicId) {
  if (!topicId) return;
  const bookmarks = getBookmarks();
  if (!bookmarks.includes(topicId)) {
    bookmarks.push(topicId);
    saveBookmarks(bookmarks);
  }
}

/**
 * Entfernt ein Topic aus den Bookmarks
 * @param {string} topicId - ID des Topics
 */
export function removeBookmark(topicId) {
  if (!topicId) return;
  const bookmarks = getBookmarks().filter((id) => id !== topicId);
  saveBookmarks(bookmarks);
}

/**
 * Toggle: Fügt hinzu oder entfernt ein Bookmark
 * @param {string} topicId - ID des Topics
 * @returns {boolean} true = jetzt bookmarked, false = jetzt entfernt
 */
export function toggleBookmark(topicId) {
  if (isBookmarked(topicId)) {
    removeBookmark(topicId);
    return false;
  }
  addBookmark(topicId);
  return true;
}

/**
 * Prüft, ob ein Topic bookmarked ist
 * @param {string} topicId - ID des Topics
 * @returns {boolean}
 */
export function isBookmarked(topicId) {
  return getBookmarks().includes(topicId);
}

/**
 * Initialisiert Bookmark-Buttons auf allen Cards/Detail-Ansichten
 * Buttons werden per data-id angedockt (siehe #11/#12/#19), kein Eingriff in fremde Module
 */
export function initBookmarkButtons() {
  document.querySelectorAll('.challenge-bookmark-btn').forEach((btn) => {
    const topicId = btn.dataset.id;
    if (!topicId) return;

    // Doppel-Bindung verhindern, falls initBookmarkButtons() mehrfach aufgerufen wird
    // (z. B. nach Re-Render von Cards oder erneutem Öffnen des Modals)
    if (btn.dataset.bookmarkBound === 'true') {
      // Zustand trotzdem aktuell halten, z. B. nach Reload oder externer Änderung
      syncButtonState(btn, topicId);
      return;
    }
    btn.dataset.bookmarkBound = 'true';

    syncButtonState(btn, topicId);

    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Button sitzt auf der klickbaren Card — Card-Click (Detail öffnen) darf nicht mitfeuern
      const nowBookmarked = toggleBookmark(topicId);
      applyButtonState(btn, nowBookmarked);
      renderBookmarks();
    });
  });
}

/**
 * Setzt Button-Zustand passend zum aktuellen isBookmarked()-Wert
 * @param {HTMLElement} btn
 * @param {string} topicId
 */
function syncButtonState(btn, topicId) {
  applyButtonState(btn, isBookmarked(topicId));
}

/**
 * Wendet den visuellen + a11y-Zustand auf einen Button an
 * @param {HTMLElement} btn
 * @param {boolean} on
 */
function applyButtonState(btn, on) {
  // Nur "regular"-Phosphor-Stylesheet eingebunden (index.html) — kein "-fill"-Icon
  // verfügbar, daher Zustand rein über Farbe/Klasse (.is-bookmarked in bookmark-btn.css).
  btn.classList.toggle('is-bookmarked', on);
  btn.setAttribute('aria-pressed', String(on));
  btn.setAttribute('aria-label', on ? 'Lesezeichen entfernen' : 'Lesezeichen setzen');
}

/**
 * Rendert die Bookmark-Liste (z. B. in einem Overlay oder separater Seite)
 * @param {string} containerSelector - Selector für den Container
 */
export function renderBookmarks(containerSelector = '#bookmarks-list') {
  const box = document.querySelector(containerSelector);
  if (!box) return;

  const topics = getBookmarks()
    .map((id) => getTopicById(id))
    .filter(Boolean);

  if (topics.length === 0) {
    box.innerHTML = '';
    return;
  }

  const lang = getLanguage();
  box.innerHTML = topics
    .map((t) => {
      const title = (t[lang] || t.de || t.en || {}).title || t.id;
      return `<a href="#" class="challenge-bookmark-item" data-id="${t.id}">${title}</a>`;
    })
    .join('');
}
