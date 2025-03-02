import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ id, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => {
        deleteRecipe(id);
        onDelete();
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
