/*global jest describe beforeEach it expect*/

"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import { shallow } from "enzyme";
import RenderDemo from "../../src/www/js/components/render-demo.jsx"; // eslint-disable-line no-unused-vars

// reference this from the folder location of specs.js
jest.unmock("../src/www/js/components/render-demo.jsx");

describe("<RenderDemo /> No DOM", () => {

	let component;

	beforeEach(() => {
		component = shallow(<RenderDemo />);
	});

	it ("<RenderDemo /> renders", () => {

		expect(component.props().children).toBe("Hello World!");

	});

});
