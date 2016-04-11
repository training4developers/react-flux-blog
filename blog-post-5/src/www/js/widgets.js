'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import WidgetTable from './components/widget-table'; // eslint-disable-line no-unused-vars
import WidgetForm from './components/widget-form'; // eslint-disable-line no-unused-vars

const widgetsQuery = '{ widgets { id, name, description, color, size, quantity } }';

fetch(`/graphql?query=${widgetsQuery}`).then(response => {

	response.json().then(results => {
		ReactDOM.render(
			<div>
				<WidgetTable widgets={results.data.widgets} />
				<WidgetForm />
			</div>
		, document.querySelector('main'));
	});

});
