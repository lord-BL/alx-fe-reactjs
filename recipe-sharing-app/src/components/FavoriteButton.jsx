import React from "react";
import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore(
    (state) => ({
      favorites: state.favorites,
      addFavorite: state.addFavorite,
      removeFavorite: state.removeFavorite,
    })
  );

  const isFavorited = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorited ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
    >
      {isFavorited ? "❤️ Unfavorite" : "🤍 Favorite"}
    </button>
  );
};

export default FavoriteButton;
