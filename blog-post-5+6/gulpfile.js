const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

const serverAppFiles = ['src/**/*.js','!src/www/**'];
const webAppHtmlFiles = ['src/www/**/*.html'];
const webAppSassFiles = ['src/www/css/**/*.scss'];

const entryPoints = [ './src/www/js/index.js' ];

gulp.task('process-server-app', () =>
	gulp.src(serverAppFiles)
		.pipe(babel({ presets: ['es2015'] }))
		.on('error', console.dir)
		.pipe(gulp.dest('dist')));

gulp.task('process-web-app-html', () =>
	gulp.src(webAppHtmlFiles)
		.pipe(gulp.dest('dist/www')));
		
gulp.task('process-web-app-css', () =>
	gulp.src(webAppSassFiles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/www/css')));	

gulp.task('process-web-app-js', () =>
	Promise.all(entryPoints.map(entryPoint =>
		new Promise((resolve, reject) =>
			gulp.src(entryPoint)
				.pipe(webpackStream({
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
								passPerPreset: true,
								presets: [
									{ 'plugins': [ './build/babelRelayPlugin' ] },
									'react', 'es2015', 'stage-0']
							}
						}]
					},
					plugins: [
						new webpack.ProvidePlugin({
							'Promise': 'exports?global.Promise!es6-promise',
							'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
							'window.fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
						})
					]
				}))
				.on('error', reject)
				.pipe(gulp.dest('dist/www/js'))
				.on('end', resolve)))).catch(err => console.dir(err)));

gulp.task('server', () =>
	fs.readFile('./config.json', (err, data) => {
		if (err) return console.dir(err);
		const config = JSON.parse(data);
		require('./dist/server.js').default(config);
	}));

gulp.task('default', [
	'process-server-app',
	'process-web-app-html',
	'process-web-app-css',
	'process-web-app-js'
]);
