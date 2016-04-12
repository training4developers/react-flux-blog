'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import Relay from 'react-relay'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import Widgets from './containers/widgets';
//import WidgetForm from './containers/widget-form';
import HomeRoute from './routes/home';
//import NodeRoute from './routes/node';

ReactDOM.render(
	<Relay.RootContainer
		Component={Widgets}
		route={new HomeRoute()}
	/>, document.querySelector('main'));

// ReactDOM.render(
// 	<Relay.RootContainer
// 		Component={WidgetTable}
// 		route={new HomeRoute()}
// 	/>, document.querySelector('main'));

// ReactDOM.render(
// 	<Relay.RootContainer
// 		Component={WidgetForm}
// 		route={new NodeRoute()}
// 	/>, document.querySelector('main'));
