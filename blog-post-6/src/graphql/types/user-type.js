'use strict';

import { nodeInterface } from './../node-definitions';
import { widgetConnection } from './../widget-connection';
import { GraphQLObjectType } from 'graphql';
import { globalIdField, connectionArgs, connectionFromArray } from 'graphql-relay';
import { getWidgets } from '../../database';

export const userType = new GraphQLObjectType({
	name: 'User',
	description: 'A user object',
	fields: () => ({
		id: globalIdField('User'),
		widgets: {
			type: widgetConnection,
			description: 'A user\'s widgets',
			args: connectionArgs,
			resolve: (_, args) => connectionFromArray(getWidgets(args), args)
		}
	}),
	interfaces: () => [nodeInterface]
});
