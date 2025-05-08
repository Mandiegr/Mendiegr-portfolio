import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import { Section, SectionTitle, ProjectsGrid } from './styles';

const ProjectsSection = () => {
  return (
    <Section>
      <SectionTitle>Projetos Destacados</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default ProjectsSection;