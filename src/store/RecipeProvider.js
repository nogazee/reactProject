import { useReducer } from "react";
import RecipeContext from "./recipe-context";

const defaultRecipeListState = {
  recipes: [],
};

const recipeListReducer = (state, action) => {
    if (action.type === "ADD") {
        return {
            recipes: state.recipes.concat(action.recipe)
        }
    }

    return defaultRecipeListState;
};

const RecipeProvider = (props) => {
  const [recipeListState, dispatchRecipeListAction] = useReducer(
    recipeListReducer,
    defaultRecipeListState
  );

  const addRecipeHandler = (recipe) => {
    dispatchRecipeListAction({
      type: "ADD",
      recipe,
    });
  };

  const recipeContext = {
    recipes: recipeListState.recipes,
    addRecipe: addRecipeHandler,
  };

  return (
    <RecipeContext.Provider value={recipeContext}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
