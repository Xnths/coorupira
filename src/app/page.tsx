"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Project } from "@/lib/types/project";
import { ProjectSection } from "@/components/project-seciton";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const sections = ["agricultura_sustentável", "economia_de_subsistencia", "producao_organica"];

  const projects: Project[] = [
    {
      name: "Fazenda Esperança Verde",
      type: "agricultura_sustentável",
      location: "12345-678",
      agriculture_type: "Orgânico",
      farm_size: 12.5,
      number_of_employees: 7,
      description: "Projeto focado em práticas sustentáveis para cultivo de hortaliças e frutas."
    },
    {
      name: "Sítio Raízes da Terra",
      type: "producao_organica",
      location: "98765-432",
      agriculture_type: "Orgânico",
      farm_size: 72.0,
      number_of_employees: 17,
      description: "Produção orgânica com foco em legumes e hortaliças sem o uso de agrotóxicos."
    },
    {
      name: "Chácara Vale do Sol",
      type: "economia_de_subsistencia",
      location: "13579-246",
      agriculture_type: "Orgânico",
      farm_size: 13.3,
      number_of_employees: 3,
      description: "Chácara familiar que produz alimentos para subsistência e venda local."
    },
    {
      name: "Rancho Família Feliz",
      type: "agricultura_sustentável",
      location: "24680-135",
      agriculture_type: "Orgânico",
      farm_size: 29.1,
      number_of_employees: 5,
      description: "Rancho com práticas sustentáveis, com foco em meliponicultura e ervas medicinais."
    },
    {
      name: "Agroecológica Semente Viva",
      type: "producao_organica",
      location: "11223-334",
      agriculture_type: "Orgânico",
      farm_size: 41.6,
      number_of_employees: 8,
      description: "Produção de vegetais e grãos orgânicos, priorizando a saúde do solo e da biodiversidade."
    },
    {
      name: "Terra da Paz",
      type: "agricultura_sustentável",
      location: "55667-778",
      agriculture_type: "Orgânico",
      farm_size: 34.7,
      number_of_employees: 9,
      description: "Projeto de agricultura sustentável que cultiva frutas exóticas e resgata espécies nativas."
    },
    {
      name: "Sítio Recanto Natural",
      type: "producao_organica",
      location: "99887-776",
      agriculture_type: "Orgânico",
      farm_size: 75.8,
      number_of_employees: 19,
      description: "Grande sítio que cultiva diversos tipos de hortaliças e promove oficinas de agroecologia."
    },
    {
      name: "Fazenda Pura Vida",
      type: "economia_de_subsistencia",
      location: "44332-221",
      agriculture_type: "Orgânico",
      farm_size: 23.2,
      number_of_employees: 5,
      description: "Fazenda familiar que integra atividades de plantio e pequenas criações para subsistência."
    },
    {
      name: "Rancho Bela Vista",
      type: "agricultura_sustentável",
      location: "66778-899",
      agriculture_type: "Orgânico",
      farm_size: 30,
      number_of_employees: 12,
      description: "Rancho com práticas de agricultura regenerativa e produção de alimentos sem pesticidas."
    },
    {
      name: "Sítio Flor da Serra",
      type: "producao_organica",
      location: "55443-221",
      agriculture_type: "Orgânico",
      farm_size: 40,
      number_of_employees: 8,
      description: "Sítio especializado em produção de flores e ervas orgânicas para comercialização local."
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const onSubmit: SubmitHandler<{ search: string }> = ({ search }) => {
    const searchTerm = search.toLowerCase().trim();
    const filtered = projects.filter(project => project.name.toLowerCase().includes(searchTerm));
    setFilteredProjects(filtered);
  }

  return (
    <div className="p-6 flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row w-full items-center gap-2">
        <input className="h-[40px] rounded-xl w-[300px] px-4" {...register("search")} placeholder="Buscar pelo nome do projeto" />
        <Button type="submit">Pesquisar</Button>
      </form>
      <div className="flex flex-col gap-6">
        <h2 className="flex flex-row text-2xl opacity-50 gap-2 font-bold items-center text-primary">
          Projetos
        </h2>
        <div className="flex flex-col gap-4">
          {sections.map(section => (
            filteredProjects.length === 0 ? <></> :
            <ProjectSection key={section} projectType={section} projects={filteredProjects} />
          ))}
        </div>
      </div>
    </div>
  );
}
