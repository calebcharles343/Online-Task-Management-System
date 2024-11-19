// src/store/useStore.ts
import { create, StateCreator } from "zustand";
import { DataType } from "../Interfaces";
import { persist, PersistOptions } from "zustand/middleware";

interface Projects {
  projects: DataType[];
  setProjects: (data: DataType[]) => void;
}

type MyPersist = (
  config: StateCreator<Projects>,
  options: PersistOptions<Projects>
) => StateCreator<Projects>;

export const useProjectStore = create<Projects>(
  (persist as MyPersist)(
    (set) => ({
      projects: [],
      setProjects: (data) => set({ projects: data }),
    }),
    { name: "project-storage" }
  )
);
