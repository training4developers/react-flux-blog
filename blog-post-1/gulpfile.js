"use strict";

const
	gulp = require("gulp"),
	babel = require("gulp-babel");


gulp.task("babel", function() {
	
	return gulp.src("src/www/js/**/*.jsx")
		.pipe(babel())
		.on("error", function() {
			console.dir(arguments);
		})
		.pipe(gulp.dest("dist/www/js"));   

});

gulp.task("copy", function() {

	gulp.src("src/*.js")
		.pipe(gulp.dest("dist"));
	
	gulp.src("src/www/**/*.html")
		.pipe(gulp.dest("dist/www"));
		
	gulp.src("src/www/libs/**/*")
		.pipe(gulp.dest("dist/www/libs"));
	
});

gulp.task("server", function() {
	
	var options = {
		port: 8080,
		folder: "dist/www"
	};
	
	require("./dist/server.js")(options).start().then(function() {
		console.log("web server started on port " + options.port);
	});
	
});

gulp.task("default", ["babel", "copy"], function () {

	gulp.watch("src/www/js/**/*.jsx", ["babel"]);

	gulp.watch([
		"src/*.js",
		"src/www/**/*.html",
		"src/www/libs/**/*"
	], ["copy"]);

});