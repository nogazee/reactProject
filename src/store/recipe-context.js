import React from "react";

const RecipeContext = React.createContext({
  recipes: [],
  addRecipe: (recipe) => {},
  removeRecipe: (recipeId) => {},
  editRecipe: (updates) => {},
});

export default RecipeContext;
