import { resolve } from 'path';

import { defineConfig } from 'vite';

import * as PACKAGE from './package.json';

const { devDependencies } = PACKAGE;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(devDependencies)],
    },
    sourcemap: true,
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
});
