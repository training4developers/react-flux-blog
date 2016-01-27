(function() {

	"use strict";

	var Message = React.createClass({
		
		getInitialState: function() {
			return { message: this.props.message };
		},
		
		_messageChange: function(e) {
			this.setState({ message: e.target.value });
		},

		render: function() {
			return (
				<div>
					<span>Message: {this.state.message}</span>
					<br />
					Message: <input type="text" defaultValue={this.state.message} onChange={this._messageChange} />
				</div>
			);
		},

	});

	var mainElement = document.querySelector("main");

	ReactDOM.render(<Message message="Hello World!!" />, mainElement); 
	
})();
