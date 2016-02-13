import { createComment } from './controller.js';
import { getComments } from './controller.js';

export default function ( app ) {
  app.get('/', getComments)
  app.post('/', createComment)
}
