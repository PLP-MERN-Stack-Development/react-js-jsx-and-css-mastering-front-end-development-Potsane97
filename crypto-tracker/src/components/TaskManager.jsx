import React, { useState } from "react";
import Button from "./Button";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container my-4 p-4 border rounded bg-white shadow-sm">
      <h3 className="mb-3 text-center">📝 Task Manager</h3>

      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button label="Add" variant="success" onClick={addTask} />
      </div>

      {tasks.length === 0 ? (
        <p className="text-muted text-center">No tasks added yet.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {t}
              <Button
                label="Delete"
                variant="danger"
                onClick={() => deleteTask(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskManager;
