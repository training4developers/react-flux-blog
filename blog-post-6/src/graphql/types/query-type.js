'use strict';

import { userType } from './user-type';
import { nodeField } from './node-definitions';
import { GraphQLObjectType } from 'graphql';
import { getUser } from '../../database';

export const queryType = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		node: nodeField,
		user: {
			type: userType,
			resolve: () => getUser(1)
		}
	})
});
