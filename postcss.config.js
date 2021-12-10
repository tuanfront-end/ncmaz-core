const plugins = {
	tailwindcss: {},
	autoprefixer: {},
};

// ENABLE WHEN RTL MODE
// plugins["postcss-cssjanus"] = {
// 	transformDirInUrl: false,
// 	transformEdgeInUrl: false,
// };

module.exports = () => {
	return {
		plugins,
	};
};
