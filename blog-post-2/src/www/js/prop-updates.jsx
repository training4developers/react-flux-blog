(function() {

	"use strict";

	var HelloWorld = React.createClass({

		render: function() {
			return (
				<div>
					<span>Counter: {this.props.count}</span>
					<br />
					<input type="text" />
				</div>
			);
		},

	});

	var
		mainElement = document.querySelector("main"),
		count = 1;

	setInterval(function() {
		
		ReactDOM.render(<HelloWorld count={count++}></HelloWorld>, mainElement); 
										
	}, 1000);
	
})();
