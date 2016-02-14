import { Reviews } from '../config/db-config.js';
import { Dentists } from '../config/db-config.js'

export function addDentistAndReview (dentistReviews) {
  let firstName = dentistReviews.name.split(' ')[0];
  let lastName = dentistReviews.name.split(' ')[1];
  return Dentists.findOrCreate({
                      where : {
                        'firstName' : firstName,
                        'lastName'  : lastName
                      }})
                      .then((dentist) => {
                        return addReviews(dentistReviews.reviews);
                      })
}

function addReviews (reviews) {
  let addedReviews = reviews.map((review, index) => {
    return Reviews.create({
      comment : review.comment,
      date : review.date,
      rating : review.rating,
      author : review.author
    });
  })
  return Promise.all(addedReviews)
                .then(() => console.log('Createdd!!!!!!'))
                .catch((err) => console.log('No go!!!!! ', err))
}
