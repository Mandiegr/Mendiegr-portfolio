import {
    EducationItem as Container,
    ItemTitle,
    ItemSubtitle,
    ItemDate
  } from './styles';
  
  interface EducationItemProps {
    title: string;
    institution: string;
    period: string;
  }
  
  const EducationItem = ({ title, institution, period }: EducationItemProps) => {
    return (
      <Container>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubtitle>{institution}</ItemSubtitle>
        <ItemDate>{period}</ItemDate>
      </Container>
    );
  };
  
  export default EducationItem;