import { Author } from '../config/db-config.js';

export function addAuthor (author) {
  return Author.findOrCreate({ where : {
    firstName : author.firstName,
    lastName : author.lastName
  }});
}

export function addReview (review) {

}
