import simplifyConfig from "./simplify.ts";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/eslint", "@nuxt/fonts", "reka-ui/nuxt", "@nuxt/image", "@nuxtjs/seo"],

	app: { rootAttrs: { class: "isolate" }, head: { htmlAttrs: { class: "light" } } },
	css: ["~/assets/css/main.css"],
	components: [{ path: "~/components", pathPrefix: false }],
	fonts: { defaults: { weights: ["400 700"], styles: ["normal"], subsets: ["latin-ext", "latin"] } },

	image: {},
	ogImage: false,
	sitemap: { zeroRuntime: true, credits: false },

	// icon: {
	// 	provider: "none",
	// 	serverBundle: false,
	// 	clientBundle: { scan: true, includeCustomCollections: true, sizeLimitKb: 4096 },
	// 	customCollections: [{ prefix: "<name>", dir: "./app/assets/icons" }],
	// },

	robots: {
		blockAiBots: true,
		blockNonSeoBots: true,
		autoI18n: false,
	},

	site: {
		url: "https://<site url>",
		name: "<name>",
		defaultLocale: "<locale>",
		title: "<title>",
		description: "<description>",
	},

	experimental: {
		appManifest: false,
	},

	...simplifyConfig({}),
});
