'use strict';

const widgetsQuery = '{ widgets { id, name, description, color, size, quantity } }';

export const getWidgets = () => fetch(`/graphql?query=${widgetsQuery}`)
	.then(response => response.json())
	.then(results => results.data.widgets);

export const insertWidget = widget => {

	const insertWidgetMutation = `
		mutation { insertWidget(widget: {
			name: "${widget.name}",
			description: "${widget.description}",
			color: "${widget.color}",
			size: "${widget.size}",
			quantity: ${widget.quantity}
		}) { id, name, description, color, size, quantity } }
	`;

	return fetch(`/graphql?query=${insertWidgetMutation}`, { method: 'POST' });
};
