import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"custom-bg":
					"linear-gradient(rgba(6, 35, 73, 0.64), rgba(24, 141, 249, 0)) ,url('/img/hero.jpg')",
			},
			boxShadow: {
				custom: "0px 14px 34px -10px rgba(126, 126, 126, 0.35)",
			},
			backgroundColor: {
				primary: "var(--color-primary)",
			},
			textColor: {
				primary: "var(--color-primary)",
			},
			borderColor: {
				primary: "var(--color-primary)",
			},
			spacing: {
				"10.85": "10.85rem", // Half of 217px
				"91.25": "91.25rem", // Additional offset
			},
			inset: {
				"custom-top": "calc(50% - 10.85rem - 91.25rem)",
			},
		},

		plugins: [],
	},
};

export default config;
