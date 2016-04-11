'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import WidgetTable from './components/widget-table'; // eslint-disable-line no-unused-vars
import WidgetForm from './components/widget-form'; // eslint-disable-line no-unused-vars
import { getWidgets, insertWidget } from './data/widgets';

const insertAndGetWidgets = (widget) => {
	return insertWidget(widget)
		.then(() => getWidgets())
		.then(widgets => render(widgets))
		.catch(err => console.error(err));
};

const render = widgets => ReactDOM.render(
	<div>
		<WidgetTable widgets={widgets} />
		<WidgetForm submitWidget={insertAndGetWidgets} />
	</div>
, document.querySelector('main'));

getWidgets()
	.then(widgets => render(widgets))
	.catch(err => console.error(err));
