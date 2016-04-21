import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export const updateUserInputType = new GraphQLInputObjectType({
	name: 'InputUpdateUser',
	description: 'Update a user',
	fields: () => ({
		id: {
			type: GraphQLString,
			description: 'User id'
		},
		name: {
			type: GraphQLString,
			description: 'User name'
		}
	})
});