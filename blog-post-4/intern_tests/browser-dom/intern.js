define({

	loaderOptions: {
		packages: [
			{ name: "app", location: "dist/www/js", main: "app-webpack" },
			{ name: "react", location: "node_modules/react/dist", main: "react-with-addons" },
			{ name: "reactdom", location: "node_modules/react-dom/dist", main: "react-dom" }
		]
	},

	suites: [
		"tests/browser-dom/unit/components/render" //,
		//"tests/browser-dom/unit/components/event",
		//"tests/browser-dom/unit/components/input"
	],

	excludeInstrumentation: /^(?:tests|node_modules)\//

});
