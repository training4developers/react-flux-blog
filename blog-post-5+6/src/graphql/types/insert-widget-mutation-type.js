import { mutationWithClientMutationId, fromGlobalId, offsetToCursor } from 'graphql-relay';
import { insertWidgetInputType } from './widget-input-type';
import { viewerType } from './viewer-type';
import { WidgetEdge } from '../connections/widget-connection';
import { getViewer, getWidgets, insertWidget } from '../../database';

export const insertWidgetMutationType = mutationWithClientMutationId({
	// name of the mutation
	name: 'InsertWidget',
	// input data for the mutation, include the widget data from getVariables
	inputFields: {
		widget: { type: insertWidgetInputType }
	},
	// output data for the mutation, should contain the parent (viewer), and the new widget
	// will be consumed by operation configures in getConfigs
	outputFields: {
		viewer: {
			type: viewerType,
			resolve: () => getViewer(1)
		},
		widgetEdge: {
			type: WidgetEdge,
			resolve: widget => { 
				return getWidgets().then(widgets => {
					const offset = widgets.indexOf(widgets.find(w => w.id === widget.id));
					return {
						cursor: offsetToCursor(offset),
						node: widget
					};
				});
			}
		}
	},
	mutateAndGetPayload: ({widget}) => {
		// extract numeric owner id from global id
		widget.owner.id = parseInt(fromGlobalId(widget.owner.id).id);
		// save widget with extracted ids
		return insertWidget(widget);		
	} 
});