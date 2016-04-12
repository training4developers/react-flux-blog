'use strict';

import actions from './actions';
import { getWidgets, insertWidget as insertWidgetDb } from '../data/widgets';

export const fetchWidgetsRequest = () => ({
	type: actions.FETCH_WIDGETS_REQUEST
});

export const fetchWidgetsError = (err) => ({
	type: actions.FETCH_WIDGETS_ERROR,
	err: err
});

export const refreshWidgets = widgets => ({
	type: actions.REFRESH_WIDGETS,
	widgets: widgets
});

export const fetchWidgets = () => {

	return (dispatch) => {

		dispatch(fetchWidgetsRequest());

		return getWidgets()
			.then(widgets => {
				dispatch(refreshWidgets(widgets));
			})
			.catch(err => dispatch(fetchWidgetsError(err)));

	};

};

export const insertWidgetRequest = (widget) => ({
	type: actions.INSERT_WIDGET_REQUEST,
	widget: widget
});

export const insertWidgetError = (err) => ({
	type: actions.INSERT_WIDGET_ERROR,
	err: err
});

export const refreshWidget = (widget) => ({
	type: actions.REFRESH_WIDGET,
	widget: widget
});

export const insertWidget = (widget) => {

	return (dispatch) => {

		dispatch(insertWidgetRequest(widget));

		return insertWidgetDb(widget)
			.then(widget => dispatch(refreshWidget(widget)))
			.catch(err => dispatch(insertWidgetError(err)));

	};

};
