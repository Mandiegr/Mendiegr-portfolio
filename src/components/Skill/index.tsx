import { skills } from '../../data/skills';
import { Section, SectionTitle, SkillsContainer, SkillCategory, SkillList, SkillItem } from './styles';

const SkillsSection = () => {
  return (
    <Section>
      <SectionTitle>Habilidades Técnicas</SectionTitle>
      <SkillsContainer>
        <SkillCategory>
          <h3>Frontend</h3>
          <SkillList>
            {skills.frontend.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCategory>
        
        <SkillCategory>
          <h3>Backend</h3>
          <SkillList>
            {skills.backend.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCategory>
        
        <SkillCategory>
          <h3>Banco de Dados</h3>
          <SkillList>
            {skills.databases.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCategory>
        
        <SkillCategory>
          <h3>Metodologias</h3>
          <SkillList>
            {skills.methodologies.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCategory>
      </SkillsContainer>
    </Section>
  );
};

export default SkillsSection;