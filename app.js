const express = require('express')
const app = express()


// all routes
app.get('/', async (req, res) => {
  res.send('hello')
})

const port = 3000

app.listen(port, console.log(`server is listening on port ${port}...`)) 