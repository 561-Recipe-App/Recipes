"use client";
import React, { useEffect, useState } from "react";
//import { useParams } from 'react-router';
import { RecipeView } from "@/components/recipe-view";

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
          `https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=9e1a3f29d91541358e31191ef95c5ddc`
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
        <RecipeView data={recipeData} />
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
