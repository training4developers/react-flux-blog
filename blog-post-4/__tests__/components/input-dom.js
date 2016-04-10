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

		expect(component.props.message).toBe(message);
		expect(component.state.message).toBe(message);

		let inputDOMNode = componentDOMNode.querySelector('input');
		expect(inputDOMNode.value).toBe(message);

		let newMessage = 'Goodbye';
		inputDOMNode.value = newMessage;
		TestUtils.Simulate.change(inputDOMNode);

		expect(component.props.message).toBe(message);
		expect(component.state.message).toBe(newMessage);
		expect(componentDOMNode.querySelector('input').value).toBe(newMessage);

	});

});
