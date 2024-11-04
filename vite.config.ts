import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {config} from 'dotenv';
import svgr from '@svgr/rollup'
import viteCompression from 'vite-plugin-compression';

config();

// https://vitejs.dev/config/
export default defineConfig({
    cacheDir: './.vite_cache',
    plugins: [
        react(),
        svgr(),
        viteCompression({
            algorithm: 'gzip', // 'gzip' / 'brotliCompress'
            threshold: 10240, // 10KB dan katta fayllarni siqish
        }),
    ],
    define: {
        'process.env': process.env
    },
    optimizeDeps: {
        include: ['framer-motion', 'react-fast-marquee'],
    },
    server: {
        watch: {
            usePolling: true,
        },
    },
    build: {
        target: 'esnext', // Zamonaviy brauzerlar uchun optimallashtirilgan kod yaratish
        sourcemap: false, // Sourcemap'ni o'chirish yuklanishni tezlashtiradi
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
            },
        },
    },
})
