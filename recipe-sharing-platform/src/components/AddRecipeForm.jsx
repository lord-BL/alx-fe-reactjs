import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    if (title.trim() === "") {
      validationErrors.title = "Please enter a recipe title";
    }
    if (ingredients.trim() === "") {
      validationErrors.ingredients = "Please enter the ingredients";
    }
    if (steps.trim() === "") {
      validationErrors.steps = "Please enter the preparation steps";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form data
    // TODO: Implement the logic to post the form data

    // Reset the form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          className={`form-input ${errors.title ? "border-red-500" : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="ingredients"
          className="block text-gray-700 font-bold mb-2"
        >
          Ingredients
        </label>
        <textarea
          id="ingredients"
          className={`form-textarea ${
            errors.ingredients ? "border-red-500" : ""
          }`}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          className={`form-textarea ${errors.steps ? "border-red-500" : ""}`}
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AddRecipeForm;
