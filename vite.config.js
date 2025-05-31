import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',            // root for custom domain
  publicDir: 'public',  // static assets
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') },
    },
  },
});