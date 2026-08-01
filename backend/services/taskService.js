const taskData = require("../data/taskData");

function getAllTasks() {
  return taskData;
}

function getTaskById(id) {
  return taskData.find((task) => id === task.id);
}

function createNewTask(newTask) {
  taskData.push(newTask);
  return newTask;
}

function deleteTask(id) {
  const index = taskData.findIndex((task) => task.id === id);
  if (index === -1) {
    return null;
  }
  const [deletedTask] = taskData.splice(index, 1);
  return deletedTask;
}

function updateTask(id, updatedData) {
  const task = taskData.find((task) => task.id === id);
  if (!task) {
    return null;
  }

  Object.assign(task, updatedData);

  return task;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
};