import { experience } from '../../data/experience';
import ExperienceItem from './item';
import { Section, SectionTitle } from './styles';

const ExperienceSection = () => {
  return (
    <Section>
      <SectionTitle>Experiência Profissional</SectionTitle>
      {experience.map((exp, index) => (
        <ExperienceItem 
          key={index}
          title={exp.title}
          subtitle={exp.subtitle}
          date={exp.date}
          location={exp.location}
          description={exp.description}
        />
      ))}
    </Section>
  );
};

export default ExperienceSection;