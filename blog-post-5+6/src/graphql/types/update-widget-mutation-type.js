import { mutationWithClientMutationId, fromGlobalId, offsetToCursor } from 'graphql-relay';
import { updateWidgetInputType } from './widget-input-type';
import { viewerType } from './viewer-type';
import { WidgetEdge } from '../connections/widget-connection';
import { getViewer, getWidgets, updateWidget } from '../../database';

export const updateWidgetMutationType = mutationWithClientMutationId({
	name: 'UpdateWidget',
	inputFields: {
		widget: { type: updateWidgetInputType }
	},
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
		widget.id = parseInt(fromGlobalId(widget.id).id, 10);
		widget.ownerId = parseInt(fromGlobalId(widget.ownerId).id, 10);
		return updateWidget(widget);		
	} 
});