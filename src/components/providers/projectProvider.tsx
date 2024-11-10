import { createContext, useContext, useState, ReactNode } from "react";
import { Project } from "@/lib/types/project";

interface ProjectsContextType {
  selectedProjects: Project[];
  setSelectedProjects: (projects: Project[]) => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  return (
    <ProjectsContext.Provider value={{ selectedProjects, setSelectedProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = (): ProjectsContextType => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
