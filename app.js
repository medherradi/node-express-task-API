const express = require('express')
const app = express()
const tasks = require('./routes/tasks')


// all middleware
app.use(express.json())

app.use('/api/task', tasks)

const port = 3000

app.listen(port, console.log(`server is listening on port ${port}...`)) 