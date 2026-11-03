import { tmpdir } from "node:os";
import { join } from "node:path";
import type { PlaywrightTestConfig } from "@playwright/test";

export function playwrightReport(): PlaywrightTestConfig {
	return {
		// The HTML report needs the actual/diff images, which the default config deletes.
		preserveOutput: "failures-only",
		reporter: [["html", { outputFolder: join(tmpdir(), "odigo-playwright-report"), open: "on-failure" }]],
	};
}
