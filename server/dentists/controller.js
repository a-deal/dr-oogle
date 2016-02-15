import { findAndParseReviews } from '../lib/util.js';
import { addDentistAndReview, getReviewsByDentistID } from './model.js';

export function addReviews ( req, res, next ) {
    findAndParseReviews(req.body.url)
      .then((formattedReviews) => {
        addDentistAndReview(formattedReviews);
        res.status(201).send(formattedReviews);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
}

export function getDentistReviews ( req, res, next ) {
  getReviewsByDentistID(req.params)
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
}

export function getAllDentistReviews ( req, res, next ) {

}
