# 🌱 TaskNest — Task Manager

> A simple full-stack task management application that helps users organize, prioritize, and track their daily tasks.

🚀 **Live Demo:** Coming Soon

---

## 📌 About The Project

TaskNest is a full-stack Task Manager application built with Node.js and Express.  
The project focuses on building a clean REST API, following MVC architecture, and connecting a frontend with a backend.

Architecture:

```
Frontend
   ↓
REST API
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Data
```

---

## ✨ Features

- ✅ Create tasks
- 📋 View all tasks
- 🔍 Get task by ID
- ✏️ Update tasks
- 🗑️ Delete tasks
- ☑️ Mark tasks as completed
- 🎯 Manage task priorities
- 📊 Track completion progress

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (ES6)
- Fetch API

### Backend
- Node.js
- Express.js

### Tools
- Git & GitHub
- Postman
- dotenv
- CORS

---

## 🏗️ Project Structure

```
task-manager/
│
├── backend/
│   ├── index.js
│   ├── .env
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── services/
│   │   └── taskService.js
│   └── data/
│       └── taskData.js
│
└── frontend/
    ├── index.html
    ├── style.css
    └── app.js
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| POST | `/api/tasks` | Create a task |
| PATCH | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/amirnesru/task-manager-api.git
```

Install backend dependencies:

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
APP_NAME=Task Manager API
```

Run the server:

```bash
npm run dev
```

---

## 🔮 Future Improvements

- Add database support
- Add user authentication
- Add task filtering and searching
- Deploy online

---

## 👨‍💻 Author

**Amir Nesru**

Software Engineering Student  
Backend & AI Platform Engineering Enthusiast
