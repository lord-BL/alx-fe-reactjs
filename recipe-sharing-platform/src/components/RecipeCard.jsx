import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = ({ id, title, summary, image }) => {
  return (
    <Link to={`/recipe/${id}`} className="w-72">
      <div className="bg-white  rounded-lg border border-gray-600 shadow-sm hover:shadow-lg w-72 h-full m-3 hover:ease-in-out">
        <img
          src={image}
          alt="Recipe Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />

        <div>
          <h2 className="font-bold p-1">{title}</h2>
          <p className="p-1">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
