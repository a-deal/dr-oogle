export default function ( app ) {
  app.get('/', ( req, res ) => {
      res.status(200).send('Received!!')
  })
  app.post('/', ( req, res ) => {
      res.status(200).send('Post inbound yay!')
  })
}
