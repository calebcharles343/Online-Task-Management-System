import axios from "axios";

const API_URL = "https://task-management-kcyf.onrender.com/api";

export const createProject = async (
  titleName: string,
  descriptionDetails: string,
  fetchProjects: () => void
) => {
  try {
    const response = await axios.post(`${API_URL}/projects`, {
      title: titleName,
      description: descriptionDetails,
    });
    alert("Project created successfully");

    const updatedProjects = await getProjects();

    fetchProjects();
    return { response, updatedProjects };
  } catch (err) {
    alert("Error creating Project");
    console.error("Error creating project:", err);
  }
};

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (err) {
    console.log(err);
    alert(`Error Fetching projects`);
  }
};

export const getProject = async (projectId: string | undefined) => {
  try {
    const response = await axios.get(`${API_URL}/projects/${projectId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateProject = async (
  id: number,
  titleName: string,
  descriptionDetails: string
) => {
  try {
    const response = await axios.patch(`${API_URL}/projects/${id}`, {
      title: titleName,
      description: descriptionDetails,
    });
    alert("Project updated successfully");

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteProject = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/projects/${id}`);
    alert(`Project deleted successfully`);
    return response.data;
  } catch (err) {
    alert("Error deleting Project");
    console.log(err);
  }
};

////////////////////////////////////////////////////////////////

export const getTasks = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/projects/${id}/tasks/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const createTasks = async (
  id: string,
  projectId: string,
  taskName: string
) => {
  try {
    const response = await axios.post(`${API_URL}/projects/${id}/tasks`, {
      project_id: projectId,
      task_name: taskName,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const deleteTask = async (id: string, projectId: string) => {
  try {
    const response = await axios.delete(
      `${API_URL}/projects/${projectId}/tasks/${id}`
    );

    return response.data;
  } catch (err) {
    alert("Error deleting task");
    console.log(err);
  }
};
