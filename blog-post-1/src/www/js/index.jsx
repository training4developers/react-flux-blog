(function() {

	"use strict";

	let demos = [
		{ name: "Hello World!", description: "Hello World Desc!", url: "hello-world.html" }
	];

	class DemoTable extends React.Component {
		
		render() {
			
			let demoRows = this.props.demos.map(function(demo) {
				return <DemoRow key={demo.name} demo={demo} />;
			});
			
			return (
				<table>
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
