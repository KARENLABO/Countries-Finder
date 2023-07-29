import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/countries': 'http://localhost:8999',
      '/flags': 'http://localhost:8999',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
