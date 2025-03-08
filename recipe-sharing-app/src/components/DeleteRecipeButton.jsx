import React from "react";
import useRecipeStore from "./recipeStore"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    console.log(`Deleting recipe with ID: ${id}`);

    // Call Zustand store function to delete the recipe
    deleteRecipe(id);

    // Navigate after deletion
    navigate("/recipes"); // Adjust route if needed
  };

  return <button onClick={() => handleDelete(recipeId)}>Delete</button>;
};

export default DeleteRecipeButton;
