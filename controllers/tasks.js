


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
  res.send(`${req.params.id}`)
}


module.exports = { getAllTask, postTask, getSingleTask }