'use strict';

import { nodeInterface } from './node-definitions';
import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

export const widgetType = new GraphQLObjectType({
	name: 'Widget',
	description: 'A widget object',
	fields: () => ({
		id: globalIdField('Widget'),
		name: {
			type: GraphQLString,
			description: 'The name of a widget'
		},
		description: {
			type: GraphQLString,
			description: 'The description of a widget'
		},
		color: {
			type: GraphQLString,
			description: 'The color of a widget'
		},
		size: {
			type: GraphQLString,
			description: 'The size of a widget'
		},
		quantity: {
			type: GraphQLInt,
			description: 'The quantity of a widget'
		}
	}),
	interfaces: () => [nodeInterface]
});
