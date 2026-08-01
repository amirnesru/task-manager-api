const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createNewTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;