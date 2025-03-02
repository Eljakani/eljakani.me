import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify/functions';

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
  adapter: netlify(),
});