const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
	return ({ opacityVariable, opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${cssVar}), ${opacityValue})`;
		}
		if (opacityVariable !== undefined) {
			return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
		}
		return `rgb(var(${cssVar}))`;
	};
}

const safelist = [
	"grid-cols-4",
	"grid-cols-5",
	"grid-cols-6",
	"grid-cols-7",
	"grid-cols-8",
	//
	"sm:grid-cols-4",
	"sm:grid-cols-5",
	"sm:grid-cols-6",
	"sm:grid-cols-7",
	"sm:grid-cols-8",
	//
	"md:grid-cols-4",
	"md:grid-cols-5",
	"md:grid-cols-6",
	"md:grid-cols-7",
	"md:grid-cols-8",
	//
	"lg:grid-cols-4",
	"lg:grid-cols-5",
	"lg:grid-cols-6",
	"lg:grid-cols-7",
	"lg:grid-cols-8",
	//
	"xl:grid-cols-4",
	"xl:grid-cols-5",
	"xl:grid-cols-6",
	"xl:grid-cols-7",
	"xl:grid-cols-8",
	//
	"2xl:grid-cols-4",
	"2xl:grid-cols-5",
	"2xl:grid-cols-6",
	"2xl:grid-cols-7",
	"2xl:grid-cols-8",
	//
	//
	"space-y-28",
];

module.exports = {
	important: true,
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./*.php",
		"./**/*.php",
	],
	safelist,
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				"2xl": "128px",
			},
		},
		fontFamily: {
			display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
			body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
		},

		extend: {
			colors: {
				primary: {
					50: customColors("--c-primary-50"),
					100: customColors("--c-primary-100"),
					200: customColors("--c-primary-200"),
					300: customColors("--c-primary-300"),
					400: customColors("--c-primary-400"),
					500: customColors("--c-primary-500"),
					6000: customColors("--c-primary-600"),
					700: customColors("--c-primary-700"),
					800: customColors("--c-primary-800"),
					900: customColors("--c-primary-900"),
				},
				secondary: {
					50: customColors("--c-secondary-50"),
					100: customColors("--c-secondary-100"),
					200: customColors("--c-secondary-200"),
					300: customColors("--c-secondary-300"),
					400: customColors("--c-secondary-400"),
					500: customColors("--c-secondary-500"),
					6000: customColors("--c-secondary-600"),
					700: customColors("--c-secondary-700"),
					800: customColors("--c-secondary-800"),
					900: customColors("--c-secondary-900"),
				},
				neutral: {
					50: customColors("--c-neutral-50"),
					100: customColors("--c-neutral-100"),
					200: customColors("--c-neutral-200"),
					300: customColors("--c-neutral-300"),
					400: customColors("--c-neutral-400"),
					500: customColors("--c-neutral-500"),
					6000: customColors("--c-neutral-600"),
					700: customColors("--c-neutral-700"),
					800: customColors("--c-neutral-800"),
					900: customColors("--c-neutral-900"),
				},
			},
		},
	},
	variants: {},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
