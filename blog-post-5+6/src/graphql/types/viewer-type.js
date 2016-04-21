import { GraphQLObjectType } from 'graphql';
import { globalIdField, connectionArgs, connectionFromPromisedArray } from 'graphql-relay';
import { nodeInterface } from '../node-definitions';
import { getViewer, getUsers, getWidgets } from '../../database';
import Viewer from '../../models/viewer';
import { registerType } from '../type-registry';
import { userConnection } from '../connections/user-connection';
import { widgetConnection } from '../connections/widget-connection';

export const viewerType = new GraphQLObjectType({
	name: 'Viewer',
	description: 'Logged In User',
	fields: () => ({
		id : globalIdField('Viewer'),
		users: {
			type: userConnection,
			description: 'A list of users',
			args: connectionArgs,
			resolve: (_, args) => connectionFromPromisedArray(getUsers(), args)
		},
		widgets: {
			type: widgetConnection,
			description: 'A list of widgets',
			args: connectionArgs,
			resolve: (_, args) => connectionFromPromisedArray(getWidgets(), args)
		}
	}),
	interfaces: () => [nodeInterface]
});

registerType(Viewer, viewerType, getViewer);