const connectDB = require('./mongodb/connection')
const express = require('express')
const app = express()
const errorHandler = require('./middleware/errorhandler')
const tasks = require('./routes/tasksrouter')
require('dotenv').config()

const mongoDBConnection = process.env.MONGODB_CONNECTION

// all middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/tasks', tasks)

app.all('*', async (req, res) => {
  res.status(404).send('Route does not exist')
})

app.use(errorHandler)

const port = process.env.PORT || 3000

const startDB = async () => {
  try {
    await connectDB(mongoDBConnection)
    console.log('connection to mongodb atlas ...')
    app.listen(port, console.log(`server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

startDB()
