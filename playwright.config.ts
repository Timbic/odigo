import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@playwright/test";
import type { ConfigOptions } from "@nuxt/test-utils/playwright";
import { playwrightReport } from "./configs/playwright";

const isReport = process.env.npm_lifecycle_event === "test:report";

/* See https://playwright.dev/docs/test-configuration. */
export default defineConfig<ConfigOptions>({
	testDir: "./test",
	// Keep the CLI as the only output: no HTML report, no test-results/ in the repo.
	reporter: "line",
	outputDir: join(tmpdir(), "odigo-playwright"),
	preserveOutput: "never",
	use: {
		// Do not save failure artifacts either.
		screenshot: "off",
		trace: "off",
		video: "off",
		nuxt: {
			rootDir: fileURLToPath(new URL(".", import.meta.url)),
			// The app builds with the `static` Nitro preset (public output only),
			// but @nuxt/test-utils needs `output/server/index.mjs` to serve the built app.
			nuxtConfig: { nitro: { preset: "node-server" } },
		},
	},
	...(isReport ? playwrightReport() : {}),
});
