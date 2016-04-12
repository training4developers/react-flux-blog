'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import actions from './actions/actions';
import { createStore, applyMiddleware } from 'redux';
import { fetchWidgets, insertWidget } from './actions/widgets';
import WidgetTable from './components/widget-table'; // eslint-disable-line no-unused-vars
import WidgetForm from './components/widget-form'; // eslint-disable-line no-unused-vars

const insertAndGetWidgets = (widget) =>
	store.dispatch(insertWidget(widget))
		.then(() => store.dispatch(fetchWidgets()));

const widgetsReducer = (state = {
	widgets: [], widget: {}
}, action) => {

	console.log(action.type);

	switch(action.type) {
	case actions.REFRESH_WIDGETS:
		state.widgets = action.widgets;
		return state;
	case actions.REFRESH_WIDGET:
		state.widget = action.widget;
		return state;
	default:
		return state;
	}
};

const thunk = store => next => action =>
	typeof action === 'function' ?
		action(store.dispatch, store.getState) :
		next(action);

const render = () => {
	ReactDOM.render(
	<div>
		<WidgetTable widgets={store.getState().widgets} />
		<WidgetForm submitWidget={insertAndGetWidgets} />
	</div>
, document.querySelector('main'));
};

const store = createStore(widgetsReducer, applyMiddleware(thunk));
store.subscribe(render);

store.dispatch(fetchWidgets());
