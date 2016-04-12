'use strict';

import { GraphQLInputObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const insertWidgetInputType = new GraphQLInputObjectType({
	name: 'InputInsertWidget',
	description: 'An insert widget object',
	fields: () => ({
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
	})
});
