import { svelte } from '@sveltejs/vite-plugin-svelte';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss({
      mode: 'svelte-scoped',
    }),
    svelte({
      emitCss: false,
    }),
  ],
  server: {
    open: 'widget-a.html',
  },
  build: {
    rollupOptions: {
      input: {
        'widgets/widget-a': 'src/widgets/widget-a/index.ts',
        'widget-a': 'widget-a.html',

        'widgets/widget-b': 'src/widgets/widget-b/index.ts',
        'widget-b': 'widget-b.html',
      },
      output: {
        entryFileNames: ({ name }) => {
          if (name.includes('/')) {
            return '[name].js';
          }

          return 'assets/[name].[hash].js';
        },
      },
    },
  },
});
