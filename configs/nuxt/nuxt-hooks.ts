import type { NuxtConfig } from "@nuxt/schema";

type Hooks = NonNullable<NuxtConfig["hooks"]>;
type ViteExtendConfig = NonNullable<Hooks["vite:extendConfig"]>;
type ViteConfigArg = Parameters<ViteExtendConfig>[0];
type ViteEnvArg = Parameters<ViteExtendConfig>[1];

export type NuxtHooksOptions = {
	noError?: boolean;
	noErrorPagesArtifacts?: boolean;
	noBuildArtifacts?: boolean;
};

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

function quietSsrBuild(config: ViteConfigArg, env: ViteEnvArg) {
	if (env.isServer) {
		const mutable = config as typeof config & { logLevel?: "error" | "warn" | "info" | "silent" };
		mutable.logLevel = "warn";

		const rolldownOptions = config.build?.rolldownOptions;
		if (rolldownOptions) {
			rolldownOptions.checks = { ...rolldownOptions.checks, bundlerTimings: false };
		}
	}
}

function stripErrorPage(config: ViteConfigArg) {
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
}

function quietDevtools(config: ViteConfigArg) {
	for (const plugin of iteratePlugins(config.plugins)) {
		if (plugin.name !== "nuxt:devtools:config" || typeof plugin.applyToEnvironment !== "function") continue;

		const applyToEnvironment = plugin.applyToEnvironment.bind(plugin);
		plugin.applyToEnvironment = (environment, ...args) => {
			const scoped = applyToEnvironment(environment, ...args);
			if (scoped && typeof scoped === "object") delete scoped.configResolved;
			return scoped;
		};
	}
}

export function nuxtHooks(options?: NuxtHooksOptions): Hooks {
	const extendConfig: ViteExtendConfig[] = [];

	if (options?.noError) extendConfig.push(quietSsrBuild);
	if (options?.noErrorPagesArtifacts) extendConfig.push(stripErrorPage);
	if (options?.noBuildArtifacts) extendConfig.push(quietDevtools);

	if (extendConfig.length === 0) return {};

	return {
		"vite:extendConfig"(config, env) {
			for (const handler of extendConfig) handler(config, env);
		},
	};
}
