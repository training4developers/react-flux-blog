define(["intern!object","React","ReactDOM","app!render-demo-test"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(1),
		!(function webpackMissingModule() { var e = new Error("Cannot find module \"intern/chai!assert\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
		__webpack_require__(3),
		__webpack_require__(4),
		__webpack_require__(5)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (registerSuite, assert, React, ReactDOM, RenderDemoTest) {

		console.log("ran");

		// cut down on typing
		var TestUtils = React.addons.TestUtils;

		registerSuite({

			// name of the unit test suite
			name: "React Components",

			// unit test
			renderDemoTest: function() {

				// renders the React Component into a detached DOM node
				// requires the test to execute within a container which contains a DOM such as a web browser
				// returns a reference to the rendered component
				var renderDemoTest = TestUtils.renderIntoDocument(React.createElement(RenderDemoTest));

				// retrieves the DOM node where the React Component was rendered
				var renderDemoTestDOMNode = ReactDOM.findDOMNode(renderDemoTest);

				console.dir(renderDemoTestDOMNode.textContent);

				// examine the DOM to see if the React Component was rendered as expected
				assert.strictEqual(renderDemoTestDOMNode.textContent, "Hello World!", "initial dom");
			}

		});
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])});;