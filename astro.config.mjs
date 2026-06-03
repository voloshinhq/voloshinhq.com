import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://voloshinhq.com',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
