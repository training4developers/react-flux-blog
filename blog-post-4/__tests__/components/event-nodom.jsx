/*global jest describe it beforeEach expect*/

"use strict";

jest.unmock("../src/www/js/components/event-demo.jsx");

import React from "react"; //eslint-disable-line no-unused-vars
import { shallow } from "enzyme";
import EventDemo from "../../src/www/js/components/event-demo.jsx"; //eslint-disable-line no-unused-vars

describe("EventDemo Component with No DOM", () => {

	let component;

	beforeEach(() => {
		component = shallow(<EventDemo />);
	});

	it("state should update when button is clicked", () => {

		expect(component.state().counter).toBe(1);
		expect(component.childAt(0).props().children).toBe(1);

		component.find("button").simulate("click");

		// component.find("button").props().onClick({
		// 	preventDefault() {}
		// });

		component.render();
		expect(component.state().counter).toBe(2);
		expect(component.childAt(0).props().children).toBe(2);

	});

});
