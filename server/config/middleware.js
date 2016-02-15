import cors from 'cors';
import bodyParser from 'body-parser';
import dentistRoute from '../dentists/routes';
import morgan from 'morgan';
import path from 'path';

export default function( app, express ) {
	const dentistRouter = express.Router();
	// 3rd party middleware
	app.use(cors({
		exposedHeaders: ['Link']
	}));

	app.use(bodyParser.urlencoded());
	app.use(morgan('dev'));

	app.use(express.static(path.resolve(__dirname, '../../dist')));
	// app.use(express.static(__dirname + '../../dist'))

	app.use('/dentists', dentistRouter)

	app.use('/', function (req, res) {
		res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
	});

	dentistRoute( dentistRouter );
}
