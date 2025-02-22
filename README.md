# Taskify

![Taskify Screenshot](https://i.imgur.com/XvafsyK.png)

## Live Demo
[Taskify Live](https://taskify-k.web.app)

## Description
Taskify is a task management application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: **To-Do**, **In Progress**, and **Done**. Changes are instantly saved to the database, ensuring persistence.

## Features
- **Authentication:** Google Sign-In using Firebase Authentication.
- **Task Management:** CRUD operations with instant save and reordering using drag-and-drop.
- **Real-Time Updates:** Optimistic UI ensures instant feedback on actions.
- **Responsive Design:** Fully responsive for both desktop and mobile.
- **Bonus:** Dark mode toggle, task due dates with color indicators, and an activity log.

## Folder Structure
```
.taskify
├── .firebase
├── dist
├── node_modules
├── public
├── src
│   ├── Auth
│   ├── components
│   ├── Context
│   ├── firebase
│   ├── Hooks
│   ├── layout
│   ├── Private
│   ├── routes
│   └── Shared
├── .env.local
├── .firebaserc
├── .gitignore
├── eslint.config.js
├── firebase.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Dependencies
- **Drag-and-Drop:** @dnd-kit/modifiers, react-beautiful-dnd
- **Styling:** @material-tailwind/react, tailwindcss, @tailwindcss/vite
- **Networking:** axios
- **State Management:** @tanstack/react-query
- **Utilities:** dateformat, proptypes
- **Icons:** react-icons
- **Notifications:** react-hot-toast, sweetalert2
- **Routing:** react-router-dom
- **Performance:** react-window

## Installation Steps
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Configure Firebase credentials in `.env.local`.
4. Start the development server with `npm run dev`.

## Technologies Used
- Frontend: Vite.js, React, Tailwind CSS
- Backend: Express.js, MongoDB
- Authentication: Firebase Authentication
- Drag-and-Drop: react-beautiful-dnd

---
Developed by Mehefuj Ali

