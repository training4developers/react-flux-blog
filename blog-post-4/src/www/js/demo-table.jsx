"use strict";

const
	React = require("react"),
	DemoRow = require("./demo-row"),
	DemoTable = module.exports = class extends React.Component {

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

	};
