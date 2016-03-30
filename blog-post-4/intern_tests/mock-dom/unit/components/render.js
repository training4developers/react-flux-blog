define([
  'intern!object',
  'intern/chai!assert',
  'app/components/renderDemoTest',
	'app/components/eventDemoTest',
	'app/components/inputDemoTest',
	'react',  // React with Mixins includes the Test Utilities, review intern.js in the parent folder to see how these are loaded
	'reactdom'
], function (registerSuite, assert, RenderDemoTest, EventDemoTest, InputDemoTest, React, ReactDOM) {

	// cut down on typing
	var TestUtils = React.addons.TestUtils;

  registerSuite({

		// name of the unit test suite
		name: 'React Components',

		// unit test
    renderDemoTest: function() {

			// renders the React Component into a detached DOM node
			// requires the test to execute within a container which contains a DOM such as a web browser
			// returns a reference to the rendered component
			var renderDemoTest = TestUtils.renderIntoDocument(React.createElement(RenderDemoTest));

			// retrieves the DOM node where the React Component was rendered
			var renderDemoTestDOMNode = ReactDOM.findDOMNode(renderDemoTest);

			// examine the DOM to see if the React Component was rendered as expected
			assert.strictEqual(renderDemoTestDOMNode.textContent, "Hello World!!", "initial dom");
    },

		// unit test
		eventDemoTest: function() {

			var eventDemoTest = TestUtils.renderIntoDocument(React.createElement(EventDemoTest));
			var eventDemoTestDOMNode = ReactDOM.findDOMNode(eventDemoTest);

			// after the React Component has been rendered, the props and/or state can be examined
			assert.strictEqual(eventDemoTest.state.counter, 1, "initial state");
			assert.strictEqual(eventDemoTestDOMNode.children[0].textContent, "1", "initial dom");

			// simulates an event on the DOM similar to a user action, so that the changes resulting
			// from the event can be tested
			TestUtils.Simulate.click(eventDemoTestDOMNode.children[1]);

			// after the event, the React Component should reflect any props, state and DOM changes that would
			// have occurred from a real user initiated event
			assert.strictEqual(eventDemoTest.state.counter, 2, "after click state");
			assert.strictEqual(eventDemoTestDOMNode.children[0].textContent, "2", "after click dom");
    },

		// unit test
		inputDemoTest: function() {

			var
				message = "Original Value!",
				newMessage = "New Value!",
				inputDemoTest = TestUtils.renderIntoDocument(React.createElement(InputDemoTest, { message: message })),
				inputDemoTestDOMNode = ReactDOM.findDOMNode(inputDemoTest),
				inputDOMNode = null;

			// as mentioned above an example of testing the props
			assert.strictEqual(inputDemoTest.props.message, message, "initial props");
			assert.strictEqual(inputDemoTest.state.message, message, "initial state");

			// using query selector allows for an easy way to find child DOM nodes from the root DOM node
			// of the React Component
			inputDOMNode = inputDemoTestDOMNode.querySelector("input");

			assert.strictEqual(inputDOMNode.value, message, "initial dom");

			// to simulate events such as typing input, first modify the DOM, then trigger the event
			inputDOMNode.value = newMessage;
			TestUtils.Simulate.change(inputDOMNode);

			// props should be immutable; therefore, testing the props did NOT change after an event
			// is a good practice to ensure they are not changing and really are immutable
			assert.strictEqual(inputDemoTest.props.message, message, "after change props");
			assert.strictEqual(inputDemoTest.state.message, newMessage, "after change state");
			assert.strictEqual(inputDemoTestDOMNode.querySelector("input").value, newMessage, "after change dom");
		}

  });
});
