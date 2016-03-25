define([
  'intern!object',
  'intern/chai!assert',
	'intern/dojo/node!react/dist/react-with-addons',
	'intern/dojo/node!../../../dist/www/js/render-demo-test'
], function (registerSuite, assert, React, RenderDemoTest) {

	// cut down on typing
	var TestUtils = React.addons.TestUtils;

  registerSuite({

		// name of the unit test suite
		name: 'React Components',

		// unit test
    renderDemoTest: function() {

			const shallowRenderer = TestUtils.createRenderer();
			shallowRenderer.render(React.createElement(RenderDemoTest));

			const component = shallowRenderer.getRenderOutput();

			assert.strictEqual(component.props.children, "Hello World!", "initial dom");
    }

  });
});
