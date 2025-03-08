import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const App = () => {
  return (
    <div>
      <nav>
        {/* Simple navigation */}
        <Link to="/">Home</Link>
      </nav>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Recipe Sharing App</h1>
                <SearchBar />
                <RecipeList />
                <AddRecipeForm />
                <FavoritesList />
                <RecommendationsList />
              </div>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
