const express = require('express')
const router = express.Router()
const allTask = require('../controllers/taskscontroller')


router.route('/')
  .get(allTask.getAllTask)
  .post(allTask.postTask)


router.route('/:id')
  .get(allTask.getSingleTask)
  .patch(allTask.updateTask)
  .delete(allTask.deleteTask)

module.exports = router