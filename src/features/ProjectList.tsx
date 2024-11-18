import React, { useState } from "react";
import EditProjectModal from "./EditProjectModal";

// Interface for a project
interface Project {
  name: string;
  description: string;
  tasks: string[];
}

// Define the props for the ProjectList component
interface ProjectListProps {
  projects: Project[];
  onRemoveProject: (index: number) => void;
  onUpdateProject: (index: number, updatedProject: Project) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onRemoveProject,
  onUpdateProject,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Handle project update
  const handleUpdate = (updatedProject: Project) => {
    if (editingIndex !== null) {
      onUpdateProject(editingIndex, updatedProject);
      setEditingIndex(null); // Close the edit modal
    }
  };

  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <ul>
              {project.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
            <button onClick={() => setEditingIndex(index)}>Edit</button>
            <button onClick={() => onRemoveProject(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {editingIndex !== null && (
        <EditProjectModal
          project={projects[editingIndex]}
          onClose={() => setEditingIndex(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ProjectList;
