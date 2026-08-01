const express = require('express');
const router = express.Router() ;

const {  getAllTasks,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
  } = require('../controllers/taskController.js');

router.get('/api/tasks', getAllTasks);
router.get('/api/tasks/:id', getTaskById);
router.post('/api/tasks', createNewTask);
router.patch('/api/tasks/:id', updateTask);
router.delete('/api/tasks/:id', deleteTask);



module.exports = router;