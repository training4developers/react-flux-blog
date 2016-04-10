/*global jest describe it expect beforeEach*/

'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import RenderDemo from '../../src/www/js/components/render-demo.js'; // eslint-disable-line no-unused-vars

// path needs to be relative to the spec location
jest.unmock('../src/www/js/components/render-demo.js');

describe('<RenderDemo /> Mock DOM', () => {

	let component;

	beforeEach(() => {
		// renders the React Component into a detached DOM node
		// requires the test to execute within a container which contains a DOM such as a web browser
		// returns a reference to the rendered component
		component = TestUtils.renderIntoDocument(<RenderDemo />);
	});

	it('<RenderDemo /> renders', () => {

		// examine the DOM to see if the React Component was rendered as expected
		expect(ReactDOM.findDOMNode(component).textContent).toBe('Hello World!');

	});
});
