"use client"

import { HeartHandshake } from "lucide-react"
import { useProjects } from "./providers/projectProvider"
import { Button } from "./ui/button"
import { useEffect } from "react"

export const ImpactBar = () => {
    const {selectedProjects} = useProjects()
    const total = 0;

    useEffect(() => {
        selectedProjects.map
    }, [selectedProjects])

    return (
        <div className="w-[300px] bg-white h-[800px] bg-opacity-80 p-4 grid grid-rows-[auto,1fr,auto,auto] m-8 rounded-xl">
            <h2 className="font-extrabold opacity-40 flex flex-row items-center gap-2"><HeartHandshake /> Projetos impactados</h2>
            <div className="h-full">
                {selectedProjects.map(project => (
                    <div>
                        <span>
                            {project.name}
                        </span>
                        <span>
                            {project.description}
                        </span>
                    </div>
                ))}
            </div>
            <div>
                {total}
            </div>
            <div className="flex flex-row w-full justify-end">
                <Button className="bg-secondary">Impactar</Button>
            </div>
        </div>
    )
}