import {
    ExperienceItem as Container,
    ItemTitle,
    ItemSubtitle,
    ItemDate,
    ExperienceDescription
  } from './styles';
  
  interface ExperienceItemProps {
    title: string;
    subtitle: string;
    date: string;
    location?: string;
    description: string[];
  }
  
  const ExperienceItem = ({ 
    title, 
    subtitle, 
    date, 
    location, 
    description 
  }: ExperienceItemProps) => {
    return (
      <Container>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubtitle>{subtitle}</ItemSubtitle>
        <ItemDate>{date}</ItemDate>
        {location && <ItemSubtitle>{location}</ItemSubtitle>}
        <ExperienceDescription>
          <ul>
            {description.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </ExperienceDescription>
      </Container>
    );
  };
  
  export default ExperienceItem;