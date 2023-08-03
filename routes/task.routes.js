const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controllers');

// Create a new task
router.post('/createTask', taskController.createTask);

// Get all tasks
router.get('/getTasks', taskController.getTask);

// Update a task by ID
router.put('/updateTask/:TaskID', taskController.updateTask);

// Delete a task by ID
router.delete('/deleteTask/:TaskID', taskController.deleteTask);

module.exports = router;
