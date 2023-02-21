import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
console.log(process.env.NODE_ENV);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// compilerOptions: {},

	// extensions: ['.svelte'],

	kit: {
		adapter: adapter(),
		// paths: {
		// 	base: '/build'
		// }
	}
};

export default config;
