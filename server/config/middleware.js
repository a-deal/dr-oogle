import cors from 'cors';
import bodyParser from 'body-parser';
import reviewRoute from '../reviews/routes';
import dentistRoute from '../dentists/routes';
import morgan from 'morgan';

export default function( app, express ) {
	const dentistRouter = express.Router();
	// 3rd party middleware
	app.use(cors({
		exposedHeaders: ['Link']
	}));

	app.use(bodyParser.urlencoded());
	app.use(morgan('dev'));

	app.use('/dentists', dentistRouter)

	dentistRoute( dentistRouter );
}
