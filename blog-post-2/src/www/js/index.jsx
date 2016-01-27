(function() {

	"use strict";

	let demos = [
		{
			name: "React.js Property Update Demo",
			description: "Demonstrates how React updates the DOM in reaction to re-rendering with new property values.",
			url: "prop-updates.html"
		},
		{
			name: "React.js Class Property Demo",
			description: "A simple class property demonstration with React.js.",
			url: "prop-class-name.html"
		},
		{
			name: "React.js State Update Demo",
			description: "Demonstrates how React updates the DOM in reaction to state changes.",
			url: "state-updates.html"
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
