'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars

export default class EventDemo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 1
		};
		this._onClick = this._onClick.bind(this);
	}

	_onClick() {
		this.setState(Object.assign({}, this.state, { counter: this.state.counter + 1 }));
	}

	render() {
		return <div>
			<div>{this.state.counter}</div>
			<button onClick={this._onClick}>Increment</button>
		</div>;
	}

}
