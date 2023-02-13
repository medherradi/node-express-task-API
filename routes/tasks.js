const express = require('express')
const router = express.Router()
const { getAllTask, postTask } = require('../controllers/tasks')




router.route('/').get(getAllTask).post(postTask)
// router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router