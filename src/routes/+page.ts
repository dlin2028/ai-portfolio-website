import type { PageLoad } from './$types';
import portfolioData from '$lib/data/portfolio.json';

export const load: PageLoad = () => {
  return {
    personalInfo: portfolioData.personalInfo,
    experiences: portfolioData.experiences,
    projects: portfolioData.projects,
    technologies: portfolioData.technologies
  };
};
