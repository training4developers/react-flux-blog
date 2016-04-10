/*global jest describe beforeEach it expect*/

'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import InputDemo from '../../src/www/js/components/input-demo.js'; // eslint-disable-line no-unused-vars

// reference this from the folder location of specs.js
jest.unmock('../src/www/js/components/input-demo.js');

describe('<InputDemo /> No DOM', () => {

	const message = 'Original Value!';
	const newMessage = 'New Value!';

	let component;

	beforeEach(() => {
		component = shallow(<InputDemo message={message} />);
	});

	it('<InputDemo /> updates state and input with new value', () => {

		expect(component.state().message).toBe(message);
		expect(component.childAt(0).childAt(1).props().value).toBe(message);

		// simulate a click
		component.find('input').simulate('change', { target: { name: 'message', value: newMessage }});
		component.update();

		expect(component.state().message).toBe(newMessage);
		expect(component.childAt(0).childAt(1).props().value).toBe(newMessage);

	});

});
