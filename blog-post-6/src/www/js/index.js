'use strict';

const demos = [
	{
		name: 'React, Relay & GraphQL Widget Demo',
		description: 'Demonstrates how to build a React application with Relay & GraphQL.',
		url: 'widgets.html'
	}
];

import React from 'react'; // eslint-disable-line no-unused-vars
import DemoTable from './components/demo-table'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

ReactDOM.render(<DemoTable demos={demos} />, document.querySelector('main'));
