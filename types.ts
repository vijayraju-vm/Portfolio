
export interface Skill {
  name: string;
  icon: string;
  category: 'Core' | 'Tool' | 'Soft';
  description: string;
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  insight: string;
  tools: string[];
  githubUrl: string;
  imageUrl: string;
  category: 'Analysis' | 'ML' | 'Viz';
}

export interface LabExperiment {
  title: string;
  description: string;
  date: string;
  tags: string[];
}
