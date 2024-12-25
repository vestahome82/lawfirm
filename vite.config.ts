import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lawfirm/', // Replace 'lawfirm' with your repo name
  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Directory for static assets
    rollupOptions: {
      input: './index.html', // Entry point
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Hashing for asset files
        chunkFileNames: 'assets/[name]-[hash].js', // Hashing for chunks
        entryFileNames: 'assets/[name]-[hash].js', // Hashing for entry files
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude unnecessary dependencies
  },
  server: {
    port: 3000, // Local server port
    open: true, // Automatically open in browser
  },
});
