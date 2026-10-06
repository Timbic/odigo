import type { NuxtConfig } from "@nuxt/schema";

const IGNORED_ROLLUP_WARNINGS = new Set(["CIRCULAR_DEPENDENCY", "EVAL", "UNRESOLVED_IMPORT", "UNUSED_EXTERNAL_IMPORT"]);

export type NitroStaticOptions = {
	noError?: boolean;
	noErrorPages?: boolean;
};

export function nitroStatic(options?: NitroStaticOptions) {
	const defaultOptions: NuxtConfig["nitro"] = {
		preset: "static",
	};

	if (options?.noError) {
		defaultOptions.rollupConfig = {
			onwarn(warning, defaultHandler) {
				if (warning.code && IGNORED_ROLLUP_WARNINGS.has(warning.code)) return;
				defaultHandler(warning);
			},
		};
	}

	if (options?.noErrorPages) {
		defaultOptions.hooks = {
			"prerender:generate"(route) {
				const routesToSkip = ["/200.html", "/404.html"];
				if (routesToSkip.includes(route.route)) {
					route.skip = true;
				}
			},
		};
	}

	return defaultOptions;
}
