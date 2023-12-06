"use client";
import React, { useEffect, useState } from "react";
import { RecipeView } from "@/components/recipe-view";

type RecipeParams = {
  params: any
  searchParams: string[]
};
const RecipePage = (url: RecipeParams) => {
  const id = url.params.id[0];
  const [recipeData, setRecipeData] = useState<RecipeApiResponse | null>(null);
  console.log(url.params.id[0]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/recipe`, {
          headers: {
            "Content-Type": "application/json",
            "Recipe-ID": id
          }
        });
        const data = await response.json();
        setRecipeData(data);
      } catch (error) {
        console.error("Fetching [...catchall]:", error);
      }
    };

    fetchData();
  }, [id]);

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

export type RecipeApiResponse = {
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
