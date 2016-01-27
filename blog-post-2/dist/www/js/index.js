var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

	"use strict";

	var demos = [{
		name: "React.js Property Update Demo",
		description: "Demonstrates how React updates the DOM in reaction to re-rendering with new property values.",
		url: "prop-updates.html"
	}, {
		name: "React.js Class Property Demo",
		description: "A simple class property demonstration with React.js.",
		url: "prop-class-name.html"
	}, {
		name: "React.js State Update Demo",
		description: "Demonstrates how React updates the DOM in reaction to state changes.",
		url: "state-updates.html"
	}];

	var DemoTable = function (_React$Component) {
		_inherits(DemoTable, _React$Component);

		function DemoTable() {
			_classCallCheck(this, DemoTable);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(DemoTable).apply(this, arguments));
		}

		_createClass(DemoTable, [{
			key: "render",
			value: function render() {

				var demoRows = this.props.demos.map(function (demo) {
					return React.createElement(DemoRow, { key: demo.name, demo: demo });
				});

				return React.createElement(
					"table",
					{ className: "table table-striped" },
					React.createElement(
						"thead",
						null,
						React.createElement(
							"tr",
							null,
							React.createElement(
								"th",
								null,
								"Name"
							),
							React.createElement(
								"th",
								null,
								"Description"
							),
							React.createElement(
								"th",
								null,
								"Link"
							)
						)
					),
					React.createElement(
						"tbody",
						null,
						demoRows
					)
				);
			}
		}]);

		return DemoTable;
	}(React.Component);

	var DemoRow = function (_React$Component2) {
		_inherits(DemoRow, _React$Component2);

		function DemoRow() {
			_classCallCheck(this, DemoRow);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(DemoRow).apply(this, arguments));
		}

		_createClass(DemoRow, [{
			key: "render",
			value: function render() {

				return React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						this.props.demo.name
					),
					React.createElement(
						"td",
						null,
						this.props.demo.description
					),
					React.createElement(
						"td",
						null,
						React.createElement(
							"a",
							{ href: this.props.demo.url },
							"Run It!"
						)
					)
				);
			}
		}]);

		return DemoRow;
	}(React.Component);

	ReactDOM.render(React.createElement(DemoTable, { demos: demos }), document.querySelector("main"));
})();