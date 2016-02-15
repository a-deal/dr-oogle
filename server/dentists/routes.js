import { addReviews, getDentistReviews, getAllDentistReviews } from './controller.js';

export default function ( app ) {
  app.get('/:id', getDentistReviews)
  app.get('/', getAllDentistReviews)
  app.post('/', addReviews);
}
