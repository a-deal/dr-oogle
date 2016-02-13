exports default function ( app ) {
  app.get('/', ( req, res) => {
    res.status(200).send('In dentist resource')
  })
}
