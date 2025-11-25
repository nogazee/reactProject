import React from "react";
import Recipe from "../models/recipeModel";

type RecipeContextObj = {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (recipeId: string) => void;
  editRecipe: (updates: Recipe) => void;
};

const RecipeContext = React.createContext<RecipeContextObj>({
  recipes: [],
  addRecipe: (recipe: Recipe) => {},
  removeRecipe: (recipeId: string) => {},
  editRecipe: (updates: Recipe) => {},
});

export default RecipeContext;
