"use strict";

let demos = [
	{
		name: "React.js Uncontrolled Input Demo",
		description: "Demonstrates how the value attribute of an input control is not updated to reflect the typed in text.",
		url: "uncontrolled-input.html"
	},
	{
		name: "React.js Controlled / Uncontrolled Input Demo",
		description: "Demonstrates the differences between controlled and uncontrolled input components in React.",
		url: "controlled-uncontrolled-input.html"
	},
	{
		name: "React.js Propagation Demo",
		description: "Demonstrates how React updates the DOM in reaction to form changes.",
		url: "state-propagation.html"
	},
	{
		name: "React.js Immutability Demo",
		description: "Demonstrates how to use Immutable.js to efficiently propagate state changes from parent React components to their children.",
		url: "state-immutability.html"
	}
];

import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import DemoTable from "./demo-table"; // eslint-disable-line no-unused-vars

ReactDOM.render(<DemoTable demos={demos} />, document.querySelector("main"));
