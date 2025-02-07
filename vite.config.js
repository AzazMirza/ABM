import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 Important for correct asset paths!
  build: {
    rollupOptions: {
      external: ['react-type-animation']
    }
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
});