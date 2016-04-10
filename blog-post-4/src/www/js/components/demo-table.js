'use strict';

import React from 'react';
import DemoRow from './demo-row'; // eslint-disable-line no-unused-vars

export default class DemoTable extends React.Component {

	render() {

		let demoRows = this.props.demos.map(function(demo) {
			return <DemoRow key={demo.name} demo={demo} />;
		});

		return (
			<table className='table table-striped'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Link</th>
					</tr>
				</thead>
				<tbody>
					{demoRows}
				</tbody>
			</table>
		);

	}

}
