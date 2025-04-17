import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Elite Dangerous Journal",
	description: "Elite Dangerous Player Journal reference",

	srcDir: './docs',
	base: process.env.READTHEDOCS_CANONICAL_URL
		? new URL(process.env.READTHEDOCS_CANONICAL_URL).pathname.replace(/\/$/, "")
		: "",

	lastUpdated: true,

	markdown: {
		attrs: {
			disable: true,
		},

		emoji: {
			enabled: [],
			shortcuts: [],
		},
	},

	themeConfig: {
		sidebar: [
			{ text: "Introduction", link: "/" },
			{ text: "File format", link: "/File Format" },
			{ text: "Startup", link: "/Startup" },
			{ text: "Travel", link: "/Travel" },
			{ text: "Combat", link: "/Combat" },
			{ text: "Exploration", link: "/Exploration" },
			{ text: "Trade", link: "/Trade" },
			{ text: "Station services", link: "/Station Services" },
			{ text: "Powerplay", link: "/Powerplay" },
			{ text: "Squadrons", link: "/Squadrons" },
			{ text: "Fleet carriers", link: "/Fleet Carriers" },
			{ text: "New in Odyssey", link: "/New in Odyssey" },
			{ text: "Other events", link: "/Other Events" },
			{ text: "Status file", link: "/Status File" },
			{ text: "Appendix", link: "/Appendix" },
		],

		search: {
			provider: 'local'
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Lombra/elite-api-docs' }
		],

		docFooter: {
			prev: false,
			next: false,
		}
	}
})
