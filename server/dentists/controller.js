import { findAndParseReviews } from '../lib/util.js';
import { addDentistAndReview, getReviewsByDentistID, getDentists } from './model.js';

export function addReviews ( req, res, next ) {
    findAndParseReviews(req.body.url)
      .then((formattedReviews) => {
        addDentistAndReview(formattedReviews);
        res.status(201).send(formattedReviews);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
}

export function getDentistReviews ( req, res, next ) {
  getReviewsByDentistID(req.params)
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch((err) => {
      res.status(401).send(err);
    })
}

export function getAllDentists ( req, res, next ) {
  getDentists()
    .then((dentists) =>{
      res.status(200).send(dentists);
    })
    .catch((err) => {
      res.status(401).send(err);
    })
}
