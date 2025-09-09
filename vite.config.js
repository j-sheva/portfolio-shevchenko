// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-shevchenko/', // <-- заміни на свій repo-name/
  plugins: [react()],
});
