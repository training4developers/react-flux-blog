'use strict';

import React from 'react';

module.exports = React.createClass({

	getInitialState: function() {
		return {
			message: this.props.message
		};
	},

	_onChange: function(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	},

	render: function() {

		return (
			<form>
				<label>
					Message:
					<input name='message' value={this.state.message} onChange={this._onChange} />
				</label>
			</form>
		);

	}

});
