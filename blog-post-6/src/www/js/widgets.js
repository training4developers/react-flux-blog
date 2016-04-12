'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import Relay from 'react-relay'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import Widgets from './containers/widgets';
import HomeRoute from './routes/home';

ReactDOM.render(
	<Relay.RootContainer
		Component={Widgets}
		route={new HomeRoute()}
	/>, document.querySelector('main'));
