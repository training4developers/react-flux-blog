import { GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLID } from 'graphql';
import { colorType } from './color-type';
import { sizeType } from './size-type';

const fields = {
	name: {
		type: GraphQLString,
		description: 'The widget name'
	},
	description: {
		type: GraphQLString,
		description: 'The widget description'
	},
	color: {
		type: colorType,
		description: 'The widget color'
	},
	size: {
		type: sizeType,
		description: 'The widget size'
	},
	quantity: {
		type: GraphQLInt,
		description: 'The widget quantity'
	},
	ownerId: {
		type: GraphQLID,
		description: 'The widget\'s user'
	}
};

export const insertWidgetInputType = new GraphQLInputObjectType({
	name: 'InputInsertWidget',
	description: 'A widget',
	fields: () => fields
});

export const updateWidgetInputType = new GraphQLInputObjectType({
	name: 'InputUpdateWidget',
	description: 'A widget',
	fields: () => Object.assign({}, fields, { id: { type: GraphQLID, description: 'Widget id to update' } })
});
