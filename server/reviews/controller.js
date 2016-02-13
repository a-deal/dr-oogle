import { addAuthor } from './model.js'
import { addReview } from './model.js'

export function createComment (req, res, next) {
  console.log('Request is', req.body)
  const author = {
    firstName : req.body.firstName,
    lastName  : req.body.lastName
  }
    addAuthor(author)
      .then(() => {
        res.status(200).send('Author created!')
      })
}

export function getComments (req, res, next) {

}
