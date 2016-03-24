(function() {

	"use strict";

	let demos = [
		{
			name: "React.js Uncontrolled Input Demo",
			description: "Demonstrates how the value attribute of an input control is not updated to reflect the typed in text.",
			url: "uncontrolled-input.html"
		},
		{
			name: "React.js Controlled / Uncontrolled Input Demo",
			description: "Demonstrates the differences between controlled and uncontrolled input components in React.",
			url: "controlled-uncontrolled-input.html"
		},
		{
			name: "React.js Propagation Demo",
			description: "Demonstrates how React updates the DOM in reaction to form changes.",
			url: "state-propagation.html"
		},
		{
			name: "React.js Immutability Demo",
			description: "Demonstrates how to use Immutable.js to efficiently propagate state changes from parent React components to their children.",
			url: "state-immutability.html"
		},
	];

	class DemoTable extends React.Component {

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

	class DemoRow extends React.Component {

		render() {

			return (
				<tr>
					<td>{this.props.demo.name}</td>
					<td>{this.props.demo.description}</td>
					<td><a href={this.props.demo.url}>Run It!</a></td>
				</tr>
			);

		}
	}

	ReactDOM.render(<DemoTable demos={demos} />, document.querySelector("main"));

})();
