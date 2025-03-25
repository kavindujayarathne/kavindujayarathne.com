// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// @ts-ignore
// import rehypeFigure from 'rehype-figure';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  site: 'https://kavindujayarathne.com',
  integrations: [sitemap()],
  markdown: {
    // shikiConfig: {
    //   theme: 'github-dark-default',
    // },
    syntaxHighlight: 'shiki',
    // shikiConfig: {
    //   // For more themes, visit https://shiki.style/themes
    //   themes: { light: 'min-light', dark: 'night-owl' },
    //   wrap: true,
    // },
    // remarkPlugins: [],
    // rehypePlugins: [],
    // image: {
    //   // Used for all Markdown images; not configurable per-image
    //   // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    //   experimentalLayout: 'responsive',
    // },
  },
});
