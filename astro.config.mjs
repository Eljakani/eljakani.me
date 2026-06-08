import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eljakani.me',
  integrations: [
    react(), 
    icon(), 
    mdx(),
    sitemap()
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
