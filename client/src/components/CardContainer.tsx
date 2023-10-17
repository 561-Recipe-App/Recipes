import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

interface CardContainerProps {
  count: number;
}

const CardContainer: React.FC<CardContainerProps> = ({ count }) => {
  // Generate an array of numbers based on the count prop
  const cardCount = Array.from({ length: count });

  return (
    <Container>
      <CardDeck>
        {cardCount.map((_, index) => (
          <Card key={index}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card {index + 1}</Card.Title>
              <Card.Text>
                This is a sample card with some sample text.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
};

export default CardContainer;