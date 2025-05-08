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

export const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0e1e8;
`;

export const ItemTitle = styled.h3`
  font-size: 1.2rem;
  color: #8a6b8d;
  margin-bottom: 0.5rem;
`;

export const ItemSubtitle = styled.p`
  font-size: 1rem;
  color: #a38aa5;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

export const ItemDate = styled.p`
  font-size: 0.9rem;
  color: #b8a9bb;
`;

export const ExperienceDescription = styled.div`
  margin-top: 1rem;
  
  ul {
    padding-left: 1.5rem;
    list-style-type: none;
  }
  
  li {
    margin-bottom: 0.8rem;
    position: relative;
    padding-left: 1.5rem;
    color: #6b5b75;

    &::before {
      content: '♥';
      position: absolute;
      left: 0;
      color: #ff9bb8;
    }
  }
`;