import AddRecipe from "./components/Recipes/AddRecipe";
import RecipesList from "./components/Recipes/RecipesList";
import RecipeProvider from "./store/RecipeProvider";
import "./App.css";

const App = () => {
  return (
    <RecipeProvider>
      <AddRecipe></AddRecipe>
      <RecipesList></RecipesList>
    </RecipeProvider>
  );
};

export default App;
