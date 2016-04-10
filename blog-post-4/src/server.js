'use strict';

import http from 'http';
import express from 'express';

export default function(options) {

	const app = express();
	const server = http.createServer(app);

	app.use('/libs', express.static('../node_modules'));
	app.use(express.static(options.folder));

	return {
		start: function() {

			return new Promise((resolve, reject) => {
				server.listen(options.port, (err) => {

					if (err) {
						reject(err);
						return;
					}

					resolve();

				});
			});

		},
		stop: function() {

			return new Promise((resolve, reject) => {
				server.close((err) => {

					if (err) {
						reject(err);
						return;
					}

					resolve();

				});
			});

		}
	};
}
