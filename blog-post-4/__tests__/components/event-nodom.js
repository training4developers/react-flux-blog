/*global jest describe it beforeEach expect*/

'use strict';

import React from 'react'; //eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import EventDemo from '../../src/www/js/components/event-demo.js'; //eslint-disable-line no-unused-vars

jest.unmock('../src/www/js/components/event-demo.js');

describe('<EventDemo /> No DOM', () => {

	let component;

	beforeEach(() => {
		component = shallow(<EventDemo />);
	});

	it('<EventDemo /> state should update when button is clicked', () => {

		expect(component.state().counter).toBe(1);
		expect(component.childAt(0).props().children).toBe(1);

		// simulate a click
		component.find('button').simulate('click');

		component.update();
		expect(component.state().counter).toBe(2);
		expect(component.childAt(0).props().children).toBe(2);

	});

});
