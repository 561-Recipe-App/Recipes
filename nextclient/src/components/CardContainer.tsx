import React from "react";
import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

interface CardContent {
  title: string;
  text: string;
  image: string;
}

interface CardContainerProps {
  count?: number;
  cardContent: CardContent[];
}

const CardContainer: React.FC<CardContainerProps> = ({ cardContent }) => {
  // Ensure that the count matches the length of the cardContent array


  return (
    <Container>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {cardContent.map((content) => (
          <Card key={content.title}>
            <img src={content.image} />
            <Card.Body>
              <Card.Title>{content.title}</Card.Title>
              <Card.Text>{content.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CardContainer;