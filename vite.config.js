import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// SYNTHESE — Vite-Konfiguration
// root = src/, Einstieg = src/pages/index.html
export default defineConfig({
  root: 'src',
  base: './',            // relative Pfade → funktioniert auch auf GitHub Pages / statischem Hosting
  publicDir: false,
  server: {
    open: '/pages/index.html'
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/pages/index.html')
    }
  }
});
