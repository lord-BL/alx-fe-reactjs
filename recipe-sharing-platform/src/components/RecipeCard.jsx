import React from "react";

const RecipeCard = ({ id, title, summary, image }) => {
  return (
    <div className="bg-white  rounded-lg border border-gray-600 shadow-sm hover:shadow-lg w-72 h-full m-3 ">
      <img
        src={image}
        alt="Recipe Image"
        className="w-full h-40 object-cover rounded-t-lg"
      />

      <div>
        <h2 className="font-bold p-1">{title}</h2>
        <p className="p-1">{summary}</p>
        <a href={`/recipe/${id}`} className="text-blue-500 underline p-1 block">
          View Details
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
