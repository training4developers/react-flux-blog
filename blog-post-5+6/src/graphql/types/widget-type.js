import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../node-definitions';
import { userType } from './user-type';
import { colorType } from './color-type';
import { sizeType } from './size-type';
import { getWidget, getUser } from '../../database';
import Widget from '../../models/widget';
import { registerType } from '../type-registry';

export const widgetType = new GraphQLObjectType({
	name: 'Widget',
	description: 'A widget',
	fields: () => ({
		id: globalIdField('Widget'),
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
		owner: {
			type: userType,
			description: 'The widget\'s user',
			resolve: ({ownerId}) => getUser(ownerId)
		}
	}),
	interfaces: () => [nodeInterface]
});

registerType(Widget, widgetType, getWidget);
