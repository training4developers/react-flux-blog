import React from 'react';
import DropDownComponent from './drop-down';

export default class EditRow extends React.Component {
	
	static defaultState = {
		id: -1, name: '', description: '', color: '',
		size: '', quantity: 0, ownerId: -1
	};

	constructor(props) {
		super(props);
		
		console.dir(props);

		if (props.widget) {
			this.state = Object.assign({}, props.widget, { ownerId: props.widget.owner && props.widget.owner.id || -1 });
		} else {
			this.state = EditRow.defaultState;
		}

		this._onChange = this._onChange.bind(this);
		this._onSave = this._onSave.bind(this);
		this._onCancelEdit = this._onCancelEdit.bind(this);
	}

	_onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	
	_onSave() {
		this.props.onSave(Object.assign({}, this.state, { quantity: parseInt(this.state.quantity, 10) }));
		this.setState(EditRow.defaultState);
	}
	
	_onCancelEdit() {
		if (this.props.onCancelEdit) {
			this.props.onCancelEdit();
		}
		this.setState(EditRow.defaultState);
	}

	render() {
		
		return <tr>
			<td><input className="form-control form-control-sm" type="text" name="name" value={this.state.name} onChange={this._onChange} /></td>
			<td><textarea className="form-control form-control-sm" name="description" value={this.state.description} onChange={this._onChange} rows="5" cols="40"></textarea></td>
			<td><DropDownComponent name='color' items={this.props.colorList} value={this.state.color} onChange={this._onChange} /></td>
			<td><DropDownComponent name='size' items={this.props.sizeList} value={this.state.size} onChange={this._onChange} /></td>
			<td><input className="form-control form-control-sm" type="text" type="number" name="quantity" value={this.state.quantity} onChange={this._onChange} /></td>
			<td><DropDownComponent name='ownerId' items={this.props.userList} value={this.state.ownerId} onChange={this._onChange} /></td>
			<td>
				<button className='btn btn-primary btn-sm' type='button' onClick={this._onSave}>Save</button>
				<button className='btn btn-secondary btn-sm' type='button' onClick={this._onCancelEdit}>Cancel</button>
			</td>
		</tr>;

	}

}
