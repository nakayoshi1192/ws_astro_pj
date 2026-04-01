// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config

export default defineConfig({
  site: 'https://nakayoshi1192.github.io',
  base: '/ws_astro_pj',
  integrations: [react()],
});
