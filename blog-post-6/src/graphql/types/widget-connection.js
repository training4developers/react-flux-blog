'use strict';

import { widgetType } from './widget-type';
import { connectionDefinitions } from 'graphql-relay';

export const { connectionType: widgetConnection } =
	connectionDefinitions({name: 'Widget', nodeType: widgetType});
