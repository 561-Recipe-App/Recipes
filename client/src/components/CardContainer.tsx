import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

export interface CardContent {
  title: string;
  text: string;
  image?: string;
}

interface CardContainerProps {
  count: number;
  cardContent: CardContent[];
}

const CardContainer: React.FC<CardContainerProps> = ({ count, cardContent }) => {
  // Ensure that the count matches the length of the cardContent array
  const validatedCount = Math.min(count, cardContent.length);

  return (
    <Container>
      <CardDeck>
        {cardContent.slice(0, validatedCount).map((content, index) => (
          <Card key={index}>
            {content.image && <Card.Img variant="top" src={content.image} alt={content.title} style={{ width: '196px', height: '210px'}}/>} {/*Updated conditional*/}
            <Card.Body>
              <Card.Title>{content.title}</Card.Title>
              <Card.Text>{content.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
};

export default CardContainer;
