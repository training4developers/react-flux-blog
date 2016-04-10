'use strict';

import DemoRow from './demo-row'; // eslint-disable-line no-unused-vars

export default (props) => {
	return <table className='table table-striped'>
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Link</th>
			</tr>
		</thead>
		<tbody>
			{props.demos.map(demo => <DemoRow key={demo.name} demo={demo} />)}
		</tbody>
	</table>;
};
