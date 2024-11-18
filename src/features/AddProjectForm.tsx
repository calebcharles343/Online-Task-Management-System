import React, { useState } from "react";

// Define the props for the AddProjectForm component
interface AddProjectFormProps {
  onAddProject: (project: Project) => void;
}

// Interface for a project
interface Project {
  name: string;
  description: string;
  tasks: string[];
}

const AddProjectForm: React.FC<AddProjectFormProps> = ({ onAddProject }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  // Handle adding a new task to the task list
  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const newProject: Project = { name, description, tasks };
      onAddProject(newProject);
      setName("");
      setDescription("");
      setTasks([]);
    }
  };

  return (
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
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
