/*global jest describe beforeEach it expect*/

'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import InputDemo from '../../src/www/js/components/input-demo.js'; // eslint-disable-line no-unused-vars

jest.unmock('../src/www/js/components/input-demo.js');

describe('<InputDemo /> Mock DOM', () => {

	let component;
	let componentDOMNode;
	let message = 'Hello';

	beforeEach(() => {
		component = TestUtils.renderIntoDocument(<InputDemo message={message} />);
		componentDOMNode = ReactDOM.findDOMNode(component);
	});

	it('<InputDemo /> updates state and input with new value', () => {

		// as mentioned above an example of testing the props
		expect(component.props.message).toBe(message);
		expect(component.state.message).toBe(message);

		// using query selector allows for an easy way to find child DOM nodes from the root DOM node
		// of the React Component
		let inputDOMNode = componentDOMNode.querySelector('input');
		expect(inputDOMNode.value).toBe(message);

		// to simulate events such as typing input, first modify the DOM, then trigger the event
		let newMessage = 'Goodbye';
		inputDOMNode.value = newMessage;
		TestUtils.Simulate.change(inputDOMNode);

		// props should be immutable; therefore, testing the props did NOT change after an event
		// is a good practice to ensure they are not changing and really are immutable
		expect(component.props.message).toBe(message);
		expect(component.state.message).toBe(newMessage);
		expect(componentDOMNode.querySelector('input').value).toBe(newMessage);

	});

});
