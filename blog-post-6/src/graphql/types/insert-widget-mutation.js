'use strict';

import Widget from '../../models/widget';
import { widgetType } from './widget-type';
import { insertWidgetInputType } from './insert-widget-input-type';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { insertWidget } from '../../database';

export const insertWidgetMutation = mutationWithClientMutationId({
	name: 'InsertWidget',
	inputFields: {
		widget: { type: insertWidgetInputType }
	},
	outputFields: {
		widget: {
			type: widgetType,
			resolve: widget => new Widget(widget)
		}
	},
	mutateAndGetPayload: ({widget}) => {
		widget._id = fromGlobalId(widget.id).id;
		return insertWidget(widget);
	}
});
