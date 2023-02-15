const express = require('express')
const router = express.Router()


const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/task')



router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).(deleteTask)
module.exports = router;