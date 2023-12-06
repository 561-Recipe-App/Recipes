import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
//import { useParams } from 'react-router';
import MainLayout from "../../../../client/src/components/MainLayout";

/*type RecipeParams = {
  id: string;
  title: string;
};*/
const RecipePage = () => {

  const [recipeData, setRecipeData] = useState<RecipeApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=a15d5ccf40414e79b58db4db072b75df`
        );
        const response = await data.json();
        setRecipeData(response.recipes[0]); // Since the response contains an array of recipes, take the first one
      } catch (error) {
        console.error("Error fetching random recipe:", error);
      }
    };

    fetchData();
  }, []);

  const title = recipeData?.title || "Recipe";
  const handleRandomRecipeClick = () => {
    // Reload the page
    window.location.reload();
  };

  return (
    recipeData && (
      <>
        <MainLayout>
          <Container>
            <Row>
              <Col>
                <h1>{title}</h1>
                {recipeData && (
                  <>
                    <Card>
                      <Card.Img variant="top" src={recipeData.image} />
                      <Card.Body>
                        <Card.Title>{recipeData.title}</Card.Title>
                        <Card.Text
                          dangerouslySetInnerHTML={{
                            __html: recipeData.summary
                          }}
                        />
                      </Card.Body>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          Preparation Minutes: {recipeData.preparationMinutes}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Cooking Minutes: {recipeData.cookingMinutes}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Servings: {recipeData.servings}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Health Score: {recipeData.healthScore}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Cuisine: {recipeData.cuisines.join(", ")}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Diet: {recipeData.diets.join(", ")}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Vegetarian: {recipeData.vegetarian ? "Yes" : "No"}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Vegan: {recipeData.vegan ? "Yes" : "No"}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Gluten-Free: {recipeData.glutenFree ? "Yes" : "No"}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Dairy-Free: {recipeData.dairyFree ? "Yes" : "No"}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Health Score: {recipeData.healthScore}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Weight Watcher Points:{" "}
                          {recipeData.weightWatcherSmartPoints}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Price Per Serving: $
                          {recipeData.pricePerServing.toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Source:{" "}
                          <a
                            href={recipeData.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {recipeData.sourceName}
                          </a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Wine Pairing: {recipeData.winePairing?.pairedWines.join(", ")}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Wine Pairing Text: {recipeData.winePairing?.pairingText}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          Instructions:{" "}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: recipeData.instructions
                            }}
                          ></div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                    <h2>Ingredients</h2>
                    <ListGroup>
                      {recipeData.extendedIngredients.map(
                        (ingredient, index) => (
                          <ListGroup.Item key={index}>
                            {ingredient.original}
                          </ListGroup.Item>
                        )
                      )}
                    </ListGroup>
                  </>
                )}
                <br />
                <Button variant="success" className="mr-2" onClick={handleRandomRecipeClick}>
                  New Random Recipe
                </Button>
              </Col>
            </Row>
          </Container>
        </MainLayout>
      </>
    )
  );
};

export default RecipePage;

type ExtendedIngredient = {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
};

type WinePairing = {
  pairedWines: string[];
  pairingText: string;
  productMatches: {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    averageRating: number;
    ratingCount: number;
    score: number;
    link: string;
  }[];
};

type AnalyzedInstruction = {
  name: string;
  steps: {
    number: number;
    step: string;
    ingredients: {
      id: number;
      name: string;
      localizedName: string;
      image: string;
    }[];
    equipment: {
      id: number;
      name: string;
      localizedName: string;
      image: string;
    }[];
    length?: {
      number: number;
      unit: string;
    };
  }[];
};

type RecipeApiResponse = {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
};
