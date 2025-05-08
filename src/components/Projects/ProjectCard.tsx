import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  ProjectCard as Card,
  StyledProjectImage as Image,
  ProjectContent as Content,
  ProjectTitle as Title,
 // ProjectDescription as Description,
  //ProjectTech as Tech,
  ProjectLinks as Links,
  LinkButton as Link
} from './styles';

interface Project {
  id: number;
  title: string;
 // description: string;
  image: string;
 // technologies: string[];
  github: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
       <Title>{project.title}</Title>
      <Image src={project.image} alt={`Preview do projeto ${project.title}`} />
      <Content>
       
       {/**<Description>{project.description}</Description> <div>
          {project.technologies.map((tech: string, index: number) => (
            <Tech key={index}>{tech}</Tech>
          ))}
        </div> */} 
       
        <Links>
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Código
          </Link>
          {project.live && (
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Demo
            </Link>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard;