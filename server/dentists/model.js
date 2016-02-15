import { Reviews } from '../config/db-config.js';
import { Dentists } from '../config/db-config.js'


let addReviews = (reviews, dentist_id) => {
  let addedReviews = reviews.map((review, index) => {
    return Reviews.create({
      comment : review.comment,
      date : review.date,
      rating : review.rating,
      author : review.author,
      dentistId : dentist_id
    });
  })
  return Promise.all(addedReviews)
}

let addDentist = (name) => {
  let firstName = name.split(' ')[1];
  let lastName = name.split(' ')[2];
  return Dentists.findOrCreate({
                      where : {
                        'firstName' : firstName,
                        'lastName'  : lastName
                      }})
}

export function addDentistAndReview (dentistReviews) {
  return addDentist(dentistReviews.name)
              .then((dentist) => {
                return addReviews(dentistReviews.reviews, dentist[0]['id']);
              })
}
