import { mutationWithClientMutationId, fromGlobalId, offsetToCursor } from 'graphql-relay';
import { updateWidgetInputType } from './widget-input-type';
import { viewerType } from './viewer-type';
import { WidgetEdge } from '../connections/widget-connection';
import { getViewer, getWidgets, updateWidget } from '../../database';

export const updateWidgetMutationType = mutationWithClientMutationId({
	// name of the mutation
	name: 'UpdateWidget',
	// input data for the mutation, include the widget data from getVariables
	inputFields: {
		widget: { type: updateWidgetInputType }
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
		// extract widget mongo _id from global id
		widget.id = fromGlobalId(widget.id).id;
		// extract numeric owner id from global id
		widget.owner.id = parseInt(fromGlobalId(widget.owner.id).id);
		// save widget with extracted ids
		return updateWidget(widget);		
	} 
});