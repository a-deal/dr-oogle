import { getReviews } from './controller.js'

export default function ( app ) {
  app.get('/', ( req, res) => {
    res.status(200).send('In dentist resource')
  })
  app.post('/', getReviews);
}
