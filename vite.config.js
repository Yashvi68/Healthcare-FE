import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
      // This option tells the plugin to process both .js and .jsx files
      // for Babel or esbuild transformations.
      include: '**/*.{jsx,js}',
    })],
})
