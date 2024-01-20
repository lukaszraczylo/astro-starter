import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import UnoCSS from 'unocss/astro';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  markdown: {
    shikiConfig: {
      theme: 'monokai',
      langs: [],
      wrap: true
    }
  },
  integrations: [tailwind(), UnoCSS(), sitemap()]
});