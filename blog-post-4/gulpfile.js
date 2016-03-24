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

gulp.task("test", ["babel", "copy"], function(done) {

	let
		commandArgs = ['config=tests/intern'],
		env = Object.create(process.env),
		child = require('child_process')
			.spawn('./node_modules/.bin/intern-client', commandArgs, {
    		stdio: 'inherit',
    		env: env
  		});

	child.on('close', function (code) {
    if (code) {
      done(new Error('Intern exited with code ' + code));
    } else {
      done();
    }
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
