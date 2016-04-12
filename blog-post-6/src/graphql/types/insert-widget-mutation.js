'use strict';

import { userType } from './user-type';
import { insertWidgetInputType } from './insert-widget-input-type';
import { WidgetEdge } from '../widget-connection';
import { mutationWithClientMutationId, cursorForObjectInConnection } from 'graphql-relay';
import { insertWidget, getUser, getWidgets } from '../../database';

export const insertWidgetMutation = mutationWithClientMutationId({
	name: 'InsertWidget',
	inputFields: {
		widget: { type: insertWidgetInputType }
	},
	outputFields: {
		user: {
			type: userType,
			resolve: () => getUser(1)
		},
		newWidgetEdge: {
			type: WidgetEdge,
			resolve: widget => {
				console.log("made it here...", widget);
				return { cursor: cursorForObjectInConnection(getWidgets(), widget),
				node: widget };
			}
		}
	},
	mutateAndGetPayload: ({widget}) => {
		return insertWidget(widget);
	}
});
