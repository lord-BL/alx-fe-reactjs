import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />

        <Routes>
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />{" "}
          {/* ✅ Route for RecipeDetails */}
        </Routes>
        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
};

export default App;
