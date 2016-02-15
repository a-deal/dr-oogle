import { Reviews, Dentists, dentist } from '../config/db-config.js';

let addReviews = (reviews, firstName, lastName) => {
  let addedReviews = reviews.map((review, index) => {
    return Reviews.findOrCreate({
      where : {
        comment : review.comment,
        date : review.date,
        rating : review.rating,
        author : review.author,
        dentist : {
          firstName : firstName,
          lastName : lastName
        }
      }
    },
    { include : [ dentist ]}
  );
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
  return Reviews.findAll({ where : { dentistId : id }})
                .then((reviews) => {
                  return { reviews : reviews };
                })
}


export function addDentistAndReview (dentistReviews) {
  return addDentist(dentistReviews.name)
              .then((dentist) => {
                console.log(dentist);
                return addReviews(dentistReviews.reviews, dentist[0].dataValues.firstName, dentist[0].dataValues.lastName);
              })
}
