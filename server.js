const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
    const message = req.body.message; // Supposons que tu envoies { "message": "ton message ici" }
    console.log('Message reçu :', message);
  res.send('Hello World! test')
})
app.listen(port, () => {
  console.log(`Example app listening on port  -> ${port}`)
})
