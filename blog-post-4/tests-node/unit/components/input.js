define([
  'intern!object',
  'intern/chai!assert',
	'intern/dojo/node!skin-deep',
	'intern/dojo/node!react/dist/react-with-addons',
	'intern/dojo/node!../../../dist/www/js/input-demo-test'
], function (registerSuite, assert, sd, React, InputDemoTest) {

	"use strict";

	// cut down on typing
	var TestUtils = React.addons.TestUtils;

  registerSuite({

		// name of the unit test suite
		name: 'React Components',

		// unit test
		inputDemoTest: function() {

			let
				message = "Original Value!",
				newMessage = "New Value!";

			const
				tree = sd.shallowRender(React.createElement(InputDemoTest, { message: message })),
				instance = tree.getMountedInstance();

			let
				vdom = tree.getRenderOutput();

			assert.strictEqual(instance.props.message, message, "initial props");
			assert.strictEqual(instance.state.message, message, "initial state");
			assert.strictEqual(vdom.props.children.props.children[1].props.value, message, "initial dom value");

			tree.subTree("input").props.onChange({
				preventDefault() {}, target: { name: "message", value: newMessage }
			});

			vdom = tree.getRenderOutput();

			assert.strictEqual(instance.props.message, message, "after change props");
			assert.strictEqual(instance.state.message, newMessage, "after change state");
			assert.strictEqual(vdom.props.children.props.children[1].props.value, newMessage, "after change dom value");
		}

  });
});
