/*global jest describe it expect beforeEach*/

"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import EventDemo from "../../src/www/js/components/event-demo.jsx"; // eslint-disable-line no-unused-vars

// reference this from the folder location of specs.js
jest.unmock("../src/www/js/components/event-demo.jsx");

describe("EventDemo Component Tests with Mock DOM", () => {

	let component;

	beforeEach(() => {
		component = TestUtils.renderIntoDocument(<EventDemo />);
	});

	it("state should update when button is clicked", () => {

		var componentDOMNode = ReactDOM.findDOMNode(component);

		// after the React Component has been rendered, the props and/or state can be examined
		expect(component.state.counter).toBe(1);
		expect(componentDOMNode.children[0].textContent).toBe("1");

		// simulates an event on the DOM similar to a user action, so that the changes resulting
		// from the event can be tested
		TestUtils.Simulate.click(componentDOMNode.children[1]);

		// after the event, the React Component should reflect any props, state and DOM changes that would
		// have occurred from a real user initiated event
		expect(component.state.counter).toBe(2);
		expect(componentDOMNode.children[0].textContent).toBe("3");

	});

});
