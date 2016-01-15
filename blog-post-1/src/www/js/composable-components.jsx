(function() {

	"use strict";

	var widgets = [
		{ name: "Widget 1", color: "blue", size: "small", qty: 10 },
		{ name: "Widget 2", color: "red", size: "large", qty: 20 },
		{ name: "Widget 3", color: "green", size: "medium", qty: 15 }
	];

	var WidgetTable = React.createClass({
		render: function() {
			
			var widgetRows = this.props.widgets.map(function(widget) {
				return React.createElement(WidgetRow, { widget: widget });
			});
		
			return (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Color</th>
							<th>Size</th>
							<th>Qty</th>
						</tr>
					</thead>
					<tbody>
						{widgetRows}
					</tbody>
				</table>
			);
		}
		
	});

	var WidgetRow = React.createClass({
		render: function() {
			return (
				<tr>
					<td>{this.props.widget.name}</td>
					<td>{this.props.widget.color}</td>
					<td>{this.props.widget.size}</td>
					<td>{this.props.widget.qty}</td>
				</tr>
			);
		}
	});

	var mainElement = document.querySelector("main");

	ReactDOM.render(<WidgetTable widgets={widgets} />, mainElement);

	ReactDOM.render(React.createElement(WidgetTable, {widgets:widgets}), mainElement);
	
})();