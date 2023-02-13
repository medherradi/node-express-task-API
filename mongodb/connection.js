const mongoose = require('mongoose')


const stringMongodbConnection =
  'mongodb+srv://casablavisa:casablavisa@nodeexpressprojects.nyqxmao.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose
    .connect(stringMongodbConnection, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    })

}

module.exports = connectDB
