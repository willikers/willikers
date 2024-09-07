import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html',
          dest: '.',
        },
      ],
    }),
  ],
  server: {
    port: 4200,
  },
  resolve: {
    alias: [
      { find: '@ui', replacement: path.resolve(__dirname, 'src/ui') },
      { find: '@examples', replacement: path.resolve(__dirname, 'src/examples') },
      { find: 'prismjs', replacement: path.resolve(__dirname, '../node_modules/prismjs') },
    ],
  },
  build: {
    outDir: '../dist/app',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          utils: ['rxjs', 'lodash'],
          components: ['react-markdown', 'react-syntax-highlighter'],
        },
      },
    },
  },
});
