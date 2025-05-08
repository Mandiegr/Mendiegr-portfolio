import { education } from '../../data/education';
import EducationItem from './item';
import { Section, SectionTitle } from './styles';

const EducationSection = () => {
  return (
    <Section>
      <SectionTitle>Formação Acadêmica</SectionTitle>
      {education.map((edu, index) => (
        <EducationItem
          key={index}
          title={edu.title}
          institution={edu.institution}
          period={edu.period}
        />
      ))}
    </Section>
  );
};

export default EducationSection;