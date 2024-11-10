"use client"

import { useForm, SubmitHandler, FieldValue, FieldValues } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Project } from "@/lib/types/project";
import { ProjectSection } from "@/components/project-seciton";
import Image from "next/image";

import { ProjectsProvider } from "@/components/providers/projectProvider";
import { ImpactBar } from "@/components/impact-bar";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const sections = ["agricultura_sustentável", "economia_de_subsistencia", "producao_organica"];

  const projects: Project[] = [
    {
      name: "Fazenda Esperança Verde",
      type: "agricultura_sustentável",
      location: { latitude: -23.5555, longitude: -46.6333 },
      agriculture_type: "Orgânico",
      farm_size: 12.5,
      number_of_employees: 7,
      description: "Projeto focado em práticas sustentáveis para cultivo de hortaliças e frutas.",
      sequestration: 35 // Adicionando o valor de sequestro
    },
    {
      name: "Sítio Raízes da Terra",
      type: "producao_organica",
      location: { latitude: -22.9035, longitude: -43.2096 },
      agriculture_type: "Orgânico",
      farm_size: 72.0,
      number_of_employees: 17,
      description: "Produção orgânica com foco em legumes e hortaliças sem o uso de agrotóxicos.",
      sequestration: 75 // Adicionando o valor de sequestro
    },
    {
      name: "Chácara Vale do Sol",
      type: "economia_de_subsistencia",
      location: { latitude: -21.7952, longitude: -47.3298 },
      agriculture_type: "Orgânico",
      farm_size: 13.3,
      number_of_employees: 3,
      description: "Chácara familiar que produz alimentos para subsistência e venda local.",
      sequestration: 50 // Adicionando o valor de sequestro
    },
    {
      name: "Rancho Família Feliz",
      type: "agricultura_sustentável",
      location: { latitude: -25.4292, longitude: -49.2716 },
      agriculture_type: "Orgânico",
      farm_size: 29.1,
      number_of_employees: 5,
      description: "Rancho com práticas sustentáveis, com foco em meliponicultura e ervas medicinais.",
      sequestration: 60 // Adicionando o valor de sequestro
    },
    {
      name: "Agroecológica Semente Viva",
      type: "producao_organica",
      location: { latitude: -20.3155, longitude: -40.3128 },
      agriculture_type: "Orgânico",
      farm_size: 41.6,
      number_of_employees: 8,
      description: "Produção de vegetais e grãos orgânicos, priorizando a saúde do solo e da biodiversidade.",
      sequestration: 120 // Adicionando o valor de sequestro
    },
    {
      name: "Terra da Paz",
      type: "agricultura_sustentável",
      location: { latitude: -23.2975, longitude: -47.9299 },
      agriculture_type: "Orgânico",
      farm_size: 34.7,
      number_of_employees: 9,
      description: "Projeto de agricultura sustentável que cultiva frutas exóticas e resgata espécies nativas.",
      sequestration: 85 // Adicionando o valor de sequestro
    },
    {
      name: "Sítio Recanto Natural",
      type: "producao_organica",
      location: { latitude: -19.9072, longitude: -44.2166 },
      agriculture_type: "Orgânico",
      farm_size: 75.8,
      number_of_employees: 19,
      description: "Grande sítio que cultiva diversos tipos de hortaliças e promove oficinas de agroecologia.",
      sequestration: 150 // Adicionando o valor de sequestro
    },
    {
      name: "Fazenda Pura Vida",
      type: "economia_de_subsistencia",
      location: { latitude: -22.3026, longitude: -48.0202 },
      agriculture_type: "Orgânico",
      farm_size: 23.2,
      number_of_employees: 5,
      description: "Fazenda familiar que integra atividades de plantio e pequenas criações para subsistência.",
      sequestration: 100 // Adicionando o valor de sequestro
    },
    {
      name: "Rancho Bela Vista",
      type: "agricultura_sustentável",
      location: { latitude: -19.8248, longitude: -43.9315 },
      agriculture_type: "Orgânico",
      farm_size: 30,
      number_of_employees: 12,
      description: "Rancho com práticas de agricultura regenerativa e produção de alimentos sem pesticidas.",
      sequestration: 110 // Adicionando o valor de sequestro
    },
    {
      name: "Sítio Flor da Serra",
      type: "producao_organica",
      location: { latitude: -23.0355, longitude: -46.4931 },
      agriculture_type: "Orgânico",
      farm_size: 40,
      number_of_employees: 8,
      description: "Sítio especializado em produção de flores e ervas orgânicas para comercialização local.",
      sequestration: 95 // Adicionando o valor de sequestro
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const onSubmit: SubmitHandler<FieldValues> = ({ search }) => {
    const searchTerm = search.toLowerCase().trim();
    const filtered = projects.filter(project => project.name.toLowerCase().includes(searchTerm));
    setFilteredProjects(filtered);
  };

  return (
    <ProjectsProvider>
      <div className="grid grid-row-[auto,1fr]">
        <div className="w-full bg-white flex flex-row px-6 py-2">
          <Image src="/logo.png" width={100} height={100} alt="Logo da Curupira" />
        </div>
        <div className="grid grid-cols-[1fr,auto]">
          <div className="p-6 flex flex-col gap-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row w-full items-center gap-2">
              <input className="h-[40px] rounded-xl w-[300px] px-4" {...register("search")} placeholder="Buscar pelo nome do projeto" />
              <Button type="submit">Pesquisar</Button>
            </form>
            <div className="flex flex-col gap-6">
              <h2 className="flex flex-row text-2xl gap-2 font-bold items-center text-primary">
                Projetos
              </h2>
              <div className="flex flex-col gap-4">
                {sections.map(section => (
                  <ProjectSection key={section} projectType={section} projects={filteredProjects} />
                ))}
              </div>
            </div>
          </div>
          <ImpactBar />
        </div>
      </div>
    </ProjectsProvider>
  );
}
