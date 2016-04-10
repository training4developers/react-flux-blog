/*global jest describe it expect beforeEach*/

'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import EventDemo from '../../src/www/js/components/event-demo.js'; // eslint-disable-line no-unused-vars

// reference this from the folder location of specs.js
jest.unmock('../src/www/js/components/event-demo.js');

describe('<EventDemo /> Mock DOM', () => {

	let component;
	let componentDOMNode;

	beforeEach(() => {
		component = TestUtils.renderIntoDocument(<EventDemo />);
		componentDOMNode = ReactDOM.findDOMNode(component);
	});

	it('<EventDemo /> state should update when button is clicked', () => {

		expect(component.state.counter).toBe(1);
		expect(componentDOMNode.children[0].textContent).toBe('1');

		TestUtils.Simulate.click(componentDOMNode.children[1]);

		expect(component.state.counter).toBe(2);
		expect(componentDOMNode.children[0].textContent).toBe('2');

	});

});
