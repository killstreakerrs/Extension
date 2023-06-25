/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		browser: {
			enabled: false,
			provider: "webdriverio",
			name: "chrome",
		},
		environment: "jsdom",
		globals: true,
		setupFiles: [path.resolve(__dirname, "vitest.setup.ts"), "@vitest/web-worker"],
	},
	base: "./",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@locale": path.resolve(__dirname, "locale"),
			"vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
		},
	},
	plugins: [vue()],
});
