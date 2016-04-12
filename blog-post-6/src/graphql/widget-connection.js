'use strict';

import { widgetType } from './types/widget-type';
import { connectionDefinitions } from 'graphql-relay';

export const { connectionType: widgetConnection } =
	connectionDefinitions({name: 'Widget', nodeType: widgetType});
