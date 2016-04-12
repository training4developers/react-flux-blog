'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import WidgetTable from './widget-table'; // eslint-disable-line no-unused-vars
import WidgetForm from './widget-form'; // eslint-disable-line no-unused-vars

export default (props) => <div>
	<WidgetTable user={props.user} />
	<WidgetForm user={props.user} />
</div>;
