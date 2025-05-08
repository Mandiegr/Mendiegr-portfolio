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

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0e1e8;

  h3 {
    font-size: 1.2rem;
    color: #d4a5c3;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillItem = styled.span`
  display: inline-block;
  background: #f8e8ee;
  color: #8a6b8d;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid #e8d3de;
`;