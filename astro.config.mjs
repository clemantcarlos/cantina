// @ts-check
import { defineConfig } from 'astro/config';

// DEPENDENCIES
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// SERVER
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), react()]
});