'use strict';

const demos = [
	{
		name: 'React.js GraphQL Widget Demo',
		description: 'Demonstrates how to build a React application with GraphQL.',
		url: 'widgets.html'
	},
	{
		name: 'React.js Redux GraphQL Widget Demo',
		description: 'Demonstrates how to build a React application with Redux and GraphQL.',
		url: 'widgets-redux.html'
	}
];

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import DemoTable from './components/demo-table'; // eslint-disable-line no-unused-vars

ReactDOM.render(<DemoTable demos={demos} />, document.querySelector('main'));
