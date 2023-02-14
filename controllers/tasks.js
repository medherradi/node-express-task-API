const Task = require('../model/taskModel')


const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find()
    if (tasks.length < 1) {
      res.status(200).json({
        msg: 'No task to dsplay',
        count: tasks.length,
        tasks
      })
    }
    res.status(200).json({
      msg: `There ${tasks.length === 1 ? 'is one task' : `are ${tasks.length} tasks`}`,
      count: tasks.length,
      tasks
    })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}

const postTask = async (req, res) => {
  try {
    const { name, completed } = req.body
    const task = await Task.create({ name, completed })
    res.status(201).json({ task, msg: `${task.name} task has been created successfully` })
  } catch (error) {
    console.log(error)
    res.status(400).json({ msg: error.errors.name.message })
  }
}

const getSingleTask = async (req, res) => {
  console.log(req.params)
  res.send(`get task ${req.params.id}`)
}

const updateTask = async (req, res) => {
  res.send(`Im updating a task ${req.params.id}`)
}

const deleteTask = async (req, res) => {
  res.send(`im deleting a task ${req.params.id}`)
}


module.exports = {
  getAllTask,
  postTask,
  getSingleTask,
  updateTask,
  deleteTask
}