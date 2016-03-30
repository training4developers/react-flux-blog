define({

	suites: [
		"tests/no-dom/unit/components/render",
		"tests/no-dom/unit/components/event",
		"tests/no-dom/unit/components/input"
	],

	excludeInstrumentation: /^(?:tests|node_modules)\//

});
