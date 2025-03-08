import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const { searchTerm, filteredRecipes, recipes } = useRecipeStore((state) => ({
    searchTerm: state.searchTerm,
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
  }));

  // Use filtered recipes if a search term is provided; otherwise, show all recipes.
  const recipeList = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {recipeList.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
