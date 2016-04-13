'use strict';

const fs = require('fs');
const path = require('path');

const webpack = require('webpack-stream');
const gulp = require('gulp');
const babel = require('gulp-babel');
const jest = require('jest-cli');

const serverAppFiles = ['src/**/*.js','!src/www/**'];
const webAppHtmlFiles = ['src/www/**/*.html'];
const webAppJsFiles = ['./src/www/js/**/*.js'];

const entryPoints = [
	'./src/www/js/index.js',
	'./src/www/js/render-demo.js',
	'./src/www/js/event-demo.js',
	'./src/www/js/input-demo.js'
];

gulp.task('process-server-app', () =>
	gulp.src(serverAppFiles)
		.pipe(babel({
			presets: ['react','es2015']
		}))
		.on('error', console.dir)
		.pipe(gulp.dest('dist')));

gulp.task('process-web-app-html', () =>
	gulp.src(webAppHtmlFiles)
		.pipe(gulp.dest('dist/www')));

gulp.task('process-web-app-js', () =>
	Promise.all(entryPoints.map(entryPoint =>
		new Promise((resolve, reject) =>
			gulp.src(entryPoint)
				.pipe(webpack({
					output: {
						filename: path.basename(entryPoint)
					},
					module: {
						loaders: [{
							test: /\.json$/,
							loader: 'json'
						},{
							test: /\.jsx*$/,
							loader: 'babel-loader',
							exclude: /node_modules/,
							query: {
								presets: ['react', 'es2015']
							}
						}]
					}
				}))
				.on('error', reject)
				.pipe(gulp.dest('dist/www/js'))
				.on('end', resolve)))).catch(err => console.dir(err)));

gulp.task('start-web-server', () =>
	fs.readFile('./config.json', (err, data) => {
		if (err) return console.dir(err);
		const config = JSON.parse(data);
		require('./dist/server.js').default(config.webServer).start().then(function() {
			console.log(`web server started on port ${config.webServer.port}`);
		});
	}));

gulp.task('run-tests', (done) => {
	gulp.src('__tests__/all.js')
		.pipe(webpack({
			target: 'node',
			output: { filename: 'specs.js', publicPath: '/__tests__/' },
			resolve: { alias: { 'sinon': 'sinon/pkg/sinon' } },
			externals: {
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true
			},
			module: {
				noParse: [/node_modules\/sinon\//],
				loaders: [{
					test: /\.json$/,
					loader: 'json'
				},{
					test: /\.jsx*$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: { presets: ['react', 'es2015'] }
				}]
			}
		}))
		.on('error', console.dir)
		.pipe(gulp.dest('__tests__'))
		.on('end', () => {
			jest.runCLI({ '_': ['specs'], coverage: true }, __dirname, () => {
				done();
			});
		});
});

gulp.task('default', [
	'process-server-app',
	'process-web-app-html',
	'process-web-app-js'], () => {

		gulp.watch(serverAppFiles, ['process-server-app']);
		gulp.watch(webAppHtmlFiles, ['process-web-app-html']);
		gulp.watch(webAppJsFiles, ['process-web-app-js']);
	});
