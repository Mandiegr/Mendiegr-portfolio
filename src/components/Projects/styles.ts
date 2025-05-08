import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: #d4a5c3;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #ff9bb8;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  margin-top: 1.5rem;
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0e1e8;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 3px dotted #e8c3d5;
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #8a6b8d;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #6b5b75;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const ProjectTech = styled.span`
  display: inline-block;
  background: #f8e8ee;
  color: #8a6b8d;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #e8d3de;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #ffd6e8, #f8c3d8);
  color: #8a6b8d;
  border-radius: 30px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &:hover {
    background: linear-gradient(135deg, #ffc3dc, #f8b1d1);
    transform: translateY(-2px);
  }
`;