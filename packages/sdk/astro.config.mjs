import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://daks.dev',

  trailingSlash: 'never',

  outDir: 'build',

  // redirects: { '/old': '/new', '/old/[...slug]': '/new/[...slug]' }

  vite: {
    logLevel: 'info',
    optimizeDeps: {
      exclude: ['esm-env']
    }
    // plugins: []
    // define: { 'process.env': process.env }
  },

  integrations: [
    react({
      include: ['**/react/**']
    }),
    svelte({
      include: ['**/svelte/**']
    }),
    tailwind(),
    prefetch({
      throttle: 3
    }),
    compress({
      Logger: 1
    })
  ]
});
