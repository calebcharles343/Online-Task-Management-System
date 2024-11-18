import React, { useState } from "react";

// Interface for a project
interface Project {
  name: string;
  description: string;
  tasks: string[];
}

// Define the props for the EditProjectModal component
interface EditProjectModalProps {
  project: Project;
  onClose: () => void;
  onUpdate: (updatedProject: Project) => void;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({
  project,
  onClose,
  onUpdate,
}) => {
  const [name, setName] = useState<string>(project.name);
  const [description, setDescription] = useState<string>(project.description);
  const [tasks, setTasks] = useState<string[]>(project.tasks);
  const [taskInput, setTaskInput] = useState<string>("");

  // Handle adding a task
  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // Handle updating the project
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProject: Project = { name, description, tasks };
    onUpdate(updatedProject);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
        />
        <div>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a task"
          />
          <button type="button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProjectModal;
