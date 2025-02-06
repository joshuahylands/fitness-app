import path from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@model': path.resolve(import.meta.dirname, './src/model'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@services': path.resolve(import.meta.dirname, './src/services'),
    }
  },
  plugins: [
    tailwindcss(),
    react()
  ]
});
