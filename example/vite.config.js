import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    esbuild: {
        // MenuBook's source files use JSX but keep the .js extension.
        // Vite's default esbuild transform excludes *.js, so both
        // include and exclude must be overridden together.
        loader: 'jsx',
        include: /\.jsx?$/,
        exclude: /node_modules/,
    },
    optimizeDeps: {
        // the dependency-scan pass has its own esbuild config
        esbuildOptions: {
            loader: { '.js': 'jsx' },
        },
    },
    server: {
        fs: {
            // allow importing MenuBook's source directly from ../src
            allow: ['..'],
        },
    },
});
