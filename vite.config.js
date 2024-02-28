import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  // Other Vite config options...
  resolve: {
    alias: {
      // Other alias configurations...
    },
    extensions: [".js", ".jsx", ".json", ".vue", ".svg"], // Ensure SVG is included
  },
};

