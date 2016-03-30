define([
	"intern!object",
	"intern/chai!assert",
	"react",
	"reactdom",
	"app!render-demo-test"
], function (registerSuite, assert, React, ReactDOM, RenderDemoTest) {

	console.log("ran");

	// cut down on typing
	var TestUtils = React.addons.TestUtils;

	registerSuite({

		// name of the unit test suite
		name: "React Components",

		// unit test
		renderDemoTest: function() {

			// renders the React Component into a detached DOM node
			// requires the test to execute within a container which contains a DOM such as a web browser
			// returns a reference to the rendered component
			var renderDemoTest = TestUtils.renderIntoDocument(React.createElement(RenderDemoTest));

			// retrieves the DOM node where the React Component was rendered
			var renderDemoTestDOMNode = ReactDOM.findDOMNode(renderDemoTest);

			console.dir(renderDemoTestDOMNode.textContent);

			// examine the DOM to see if the React Component was rendered as expected
			assert.strictEqual(renderDemoTestDOMNode.textContent, "Hello World!", "initial dom");
		}

	});
});
