import path from 'path';
import http from 'http';
import express from 'express';
import graphqlHttp from 'express-graphql';
import { schema } from './graphql/schema';

export default function(config) {

	const app = express();
	const server = http.createServer(app);
	const graphqlHttpConfig = (schema) => ({ schema, pretty: true, graphiql: true });

	app.use('/graphql', graphqlHttp(graphqlHttpConfig(schema)));
	app.use('/libs', express.static(path.join(__dirname, '../node_modules')));
	app.use(express.static(config.webServer.folder));

	server.listen(config.webServer.port, () =>
		console.log(`web server running on port ${config.webServer.port}`));
}
