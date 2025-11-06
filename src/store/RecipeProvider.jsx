import RecipeContext from "./recipe-context";
import useRecipes from "../hooks/use-recipes";

const RecipeProvider = (props) => {
  const recipeContext = useRecipes();

  return (
    <RecipeContext.Provider value={recipeContext}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
