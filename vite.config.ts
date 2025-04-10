

// https://vite.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'backend/dist'), // ← THIS sends build files into the backend folder
    emptyOutDir: true,
  },
});
