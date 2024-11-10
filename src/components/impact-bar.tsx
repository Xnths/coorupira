"use client"

import { HeartHandshake } from "lucide-react"
import { useProjects } from "./providers/projectProvider"
import { Button } from "./ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

export const ImpactBar = () => {
    const { selectedProjects } = useProjects()

    return (
        <div className="w-[300px] bg-white h-[800px] bg-opacity-80 p-4 grid grid-rows-[auto,1fr,auto] m-8 rounded-xl gap-4">
            <h2 className="font-extrabold opacity-40 flex flex-row items-center gap-2"><HeartHandshake /> Projetos impactados</h2>
            <div className="h-full flex flex-col gap-2">
                {selectedProjects.map(project => (
                    <Card key={project.name}>
                        <CardHeader>
                            <CardTitle>
                                {project.name}
                            </CardTitle>
                            <CardDescription className="grid grid-cols-[1fr,auto] items-center gap-4">
                                <span>
                                    {project.description}
                                </span>
                                <span className="text-secondary font-extrabold text-2xl">{project.sequestration}</span>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <div className="flex flex-row w-full justify-end">
                <Button className="bg-secondary">Impactar</Button>
            </div>
        </div>
    )
}
