/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HTMLAttributes } from "vue";

export interface IconProps extends HTMLAttributes {
	name: string;
	mode?: "svg" | "css";
	size?: string | number;
	class?: any;
	customize?: (content: string, name?: string, prefix?: string, provider?: string) => string | boolean | null;
}
