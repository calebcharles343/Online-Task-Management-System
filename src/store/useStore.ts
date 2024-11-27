// src/store/useStore.ts
import { create, StateCreator } from "zustand";
import { DataType } from "../Interfaces";
import { persist, PersistOptions } from "zustand/middleware";

interface Projects {
  projects: DataType[];
  project: DataType[];
  setProjects: (data: DataType[]) => void;
  setProject: (data: DataType[]) => void;
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
      setProjects: (data) => set({ projects: data }),
      setProject: (data) => set({ project: data }),
    }),
    { name: "project-storage" }
  )
);
