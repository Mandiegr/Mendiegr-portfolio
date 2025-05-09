'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

interface NavItemProps {
  $active: boolean; 
  title: string;
}
const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('habilidades');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['habilidades', 'experiencia', 'formacao', 'projetos', 'footer'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'formacao', label: 'Formação' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'footer', label: 'Contato' }
  ];

  return (
    <NavContainer>
      {sections.map((section) => (
        <NavItem
          key={section.id}
          to={section.id}
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          $active={activeSection === section.id}
          title={section.label}
        />
      ))}
    </NavContainer>
  );
};

export default FloatingNav;



const NavContainer = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(255, 214, 232, 0.8);
  padding: 1rem;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    bottom: 1rem;
    top: auto;
    right: 50%;
    transform: translateX(50%);
    flex-direction: row;
  }
`;

const NavItem = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['$active'].includes(prop),
})<NavItemProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$active ? '#ff9bb8' : '#d4a5c3'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff9bb8;
    transform: scale(1.2);
  }
`;
