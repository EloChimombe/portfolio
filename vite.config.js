import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: '/WebPortfolio/',
    plugins: [
      react(),
      // viteCompression()
    ],
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
    // base: '/Website Portfolio/'
  }
});