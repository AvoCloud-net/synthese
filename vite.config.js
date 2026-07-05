import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// SYNTHESE — Vite-Konfiguration
// root = src/, Einstieg = src/pages/index.html
export default defineConfig({
  root: 'src',
  base: './', // relative Pfade → funktioniert auch auf GitHub Pages / statischem Hosting
  publicDir: false,
  server: {
    open: '/pages/index.html',
    host: true, // im LAN erreichbar → Handy-Test der Mobile-Ansicht (320px)
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true, // erleichtert Debugging im gebauten Stand
    rollupOptions: {
      input: resolve(__dirname, 'src/pages/index.html'),
    },
  },
});
