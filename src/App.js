import React, { useState } from 'react';
import AddRecipe from './components/Recipes/AddRecipe';
import RecipesList from './components/Recipes/RecipesList';
import "./App.css";

const App = () => {
  const [recipesList, setRecipesList] = useState([]);

  const addRecipeHandler = (name, ingredients, instructions, image) => {
    setRecipesList((prevRecipesList) => {
      return [...prevRecipesList, { name, ingredients, instructions, image}];
    })
  }

  return (
    <div>
      <AddRecipe onAddRecipe={addRecipeHandler}></AddRecipe>
      <RecipesList recipes={recipesList}></RecipesList>
    </div>
  );
}

export default App;