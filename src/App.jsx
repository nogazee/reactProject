import { Fragment } from "react";
import AddRecipe from "./components/Recipes/AddRecipe";
import RecipesList from "./components/Recipes/RecipesList";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <AddRecipe />
      <RecipesList />
    </Fragment>
  );
};

export default App;
