const taskService = require("../services/taskService");

exports.getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();

  res.status(200).json({
    message: "Fetched all tasks successfully",
    data: tasks,
  });
};

exports.getTaskById = (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = taskService.getTask(taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  res.status(200).json({
    message: "Fetched task successfully",
    data: task,
  });
};

exports.createTask = (req, res) => {
  const taskData = req.body;
  if (!taskData.title || !taskData.priority) {
    return res.status(400).json({
      message: "Title and priority are required",
    });
  }
  const newTask = {
    id: taskService.getAllTasks().length + 1,
    title: taskData.title,
    completed: taskData.completed ?? false,
    priority: taskData.priority,
  };

  const createdTask = taskService.createNewTask(newTask);

  res.status(201).json({
    message: "Task created successfully",
    data: createdTask,
  });
};

exports.deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = taskService.deleteTask(taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  res.status(200).json({
    message: "Task deleted successfully",
    data: task,
  });
};

exports.updateTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskData = req.body;
  if (Object.keys(taskData).length === 0) {
    return res.status(400).json({
      message: "No data provided to update",
    });
  }
  const task = taskService.updateTask(taskId, taskData);
  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  res.status(200).json({
    message: "Task updated successfully",
    data: task,
  });
};