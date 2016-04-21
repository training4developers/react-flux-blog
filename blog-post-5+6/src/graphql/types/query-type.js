import { GraphQLObjectType } from 'graphql';
import { viewerType } from './viewer-type';
import { nodeField } from '../node-definitions';
import { getViewer } from '../../database';

export const queryType = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		node: nodeField,
		viewer: {
			type: viewerType,
			resolve: () => getViewer(1)
		}
	})
});