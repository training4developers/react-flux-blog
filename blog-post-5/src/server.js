"use strict";

import http from "http";
import express from "express";

export default function(options) {

	let
		app = express(),
		server = http.createServer(app);

	app.use("/libs", express.static("../node_modules"));

	app.use(express.static(options.folder));

	return {
		start: function() {

			return new Promise(function(resolve, reject) {
				server.listen(options.port, function(err) {

					if (err) {
						reject(err);
						return;
					}

					resolve();

				});
			});

		},
		stop: function() {

			return new Promise(function(resolve, reject) {
				server.close(function(err) {

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
