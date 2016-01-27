(function() {

	"use strict";

	var Message = React.createClass({

		render: function() {
			return React.createElement("span", {
				className: this.props.className
			}, this.props.message);
		},

	});

	var mainElement = document.querySelector("main");
	var sampleMessage = React.createElement(Message, {
		className: "critical",
		message: "This is a sample message!!"
	});

	ReactDOM.render(sampleMessage, mainElement);
	
})();
