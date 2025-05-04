import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        noDiscovery: true
    },
    server: {
        // Explicitly configure host + protocol for HMR
        // Needed for vite 5 (w/wails)
        // Possibly not needed if you downgrade to vite 4-
        // Not sure if it will be necessary in vite 6+
        // To disable Hot Module Reload (see wails-nohmr.json + template README):
        // hmr: false
        hmr: {
            host: "localhost",
            protocol: "ws",
        }
    },
    plugins: [
        vue(),
        Components({
            resolvers: [PrimeVueResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
