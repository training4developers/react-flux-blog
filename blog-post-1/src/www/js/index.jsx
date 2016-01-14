(function() {

	"use strict";

	let demos = [
		{
			name: "React.js Hello World Demo",
			description: "A simple Hello World demonstration of React.js.",
			url: "hello-world.html"
		},
		{
			name: "React.js Hello World JSX Demo",
			description: "A simple Hello World JSX demonstration of React.js.",
			url: "hello-world-jsx.html"
		},
		{
			name: "React.js Hello World ES2015 Demo",
			description: "Demonstrates how to use ES2015 class syntax to create a new component by extending the base React.Component.",
			url: "hello-world-es2015.html"
		},
		{
			name: "React.js JS Properties Demo",
			description: "Demonstrates how to use createElement to pass a properties object to a React Component.",
			url: "props.html"
		},
		{
			name: "React.js JSX Properties Demo",
			description: "Demonstrates how to pass a static property value to a React Component using JSX.",
			url: "jsx-props.html"
		},
		{
			name: "React.js JSX Variable Property Demo",
			description: "Demonstrates how to use JSX to pass a property to a component. The property is set using a JavaScript variable.",
			url: "jsx-varprops.html"
		},
		{
			name: "React.js Child Content Demo",
			description: "Demonstrates how to add a single child content element to a component's element.",
			url: "child-content.html"
		},
		{
			name: "React.js Child Content List Demo",
			description: "Displays an unordered list of child content list items.  The items are added as an array of items as the child content of the component element.",
			url: "child-content-list.html"
		},
		{
			name: "React.js Composable Components Demo",
			description: "Demonstrates how to build a composable component through the use of multiple React Components.",
			url: "composable-components.html"
		}
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
