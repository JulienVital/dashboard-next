const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
    console.log("connect")
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port  -> ${port}`)
})
