import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  ).filter((recipe) => recipe !== undefined);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
