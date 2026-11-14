// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { Locale, LocaleTag } from '@/i18n/consts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sanchezpizarro.com',
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: Locale.En,
        locales: LocaleTag,
      },
    }),
  ],
  i18n: {
    locales: Object.values(Locale),
    defaultLocale: Locale.En,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: [200, 300, 400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: [400],
      styles: ['normal', 'italic'],
      fallbacks: ['serif'],
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        // TODO: Remove this when finally migrate to Bootstrap 5
        scss: {
          quietDeps: true,
          silenceDeprecations: [
            'import',
            'slash-div',
            'global-builtin',
            'color-functions',
          ],
        },
      },
    },
  },
});
