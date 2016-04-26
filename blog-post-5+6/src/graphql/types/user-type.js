import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField, connectionArgs, connectionFromPromisedArray } from 'graphql-relay';
import { nodeInterface } from '../node-definitions';
import { getUserWidgets, getUser } from '../../database';
import User from '../../models/user';
import { registerType } from '../type-registry';
import { widgetConnection } from '../connections/widget-connection';

export const userType = new GraphQLObjectType({
	name: 'User',
	description: 'A user',
	fields: () => ({
		id: globalIdField('User'),
		firstName: {
			type: GraphQLString,
			description: 'A user first name'
		},
		lastName: {
			type: GraphQLString,
			description: 'A user last name'
		},
		widgets: {
			type: widgetConnection,
			description: 'A list of widgets',
			args: connectionArgs,
			resolve: ({id}, args) => connectionFromPromisedArray(getUserWidgets(id), args)
		}
	}),
	interfaces: () => [nodeInterface]
});

registerType(User, userType, getUser);