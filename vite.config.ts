import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
  plugins: [react(), tsconfigPaths()],
})
