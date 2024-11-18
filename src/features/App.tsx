import "./App.css";
import React, { useState, useEffect } from "react";
import AddProjectForm from "./features/AddProjectForm";
import ProjectList from "./features/ProjectList";

// Define the shape of a project item
interface Project {
  name: string;
  description: string;
  tasks: string[];
}

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Load projects from localStorage when the component mounts
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    if (savedProjects) {
      setProjects(savedProjects);
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Add a new project
  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  // Remove a project from the list
  const removeProject = (index: number) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmation) {
      const newProjects = [...projects];
      newProjects.splice(index, 1);
      setProjects(newProjects);
    }
  };

  // Update an existing project
  const updateProject = (index: number, updatedProject: Project) => {
    const newProjects = [...projects];
    newProjects[index] = updatedProject;
    setProjects(newProjects);
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <AddProjectForm onAddProject={addProject} />
      <ProjectList
        projects={projects}
        onRemoveProject={removeProject}
        onUpdateProject={updateProject}
      />
    </div>
  );
};

export default App;
