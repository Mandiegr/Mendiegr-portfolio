import { FaHeart } from 'react-icons/fa';
import { Section, FooterBio } from './styles';

const FooterSection = () => {
  return (
    <Section>
      <FooterBio>
      © 2025 Mandiegr. Todos os direitos reservados. <FaHeart color="#ff6b9d" /> 
      </FooterBio>
    </Section>
  );
};

export default FooterSection;