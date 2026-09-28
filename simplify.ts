import type { DefineNuxtConfig } from "nuxt/config";

/* eslint-disable @typescript-eslint/no-explicit-any */
const IGNORED_ROLLUP_WARNINGS = new Set(["CIRCULAR_DEPENDENCY", "EVAL", "UNRESOLVED_IMPORT", "UNUSED_EXTERNAL_IMPORT"]);

const EMPTY_ERROR_ID = "\0virtual:odigo-empty-error";

const EMPTY_ERROR_COMPONENT = `export default {
	name: "NuxtErrorStub",
	render: () => null,
}`;

type ScopedVitePlugin = {
	name?: string;
	applyToEnvironment?: (environment: unknown, ...args: unknown[]) => { configResolved?: unknown } | null | undefined;
};

function* iteratePlugins(plugins: unknown): Generator<ScopedVitePlugin> {
	for (const plugin of (plugins ?? []) as unknown[]) {
		if (Array.isArray(plugin)) yield* iteratePlugins(plugin);
		else if (plugin && typeof plugin === "object") yield plugin as ScopedVitePlugin;
	}
}

const hasProdFlag = process.argv.includes("--prod");

const simplifiedConfig: DefineNuxtConfig = () => {
	if (hasProdFlag) {
		return {
			vite: {
				build: {
					rolldownOptions: {
						output: {
							codeSplitting: {
								groups: [
									{
										name: "vue",
										test: /node_modules[\\/](vue|@vue)[\\/]/,
										priority: 2,
									},
								],
							},
						},
					},
				},
			},

			hooks: {
				"vite:extendConfig"(config: any) {
					if (config.build?.ssr) {
						const mutable = config as typeof config & { logLevel?: "error" | "warn" | "info" | "silent" };
						mutable.logLevel = "warn";

						const rolldownOptions = config.build.rolldownOptions;
						if (rolldownOptions) {
							rolldownOptions.checks = { ...rolldownOptions.checks, bundlerTimings: false };
						}
					}

					config.plugins?.push({
						name: "odigo:strip-error-page",
						enforce: "pre",
						resolveId(source: string) {
							return /nuxt-error-page\.vue$/.test(source) ? EMPTY_ERROR_ID : null;
						},
						load(id: string) {
							return id === EMPTY_ERROR_ID ? EMPTY_ERROR_COMPONENT : null;
						},
					});

					for (const plugin of iteratePlugins(config.plugins)) {
						if (plugin.name !== "nuxt:devtools:config" || typeof plugin.applyToEnvironment !== "function") continue;

						const applyToEnvironment = plugin.applyToEnvironment.bind(plugin);
						plugin.applyToEnvironment = (environment, ...args) => {
							const scoped = applyToEnvironment(environment, ...args);
							if (scoped && typeof scoped === "object") delete scoped.configResolved;
							return scoped;
						};
					}
				},
			},

			nitro: {
				preset: "static",
				rollupConfig: {
					onwarn(warning: any, defaultHandler: any) {
						if (warning.code && IGNORED_ROLLUP_WARNINGS.has(warning.code)) return;
						defaultHandler(warning);
					},
				},
				hooks: {
					"prerender:generate"(route: any) {
						const routesToSkip = ["/200.html", "/404.html"];
						if (routesToSkip.includes(route.route)) {
							route.skip = true;
						}
					},
				},
			},

			buildId: "static",
		};
	} else {
		return {
			nitro: {
				preset: "static",
			},
		};
	}
};

export default simplifiedConfig;
