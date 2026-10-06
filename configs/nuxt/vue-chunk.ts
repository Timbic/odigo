import type { NuxtConfig } from "@nuxt/schema";

export function vueChunk() {
	const defaultOptions: NuxtConfig["vite"] = {
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
	};

	return defaultOptions;
}
