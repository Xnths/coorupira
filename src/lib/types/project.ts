export type Project = {
    name: string;
    type: ProjectType;
    location: string;
    agriculture_type: string;
    farm_size: number;
    number_of_employees: number;
    description: string;
  }

export type ProjectType = "agricultura_sustentável" | "economia_de_subsistencia" | "producao_organica";