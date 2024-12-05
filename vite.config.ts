import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-tests',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'lcov', 'json-summary'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/main.tsx'],
    },
  },
});
