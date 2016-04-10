'use strict';

const demos = [
	{
		name: 'React.js Render Demo',
		description: 'Demonstrates how React renders the DOM for the purposes of unit testing.',
		url: 'render-demo.html'
	},
	{
		name: 'React.js Event Demo',
		description: 'Demonstrates how React handles events for the purposes of unit testing.',
		url: 'event-demo.html'
	},
	{
		name: 'React.js Input Demo',
		description: 'Demonstrates how React handles input events and state change for the purposes of unit testing.',
		url: 'input-demo.html'
	}
];

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import DemoTable from './components/demo-table'; // eslint-disable-line no-unused-vars

ReactDOM.render(<DemoTable demos={demos} />, document.querySelector('main'));
