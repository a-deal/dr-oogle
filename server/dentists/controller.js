import { findAndParseReviews } from '../lib/util.js';
import { addDentistAndReview } from './model.js';

export function getReviews ( req, res, next ) {
    findAndParseReviews(req.body.url)
      .then((formattedReviews) => {
        return addDentistAndReview(formattedReviews);
      })
      .then(() => {
        res.status(200).send('Review created!!!')
      })
      .catch((err) => {
        res.status(400).send(err);
      });
}
