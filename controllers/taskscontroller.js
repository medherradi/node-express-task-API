const Task = require('../model/taskModel')
const asyncHandler = require('../middleware/asynchandler')


const getAllTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find()
  if (tasks.length < 1) {
    return res.status(200).json({
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
})

const postTask = asyncHandler(async (req, res) => {
  const { name, completed } = req.body
  const task = await Task.create({ name, completed })
  res.status(201).json({ task, msg: `${task.name} task has been created successfully` })
  //} catch (error) {
  //  console.log(error)
  //  res.status(400).json({ msg: error.errors.name.message })
  //}
})

const getSingleTask = async (req, res) => {
  console.log(req.params)
  const { id } = req.params
  try {
    const task = await Task.findById({ _id: id })
    if (!task) {
      return res.status(404).json({ msg: `No task found with the given id : ${id}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(400).json({ msg: `No task found with the given id : ${id}` })
  }
}

const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { name, completed } = req.body
  // we can use another method findOneAndUpdate 
  const task = await Task.findByIdAndUpdate({ _id: id },
    { name, completed },
    { new: true, runValidators: true })
  if (!task) {
    return res.status(404).json({ msg: `No task found with the given id : ${id}` })
  }
  // task.name = name
  // task.completed = completed
  // task.save()
  res.status(201).json({ task, msg: `task ${task.name} has been updated` })
})

const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params
  const task = await Task.findByIdAndDelete({ _id: id })
  if (!task) {
    return res.status(404).json({ msg: `No task found with the given id : ${id}` })
  }
  res.status(200).json({ msg: `task ${task.name} has been deleted` })
})


module.exports = {
  getAllTask,
  postTask,
  getSingleTask,
  updateTask,
  deleteTask
}