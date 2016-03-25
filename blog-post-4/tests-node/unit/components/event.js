define([
  'intern!object',
  'intern/chai!assert',
	'intern/dojo/node!skin-deep',
	'intern/dojo/node!react/dist/react-with-addons',
	'intern/dojo/node!../../../dist/www/js/event-demo-test'
], function (registerSuite, assert, sd, React, EventDemoTest) {

	"use strict";

	// cut down on typing
	var TestUtils = React.addons.TestUtils;

  registerSuite({

		// name of the unit test suite
		name: 'React Components',

		// unit test
		eventDemoTest: function() {

			const
			 	tree = sd.shallowRender(React.createElement(EventDemoTest)),
				instance = tree.getMountedInstance();

			let
				vdom = tree.getRenderOutput();

			assert.strictEqual(instance.state.counter, 1, "initial state");
			assert.strictEqual(vdom.props.children[0].props.children, 1, "initial dom value");

			tree.subTree("button").props.onClick({
				preventDefault() {}
			});

			vdom = tree.getRenderOutput();
			assert.strictEqual(instance.state.counter, 2, "after click state");
			assert.strictEqual(vdom.props.children[0].props.children, 2, "after click dom value");
    }

  });
});
