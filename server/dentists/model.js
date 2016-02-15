import { Reviews, Dentists, dentist } from '../config/db-config.js';

let addReviews = (reviews, dentistId) => {
  let addedReviews = reviews.map((review, index) => {
    return Reviews.create({
        comment : review.comment,
        date : review.date,
        rating : review.rating,
        author : review.author,
        dentistId : dentistId
      })
  })
  return Promise.all(addedReviews)
}

let addDentist = (name) => {
  let firstName = name.split(' ')[1];
  let lastName = name.split(' ')[2];
  return Dentists.findOrCreate({ where : {
                        'firstName' : firstName,
                        'lastName'  : lastName
                        }
                      })
}

export function getReviewsByDentistID (id) {
  return Reviews.findAll({ where : { dentistId : id.id }})
                .then((reviews) => {
                  return { reviews : reviews };
                })
}

export function getDentists () {
  return Dentists.findAll()
                 .then((dentists) => {
                   return dentists.map((dentist) => {
                     return {
                       id : dentist.id,
                       name : dentist.firstName + ' ' + dentist.lastName
                     }
                   })
                 })
}


export function addDentistAndReview (dentistReviews) {
  return addDentist(dentistReviews.name)
              .then((dentist) => {
                return addReviews(dentistReviews.reviews, dentist[0]['id']);
              })
}
