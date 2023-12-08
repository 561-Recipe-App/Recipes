"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/recipe-card";

export default function Home() {
  const [recipeData, setRecipeData] = useState<any[] | null>(null);
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    if (query !== "") {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=9e1a3f29d91541358e31191ef95c5ddc`, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          const data = await response.json();
          // console.log(data);
          setRecipeData(data.results);
        } catch (error) {
          console.error("Fetching error:", error);
        }
      };

      fetchData();
    }
  }, [query]);

  // @ts-ignore
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQuery(e.currentTarget.value);
    }
  };

  return (
    <>
      <div className="flex justify-center p-4">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full max-w-md"
          onKeyDown={handleKeyPress}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {recipeData && recipeData.map((recipe: any) => (
          <div key={recipe.id} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-2">
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          </div>
        ))}
      </div>
    </>
  );
}
