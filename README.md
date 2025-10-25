React Task Manager - Project Documentation
1. Project Overview
The React Task Manager is a simple React.js application that allows users to add, complete, and delete tasks. It demonstrates key concepts of component-based architecture, React hooks, and responsive UI design using Bootstrap.

2. Tech Stack
• React.js — Front-end library for building user interfaces
• Bootstrap — CSS framework for responsive design
• JavaScript (ES6+) — Logic and interactivity
• HTML5 — Markup structure
• CSS3 — Styling and layout

3. Project Structure
project-folder/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   └── TaskManager.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md

4. Installation & Setup
   1. Clone the repository:
   git clone https://github.com/your-username/react-task-manager.git
   2. Navigate to the project folder:
   cd react-task-manager
   3. Install dependencies:
   npm install
   4. Run the development server:
   npm run dev
   5. Open the app in your browser: http://localhost:5173

5. Why Bootstrap
Bootstrap was chosen instead of Tailwind CSS for the following reasons:
• Easier setup without additional configuration files.
• Ready-to-use responsive components (buttons, grids, etc.).
• Suitable for environments with limited npm installations or Tailwind setup issues.
• Allows combining Bootstrap utility classes with custom CSS.

6. Features
• Add, delete, and mark tasks as complete.
• Responsive layout for all devices.
• Clean interface built with Bootstrap.
• Uses React hooks (useState) for state management.

7. Learning Objectives
• Building and organizing React components.
• Managing state using React hooks.
• Passing props between components.
• Implementing Bootstrap for responsive design.

8. Author
Author: Meshack Potsane
Email: meshackpotsane97@gmail.com
