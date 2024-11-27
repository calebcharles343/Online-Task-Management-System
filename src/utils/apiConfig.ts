const BASE_URL = "https://task-management-kcyf.onrender.com/api";

export const ENDPOINTS = {
  PROJECTS: `${BASE_URL}/projects`,
  TASKS: (projectId: string) => `${BASE_URL}/projects/${projectId}/tasks`,
};

export default BASE_URL;
