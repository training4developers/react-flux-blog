'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars

export default (props) => <table className='table table-striped'>
	<thead>
		<tr>
			<th>Name</th>
			<th>Color</th>
			<th>Size</th>
			<th>Quantity</th>
		</tr>
	</thead>
	<tbody>
		{props.widgets.map(widget => <tr key={widget.id}>
			<td>{widget.name}</td>
			<td>{widget.color}</td>
			<td>{widget.size}</td>
			<td>{widget.quantity}</td>
		</tr>)}
	</tbody>
</table>;
