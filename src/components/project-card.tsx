import { Project } from "@/lib/types/project"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className="w-[350px] h-[250px] cursor-pointer shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col opacity-50">
                <span><strong>Tamanho da fazenda:</strong> {project.farm_size} km²</span>
                <span><strong>Número de colaboradores:</strong> {project.number_of_employees}</span>
            </CardContent>
        </Card>
    )
}