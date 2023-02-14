const Task = require('../model/taskModel')


const getAllTask = (req, res) => {
  res.send('i got all my tasks')
}

const postTask = async (req, res) => {
  const { name, completed } = req.body
  const task = await Task.create({ name, completed })
  res.status(201).json({ task, msg: `${task.name} task has been created successfully` })
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