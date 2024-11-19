import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createProject = async (
  titleName: string,
  descriptionDetails: string
): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/projects`, {
      title: titleName,
      description: descriptionDetails,
    });
    alert("Project created successfully");
    window.location.reload();
    return response.data;
  } catch (err) {
    console.error("Error creating project:", err);
    throw err; // Re-throw the error to handle it in the calling function
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
    window.location.reload();
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteProject = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/projects/${id}`);
    alert("Project deleteted successfully");
    window.location.reload();
    return response.data;
  } catch (err) {
    console.log(err);
  }
};