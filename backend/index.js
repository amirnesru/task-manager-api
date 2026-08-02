const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
const APP_NAME = process.env.APP_NAME || "Task Manager API";

app.get("/", (req, res) => {
  res.send(APP_NAME);
});
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} running on port ${PORT}`);
});