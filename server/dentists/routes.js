import { addReviews, getDentistReviews, getAllDentists } from './controller.js';

export default function ( app ) {
  app.get('/:id', getDentistReviews)
  app.get('/', getAllDentists)
  app.post('/', addReviews);
}
