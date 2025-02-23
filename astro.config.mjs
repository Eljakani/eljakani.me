import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false
    }), 
    icon(), 
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  build: {
    exclude: ['**/node_modules/**', '**/.dist/**']
  },
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  image: {
    service: {
      entrypoint: '@astrojs/cloudflare/assets'
    }
  }
});