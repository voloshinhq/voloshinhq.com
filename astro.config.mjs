import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://voloshinhq.com',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
