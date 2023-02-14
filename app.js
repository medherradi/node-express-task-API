const connectDB = require('./mongodb/connection')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

const mongoDBConnection = process.env.MONGODB_CONNECTION

// all middleware
app.use(express.json())

app.use('/api/task', tasks)


const port = 3000

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
