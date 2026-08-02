
let tasks = [];
const API_URL = "http://localhost:5000/api/tasks";
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const priorityInput = document.getElementById("priority-input");
const editIndexInput = document.getElementById("edit-index");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

async function getTasks() {
  const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

  const data = await response.json();

  tasks = data.data;

  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";

    tasks.forEach(function (task, index) {
      const taskCard = document.createElement("div");
      taskCard.className = `task-card ${task.completed ? "completed" : ""}`;

      const badgeClass = `priority-badge badge-${task.priority.toLowerCase()}`;

      taskCard.innerHTML = `
                        <div class="task-details">
                            <div>
                                <span class="task-title">${escapeHtml(task.title)}</span>
                                <span class="${badgeClass}">${task.priority}</span>
                            </div>
                            <span class="task-meta">Created on: ${task.date|| "unknown"}</span>
            
                        </div>
                        <div class="action-btns">
                            <button class="btn btn-complete" onclick="toggleComplete(${index})">
                                ${task.completed ? "Undo" : "Done"}
                            </button>
                            <button class="btn btn-edit" onclick="editTask(${index})">Edit</button>
                            <button class="btn btn-delete" onclick="deleteTask(${index})">Delete</button>
                        </div>
                    `;

      taskList.appendChild(taskCard);
    });
  }

  updateProgress();
}

function updateProgress() {
  const total = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;

  progressText.textContent = `${completedCount} of ${total} tasks completed`;

  const percentage = total === 0 ? 0 : (completedCount / total) * 100;
  progressFill.style.width = percentage + "%";
}

// Event listener for adding/editing a task
taskForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const title = taskInput.value.trim();
  const priority = priorityInput.value;
  const editIndex = parseInt(editIndexInput.value);

  if (title === "") return;

  if (editIndex === -1) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        priority: priority,
        completed: false,
      }),
    });

    if (!response.ok) {
      alert("Failed to create task");
      return;
    }
  } else {
  const taskId = tasks[editIndex].id;

  const response = await fetch(`${API_URL}/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      priority: priority,
    }),
  });

  if (!response.ok) {
    alert("Failed to update task");
    return;
  }
}
  resetForm();
  await getTasks();
});

async function toggleComplete(index) {
  const task = tasks[index];
  const response = await fetch(`${API_URL}/${task.id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
     body: JSON.stringify({
      completed: !task.completed,
    }),
  });
  
  if (!response.ok) {
    alert("Failed to update task status");
    return;
  }
  await getTasks();
}


function editTask(index) {
  const task = tasks[index];
  taskInput.value = task.title;
  priorityInput.value = task.priority;
  editIndexInput.value = index;

  addBtn.textContent = "Save Changes";
  taskInput.focus();
}


async function deleteTask(index) { 
  const taskId = tasks[index].id;
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    alert("Failed to delete task");
    return;
  }

  await getTasks();
}

function resetForm() {
  taskInput.value = "";
  priorityInput.value = "Medium";
  editIndexInput.value = "-1";
  addBtn.textContent = "Add Task";
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, function (tag) {
    return (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[
        tag
      ] || tag
    );
  });
}


getTasks();
