'use strict';

import { GraphQLObjectType } from 'graphql';
import { insertWidgetMutation } from './insert-widget-mutation';

export const mutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		insertWidget: insertWidgetMutation
	})
});
