'use strict';

import User from '../models/user';
import Widget from '../models/widget';
import { userType } from './types/user-type';
import { widgetType } from './types/widget-type';
import { getUser, getWidget } from '../database';
import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

export const { nodeInterface, nodeField } =
	nodeDefinitions(globalId => {
		const {type, id} = fromGlobalId(globalId);
		if (type === 'User') {
			return getUser(id);
		} else if (type === 'Widget') {
			return getWidget(id);
		} else {
			return null;
		}
	}, obj => {
		if (obj instanceof User) {
			return userType;
		} else if (obj instanceof Widget) {
			return widgetType;
		} else {
			return null;
		}
	});
