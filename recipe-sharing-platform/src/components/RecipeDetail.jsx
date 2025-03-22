import { useParams } from "react-router-dom";
import data from "../data.json"; // ✅ Import JSON directly
import React from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === parseInt(id)); // ✅ Find recipe using ID

  if (!recipe)
    return <p className="text-white text-center mt-5">Recipe not found.</p>;

  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center text-white p-4">
      <div className="bg-white text-gray-900 w-full max-w-2xl p-5 rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-md"
        />
        <h1 className="text-2xl font-bold mt-4">{recipe.title}</h1>
        <h2 className="text-lg font-semibold mt-2">Ingredients:</h2>
        <ul className="list-disc list-inside text-sm">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-4">Instructions:</h2>
        <p className="text-sm">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
