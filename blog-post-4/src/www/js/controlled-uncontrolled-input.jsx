(function() {
	
	"use strict";

	var Main = React.createClass({

	  getInitialState: function() {
	    return { message: "Hello World!" };
	  },

	  _onChange: function(e) {
	    this.setState({
	      message: e.target.value
	    });
	  },

	  render: function() {
	    return (
	      <form>
	        <div>
	          <label>
	            Controlled Input Message:
	            <input name="message1" value={this.state.message}
	              onChange={this._onChange} />
	          </label>
	        </div>
	        <div>
	          <label>
	            Uncontrolled Input Message:
	            <input name="message2" defaultValue={this.state.message}
	              onChange={this._onChange} />
	          </label>
	        </div>
	      </form>
	    );
	  }

	});

	var mainElement = React.createElement(Main);

	ReactDOM.render(mainElement, document.querySelector("main"));

})();
