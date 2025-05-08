import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { 
  ProfileHeader,
  ProfileImage,
  Title,
  Subtitle,
  Bio,
  ContactInfo,
  ContactItem 
} from './styles';

const Header = () => {
  return (
    <ProfileHeader>
      <ProfileImage 
        src="https://media.licdn.com/dms/image/v2/D4D03AQHXU2VCOdvpuA/profile-displayphoto-shrink_200_200/B4DZaxl5WvGYAY-/0/1746736224716?e=1752105600&v=beta&t=zVMIAzJvKp4LOohUcnlNks30zOpkCFC3bgKRjZAeYH8" 
        alt="Amanda Gomes Rebolsas Profile Photo"
      />
      <Title>Amanda Gomes Rebolsas</Title>
      <Subtitle>Desenvolvedora Full Stack | Engenharia de Software | Educação Tecnológica</Subtitle>
      <Bio>
      Desenvolvedora full-stack com sólida formação em engenharia de software, focada em React, TypeScript, Next.js, 
      Node.js e React Native. Experiência na criação de soluções web e mobile comprometida com sistemas escaláveis, 
      funcionais e de alto desempenho. Atualmente cursando pós-graduação em Engenharia de Software (PUC Minas) e 
      Docência na Educação Profissional e Tecnológica (IFPA), integrando conhecimentos técnicos com práticas pedagógicas 
      inovadoras.engenharia de software...
      </Bio>
      <ContactInfo>
        <ContactItem href="https://linkedin.com/in/amanda-gomes-rebolsas-5138a0222" target="_blank">
          <FaLinkedin /> LinkedIn
        </ContactItem>
        <ContactItem href="https://github.com/Mandiegr" target="_blank">
          <FaGithub /> GitHub
        </ContactItem>
        <ContactItem href="mailto:amandagr.eng.software@gmail.com">
          <FaEnvelope /> Email
        </ContactItem>
        <ContactItem href="https://wa.me/5591991843012" target="_blank">
          <FaWhatsapp /> WhatsApp
        </ContactItem>
      </ContactInfo>
    </ProfileHeader>
  );
};

export default Header;