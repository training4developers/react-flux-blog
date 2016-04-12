'use strict';

import React from 'react';
import Relay from 'react-relay';
import InsertWidgetMutation from '../mutations/insert-widget-mutation';

export default class WidgetForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = Object.assign({ widget: { name: '', description: '', color: '', size: '', quantity: 0 } }, props);
		this._onChange = this._onChange.bind(this);
		this._onClick = this._onClick.bind(this);
	}

	_onChange(e) {
		const widget = Object.assign({}, this.state.widget, { [e.target.name]: e.target.value });
		this.setState(Object.assign({}, this.state, { widget }));
	}

	_onClick() {
		Relay.Store.commitUpdate(
			new InsertWidgetMutation(Object.assign({ user: this.props.user, widget: null }, this.state.widget)));
			//new InsertWidgetMutation(Object.assign({ user: { id: 1 }, widget: null }, this.state.widget)));
		this.setState({ widget: { name: '', description: '', color: '', size: '', quantity: 0 } });
	}

	render() {

		return <form>
			<div>
				<label>
					Name: <input name='name' value={this.state.widget.name} onChange={this._onChange} />
				</label>
			</div>
			<div>
				<label>
					Description: <textarea name='description' value={this.state.widget.description} onChange={this._onChange}></textarea>
				</label>
			</div>
			<div>
				<label>
					Color: <select name='color' value={this.state.widget.color} onChange={this._onChange}>
						<option value="">Select One...</option>
						<option value="blue">Blue</option>
						<option value="red">Red</option>
						<option value="green">Green</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					Size: <select name='size' value={this.state.widget.size} onChange={this._onChange}>
						<option value="">Select One...</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					Quantity: <input name='quantity' type='number' value={this.state.widget.quantity} onChange={this._onChange} />
				</label>
			</div>
			<button type="button" onClick={this._onClick}>Add Widget</button>
		</form>;
	}

}
