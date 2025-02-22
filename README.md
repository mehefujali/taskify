# Taskify

## Live Link
[Taskify](https://taskify-k.web.app)

![Taskify Preview](https://i.imgur.com/XvafsyK.png)

## Description
Taskify is a task management application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: **To-Do**, **In Progress**, and **Done**. All changes are instantly saved to the database, ensuring real-time synchronization. The app is responsive, offering a smooth experience on both desktop and mobile devices.

## Features
- **Authentication:**
  - Google Sign-In using Firebase Authentication.
  - User details (User ID, email, display name) are stored in MongoDB upon first login.

- **Task Management:**
  - Add, edit, delete, and reorder tasks.
  - Drag tasks between categories and reorder within categories.
  - Instant synchronization with MongoDB.

- **Task Attributes:**
  - Title (max 50 characters)
  - Description (optional, max 200 characters)
  - Timestamp (auto-generated upon creation)
  - Category (To-Do, In Progress, Done)

- **Persistence:**
  - MongoDB database (via Express.js server)
  - Instant updates using Optimistic UI approach

- **Frontend UI:**
  - Built with Vite.js and React
  - Drag-and-drop using react-beautiful-dnd
  - Clean, modern, and responsive design (limited to four colors)

- **Optional Features:**
  - Dark mode toggle
  - Task due dates with color indicators
  - Simple activity log

## Technologies Used
- **Frontend:** Vite.js, React, Tailwind CSS, react-beautiful-dnd
- **Backend:** Express.js, MongoDB
- **Authentication:** Firebase Authentication (Google Sign-In)

## API Endpoints
- `POST /tasks` – Add a new task
- `GET /tasks` – Retrieve all tasks for the logged-in user
- `PUT /tasks/:id` – Update task details (title, description, category)
- `DELETE /tasks/:id` – Delete a task

## Installation
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
node index.js
```

## How to Use
1. Sign in using Google Authentication.
2. Add tasks by entering a title and optional description.
3. Drag tasks between categories or reorder within categories.
4. All changes are saved instantly.

---

**Enjoy using Taskify!**
