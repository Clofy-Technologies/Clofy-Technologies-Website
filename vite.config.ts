import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
 
// Vite configuration

export default defineConfig({

  plugins: [react()],

  optimizeDeps: {

    exclude: ['lucide-react'], // Exclude dependencies from optimization

  },

  build: {

    outDir: 'dist', // Ensure the build output is placed in the root directory's dist folder

  },

});
