import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],  // Exclude dependencies from optimization
  },
  build: {
    outDir: 'frontend/dist',  // Ensure this matches the output location defined in GitHub Actions
  },
});
