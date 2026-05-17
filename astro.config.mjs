import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrkap.eu',
  integrations: [sitemap(),],

  vite: {
    plugins: [tailwindcss()],
  },
});
