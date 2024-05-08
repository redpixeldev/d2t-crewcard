import { defineConfig } from 'astro/config';

import tailwindcss from '@astrojs/tailwind';
import tailwindcssNesting from 'tailwindcss/nesting';

export default defineConfig({
	compressHTML: false,
	build: {
		assets: 'assets',
		format: 'file',
	},
	vite: {
		build: {
			assetsInlineLimit: 0,
			rollupOptions: {
				output: {
					entryFileNames: 'assets/main.js',
					assetFileNames: 'assets/main[extname]',
				},
			},
		},
		css: {
			postcss: {
				plugins: [tailwindcssNesting()],
			},
		},
	},
	integrations: [
		tailwindcss({
			applyBaseStyles: false,
		}),
	],
});
