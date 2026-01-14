// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  site: "https://insydian.netlify.app",

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  integrations: [preact()],
});
// https://astro.build/config
//export default defineConfig({});