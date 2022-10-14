import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import {VitePluginRadar as radar} from 'vite-plugin-radar';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    radar({
      gtm: {
        id: process.env.GOOGLE_TAG_MANAGER_ID
      }
    })
  ],
  build: {}
});
