'use strict';

import React from 'react';

export default class InputDemo extends React.Component {

	constructor(props) {
		super(props);
		this.state = Object.assign({}, this.props);
		this._onChange = this._onChange.bind(this);
	}

	_onChange(e) {
		this.setState(Object.assign({}, this.state, { [e.target.name]: e.target.value }));
	}

	render() {
		return <form>
			<label>
				Message: <input name='message' value={this.state.message} onChange={this._onChange} />
			</label>
		</form>;
	}

}
