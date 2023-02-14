const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
    maxlength: [20, 'name must be less than 20 characters']
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task