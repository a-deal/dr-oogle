import cors from 'cors';
import bodyParser from 'body-parser';
import reviewRoute from '../reviews/routes';
import morgan from 'morgan';

export default function( app, express ) {
	const reviewRouter = express.Router();
	// 3rd party middleware
	app.use(cors({
		exposedHeaders: ['Link']
	}));

	app.use(bodyParser.urlencoded());
	// app.use(bodyParser.json());


	app.use(morgan('dev'));

	app.use('/reviews', reviewRouter);

	reviewRoute( reviewRouter );
}
