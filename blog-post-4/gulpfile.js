"use strict";

const
	webpack = require("webpack-stream"),
	gulp = require("gulp"),
	babel = require("gulp-babel"),
	jest = require("jest-cli");

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
		console.log(`web server started on port ${options.port}`);
	});

});

// update web pack to use babel loader
gulp.task("webpack", ["babel", "copy"], function() {

	return gulp.src("./dist/www/js/index.js")
		.pipe(webpack({
			output: {
				filename: "app-webpack.js"
			}
		}))
		.on("error", function() {
			console.dir(arguments);
		})
		.pipe(gulp.dest("./dist/www/js"));

});

gulp.task("test", function(done) {

	gulp.src("./__tests__/all.js")
		.pipe(webpack({

			output: {
				filename: "specs.js",
				publicPath: "/__tests__/"
			},
			resolve: {
				alias: {
					"sinon": "sinon/pkg/sinon"
				}
			},
			externals: {
				//"jsdom": "window",
				"cheerio": "window",
				//"sinon": "sinon",
				"react/lib/ExecutionEnvironment": true,
				"react/lib/ReactContext": true
			},
			module: {
				noParse: [
					/node_modules\/sinon\//
				],
				loaders: [{
					test: /.jsx$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					query: {
						presets: ["es2015", "react"]
					}
				}, {
					test: /\.js$/,
					exclude: /node_modules/,
					loader: "babel-loader",
					query: {
						presets: ["es2015"]
					}
				}]
			}
		}))
		.on("error", function() {
			console.dir(arguments);
		})
		.pipe(gulp.dest("./__tests__"))
		.on("end", function() {
			jest.runCLI({
				"_": ["specs"]
			}, __dirname, function() {
				done();
			});
		});

});

gulp.task("default", ["webpack"], function() {

	gulp.watch("src/www/js/**/*.jsx", ["webpack"]);

	gulp.watch([
		"src/*.js",
		"src/www/**/*.html",
		"src/www/libs/**/*"
	], ["copy"]);

});
