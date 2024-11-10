import { useEffect, useState } from "react";
import { Project } from "@/lib/types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Map from "react-map-gl";
import { cn } from "@/lib/utils";
import { useProjects } from "./providers/projectProvider";

const MAPBOX_TOKEN = "pk.eyJ1IjoieG50aHMiLCJhIjoiY20zYnJzN3FzMXNuajJpcHd2Mm16MnZndiJ9.D0r2y0vwPXrh5lAOnIHbYw";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);
  const [selected, setSelected] = useState<boolean>(false);

  const { setSelectedProjects } = useProjects();

  const toggleProjectSelection = (project: Project) => {
    setSelected(!selected); // Alterna o estado de seleção
    setSelectedProjects((prevProjects) => {
      // Se o projeto já estiver na lista, removê-lo; caso contrário, adicioná-lo
      if (prevProjects.some((p) => p.name === project.name)) {
        return prevProjects.filter((p) => p.name !== project.name);
      } else {
        return [...prevProjects, project];
      }
    });
  };

  useEffect(() => {
    setCoordinates(project.location);
  }, [project.location]);

  return (
    <Card
      onClick={() => {
        toggleProjectSelection(project); // Alterna a seleção ao clicar
      }}
      className={cn("w-[350px] h-[500px] cursor-pointer shadow-lg transition-all", selected ? "bg-secondary text-white" : "")}
    >
      <CardHeader>
        <CardTitle className="text-xl">{project.name}</CardTitle>
        <CardDescription className={selected ? "text-white" : ""}>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="opacity-50">
          <span><strong>Tamanho da fazenda:</strong> {project.farm_size} km²</span>
          <span><strong>Número de colaboradores:</strong> {project.number_of_employees}</span>
        </div>
        <span className={cn("text-secondary text-2xl", selected ? "text-white" : "")}>
          <strong className="font-extrabold text-4xl">{project.sequestration}</strong> kg/ano
        </span>
      </CardContent>
      <CardFooter>
        {coordinates && (
          <div className="overflow-clip h-[200px] w-[350px] mt-4">
            <Map
              initialViewState={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                zoom: 12,
              }}
              style={{ width: "300px", height: "175px" }}
              mapStyle="mapbox://styles/mapbox/satellite-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            ></Map>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
