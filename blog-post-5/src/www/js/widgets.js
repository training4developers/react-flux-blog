'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import WidgetTable from './components/widget-table'; // eslint-disable-line no-unused-vars
import WidgetForm from './components/widget-form'; // eslint-disable-line no-unused-vars

const widgetsQuery = '{ widgets { id, name, description, color, size, quantity } }';

const addWidget = widget => {

	const insertWidgetMutation = `
		mutation { insertWidget(widget: {
			name: "${widget.name}",
			description: "${widget.description}",
			color: "${widget.color}",
			size: "${widget.size}",
			quantity: ${widget.quantity}
		}) { id, name, description, color, size, quantity } }
	`;

	fetch(`/graphql?query=${insertWidgetMutation}`, { method: 'POST' })
		.then(() => fetch(`/graphql?query=${widgetsQuery}`))
		.then(response => response.json().then(results => render(results.data.widgets)))
		.catch(err => console.error(err));

};

const render = widgets => ReactDOM.render(
	<div>
		<WidgetTable widgets={widgets} />
		<WidgetForm submitWidget={addWidget} />
	</div>
, document.querySelector('main'));

fetch(`/graphql?query=${widgetsQuery}`)
	.then(response => response.json().then(results => render(results.data.widgets)))
	.catch(err => console.error(err));
