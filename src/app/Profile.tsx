'use client';
import { Element } from 'react-scroll';
import { GiCupcake, GiButterfly } from 'react-icons/gi';
import { BsBalloonHeartFill, BsFlower1 } from 'react-icons/bs';
import styled from 'styled-components';
import Header from '../components/Header/index';
import SkillsSection from '../components/Skill/index';
import ExperienceSection from '../components/Experience/index';
import EducationSection from '../components/Education/index';
import ProjectsSection from '../components/Projects/index';
import FooterSection from '../components/Footer/index';
import FloatingNav from '../components/FloatingNav'; 

const ProfilePage = () => {
  return (
    <>
      <FloatingNav /> 
      <ProfileContainer>
        <CuteElement style={{ top: '50px', left: '5%', animationDelay: '0.5s' }}>
          <BsBalloonHeartFill color="#ff9bb8" />
        </CuteElement>
        <CuteElement style={{ top: '100px', right: '8%', animationDelay: '1s' }}>
          <GiButterfly color="#a5d8ff" />
        </CuteElement>
        <CuteElement style={{ bottom: '100px', left: '10%', animationDelay: '1.5s' }}>
          <GiCupcake color="#ffb3d9" />
        </CuteElement>
        <CuteElement style={{ bottom: '150px', right: '12%', animationDelay: '0.8s' }}>
          <BsFlower1 color="#b5ead7" />
        </CuteElement>

        <Header />

        <Element name="habilidades" id="habilidades">
          <SkillsSection />
        </Element>

        <Element name="experiencia" id="experiencia">
          <ExperienceSection />
        </Element>

        <Element name="formacao" id="formacao">
          <EducationSection />
        </Element>

        <Element name="projetos" id="projetos">
          <ProjectsSection />
        </Element>

        <Element name="footer" id="footer">
          <FooterSection />
        </Element>
      </ProfileContainer>
    </>
  );
};

export default ProfilePage;



const ProfileContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background: linear-gradient(145deg, #ffffff, #ffffff);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const CuteElement = styled.div`
  position: absolute;
  font-size: 1.8rem;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
  z-index: 0;

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }
`;

