


const getAllTask = (req, res) => {
  res.send('i got all my tasks')
}

const postTask = async (req, res) => {
  const { lastname, username } = req.body
  if (!username || !lastname) {
    res.status(400).json({
      status: 'fail',
      msg: 'plz fill out'
    })
  }
  console.log(lastname, username)
  res.send(`your lastname is ${lastname} and your username is ${username}`)
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