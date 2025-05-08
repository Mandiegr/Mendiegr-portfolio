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

export const FooterBio = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #6b5b75;
  background: rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px dashed #e8c3d5;
`;