define([
	"intern!object"
], function (registerSuite) {

	registerSuite({
		"passing test": function () {},
		"failing test": function () {
			throw new Error("Oops");
		}
	});

});
