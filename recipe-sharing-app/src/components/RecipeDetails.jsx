import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const navigate = useNavigate();

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div>
        {/* Link to edit recipe */}
        <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
        {/* Delete button triggers deletion and navigates back to home */}
        <DeleteRecipeButton
          recipeId={recipe.id}
          onDelete={() => navigate("/")}
        />
      </div>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
