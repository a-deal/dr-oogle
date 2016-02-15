import express from 'express';
import middleware from './config/middleware.js'
import './lib/worker.js'

const app = express();

let isProduction = process.env.NODE_ENV === 'production';
let port = isProduction ? process.env.PORT : 3000;

middleware( app, express );

const server = app.listen(port, () => {
	console.log(`Started on port ${server.address().port}`);
});
