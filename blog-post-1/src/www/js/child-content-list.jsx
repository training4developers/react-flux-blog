(function() {

	"use strict";

	var ItemList = React.createClass({

		render: function() {
			return React.createElement("ul", null, [
				React.createElement("li", null, "Item 1"),
				React.createElement("li", null, "Item 2"),
				React.createElement("li", null, "Item 3"),
			]);
		},

	});

	var mainElement = document.querySelector("main");

	ReactDOM.render(React.createElement(ItemList), mainElement);
	
})();