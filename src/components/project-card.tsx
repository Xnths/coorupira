"use client"

import { useEffect, useState } from "react";
import { Project } from "@/lib/types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Map, { Marker } from "react-map-gl";

const MAPBOX_TOKEN = "pk.eyJ1IjoieG50aHMiLCJhIjoiY20zYnJzN3FzMXNuajJpcHd2Mm16MnZndiJ9.D0r2y0vwPXrh5lAOnIHbYw";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    setCoordinates(project.location);
  }, [project.location]);

  return (
    <Card className="w-[350px] h-[500px] cursor-pointer shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="opacity-50">
            <span><strong>Tamanho da fazenda:</strong> {project.farm_size} km²</span>
            <span><strong>Número de colaboradores:</strong> {project.number_of_employees}</span>
        </div>
        <span className="text-secondary text-2xl"><strong className="font-extrabold text-4xl">{project.sequestration}</strong> kg/ano</span>
      </CardContent>
      <CardFooter>
        {coordinates && (
          <div className="overflow-clip h-[200px] w-[350px] mt-4">
            <Map
              initialViewState={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                zoom: 12
              }}
              style={{ width: "300px", height: "175px" }}
              mapStyle="mapbox://styles/mapbox/satellite-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
            </Map>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
