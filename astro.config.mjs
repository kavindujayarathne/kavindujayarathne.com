// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  site: 'https://kavindujayarathne.com',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
  },
  experimental: {
    fonts: [
      {
        name: 'Google Sans Code',
        cssVariable: '--font-google-sans-code',
        provider: fontProviders.google(),
        fallbacks: ['monospace'],
        weights: [300, 400, 500, 600, 700],
        styles: ['normal', 'italic'],
      },
      {
        name: 'Caveat',
        cssVariable: '--font-caveat',
        provider: fontProviders.google(),
        fallbacks: ['cursive'],
        weights: [400, 500, 600, 700],
        styles: ['normal'],
      },
    ],
  },
});
