export interface PersonalInfo {
  name: string;
  roles: string[];
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  image: string;
  source_code_link: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  projects: Project[];
  technologies: Technology[];
}
