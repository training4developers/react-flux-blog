(function() {

	"use strict";

	var colors = ["red","blue","green"];

	var ColorList = React.createClass({

	  shouldComponentUpdate: function(nextProps, nextState) {
	    return this.props.colors !== nextProps.colors;
	  },

	  render: function() {
	    return (
	      <ul>
	        {this.props.colors.map((color) => {
	          return <li key={color}>{color}</li>;
	        })}
	      </ul>
	    );
	  }

	});

	var ColorForm = React.createClass({

	  getInitialState: function() {
	    return {
	      newColor: undefined
	    };
	  },

	  _onChange: function(e) {
	    this.setState({ newColor: e.target.value });
	  },

	  _onClick: function(e) {
	    this.props.addColor(this.state.newColor);
	    this.setState({ newColor: undefined });
	  },

	  render: function() {
	    return (
	      <form>
	        <label>
	          New Color
	          <input type="text" name="newColor"
	            value={this.state.newColor} onChange={this._onChange} />
	          <button type="button" onClick={this._onClick}>Add Color</button>
	        </label>
	      </form>
	    );
	  }


	});

	var Color = React.createClass({

	  getInitialState: function() {
	    return {
	      colors: new Immutable.List(this.props.colors)
	    };
	  },

	  _addColor: function(newColor) {
	    this.setState({
	      colors: this.state.colors.push(newColor)
	    });
	  },

	  render: function() {
	    return (
	      <div>
	        <ColorList colors={this.state.colors} />
	        <ColorForm addColor={this._addColor} />
	       </div>
	    );
	  }

	});

	var mainElement = document.querySelector("main");

	ReactDOM.render(<Color colors={colors} />, mainElement);

})();
