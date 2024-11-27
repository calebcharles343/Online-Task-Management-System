import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { getProjects, getProject } from "../utils/api";
import { DataType } from "../Interfaces";

interface Projects {
  projects: DataType[];
  project: DataType[];
  fetchProjects: () => Promise<void>;
  fetchProject: (id: string) => Promise<void>;
}

type MyPersist = (
  config: StateCreator<Projects>,
  options: PersistOptions<Projects>
) => StateCreator<Projects>;

export const useProjectStore = create<Projects>(
  (persist as MyPersist)(
    (set) => ({
      projects: [],
      project: [],
      fetchProjects: async () => {
        const response = await getProjects();
        set({ projects: response.data });
      },
      fetchProject: async (id: string) => {
        const response = await getProject(id);
        set({ project: [response.data] });
      },
    }),
    { name: "project-storage" }
  )
);
