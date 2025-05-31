import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',              // Use root base for custom domain deployment
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: 'localhost',
    cors: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
