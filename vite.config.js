import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Portfolio/',  // <-- add this to set base path for GitHub Pages
  plugins: [react()],   // only react plugin here
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
