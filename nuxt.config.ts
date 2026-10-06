import { nitroStatic, nuxtHooks, vueChunk } from "./configs/nuxt";

const isProd = process.argv.includes("--prod");
const isDev = process.argv.includes("dev");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/eslint", "@nuxt/fonts", "reka-ui/nuxt", "@nuxt/image", "@nuxtjs/seo"],

	app: { rootAttrs: { class: "isolate" }, head: { htmlAttrs: { class: "dark" } } },
	css: ["~/assets/css/main.css"],
	postcss: { plugins: { "@csstools/postcss-global-data": { files: ["./app/assets/css/breakpoints.css"] }, "postcss-custom-media": {} } },
	components: [{ path: "~/components", pathPrefix: false }],
	fonts: { defaults: { weights: ["400 700"], styles: ["normal"], subsets: ["latin-ext", "latin"] } },

	image: {},
	ogImage: false,
	sitemap: { zeroRuntime: true, credits: false },

	typescript: { typeCheck: isDev, nodeTsConfig: { include: ["../configs/nuxt/**/*.ts"] } },

	vite: isProd ? vueChunk() : {},

	hooks: isProd ? nuxtHooks({ noError: true, noBuildArtifacts: true, noErrorPagesArtifacts: true }) : {},

	nitro: isProd ? nitroStatic({ noError: true, noErrorPages: true }) : nitroStatic(),
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
});
