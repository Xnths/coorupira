import { Project } from "@/lib/types/project"
import { ProjectCard } from "./project-card"
import { slugToLabel } from "@/lib/utils"


export const ProjectSection = ({projects, projectType}: {projects: Project[], projectType: string}) => {
    const filteredProjects = projects.filter(project => project.type === projectType)

    return (
        <div className="flex flex-col gap-4">
            <h2 className="flex flex-row text-xl opacity-80 gap-2 font-bold items-center text-primary">
                {slugToLabel(projectType)}
            </h2>
            <div className="flex flex-row gap-4">
                {
                    filteredProjects.length === 0 ?
                    (<div className="w-full h-[200px] flex flex-row justify-center items-center rounded-xl bg-black bg-opacity-10">
                        <span>Nenhum projeto</span>
                    </div>) :
                    filteredProjects.map(project => (
                        <ProjectCard key={project.name} project={project} />
                    ))    
                }
                
            </div>
        </div>
    )
}