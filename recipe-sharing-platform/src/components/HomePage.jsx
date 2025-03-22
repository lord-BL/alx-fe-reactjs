import React from "react";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import recipeData from "../data.json";
import RecipeDetail from "./RecipeDetail";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);
  return (
    <div className="bg-slate-600 text-blue-500 h-full grid-cols-2">
      <div>
        <h1 className="p-0.5 text-xl font-bold">
          Welcome to the Recipe Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2.5 hover:shadow-sm rounded-lg shadow-sm">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              summary={recipe.summary}
              image={recipe.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
