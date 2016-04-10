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
	let componentDOMNode;

	beforeEach(() => {
		component = TestUtils.renderIntoDocument(<div><RenderDemo /></div>);
		componentDOMNode = ReactDOM.findDOMNode(component).querySelector('h1');
	});

	it('<RenderDemo /> renders', () => {
		expect(componentDOMNode.textContent).toBe('Hello World!');
	});
	
});
