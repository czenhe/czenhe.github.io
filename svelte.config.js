import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    alias: {
      $lib: path.resolve('./src/lib'),
      $notion: path.resolve('./src/lib/notion'),
      $components: path.resolve('./src/lib/components'),
      $utils: path.resolve('./src/lib/utils'),
      $types: path.resolve('./src/lib/types'),
      $styles: path.resolve('./src/assets/styles'),
      $images: path.resolve('./src/assets/images')
    }
  }
};

export default config;
