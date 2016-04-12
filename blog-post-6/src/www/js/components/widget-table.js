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
		{props.user.widgets.edges.map(edge => <tr key={edge.node.id}>
			<td>{edge.node.name}</td>
			<td>{edge.node.color}</td>
			<td>{edge.node.size}</td>
			<td>{edge.node.quantity}</td>
		</tr>)}
	</tbody>
</table>;
