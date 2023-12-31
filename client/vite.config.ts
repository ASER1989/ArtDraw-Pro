/** @type {import('vite').UserConfig} */
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    return {
        root: './',
        base: './',
        resolve: {
            alias: {
                '@client': path.resolve(__dirname, './src'),
            },
        },
        mode,
        server: {
            port: 3127,
            strictPort: true,
            hmr: true
        },
        plugins: [react()],
        build: {
            rollupOptions: {
                input: ["./index.html"]
            },
            outDir: 'dist',
            sourcemap: command === 'serve',
            minify: command === 'build'
        },
    }
});
