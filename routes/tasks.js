const express = require('express')
const router = express.Router




router.route('/').get(getAllTask).post(postTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)
