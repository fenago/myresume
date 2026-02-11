
export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  link?: string;
  doi?: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
