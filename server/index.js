import express from 'express';
import middleware from './config/middleware.js'

const app = express();

middleware( app, express );

const server = app.listen(process.env.PORT || 8080, () => {
	console.log(`Started on port ${server.address().port}`);
});
