import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',  // Replace with your repository name
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
