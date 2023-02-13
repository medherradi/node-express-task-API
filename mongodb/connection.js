const mongoose = require('mongoose')


const stringMongodbConnection =
  'mongodb+srv://casablavisa:casablavisa@nodeexpressprojects.nyqxmao.mongodb.net/?retryWrites=true&w=majority'


mongoose
  .connect(stringMongodbConnection)
  .then(() => console.log('connection ...'))
  .catch((error) => console.log(error))