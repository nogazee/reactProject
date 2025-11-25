import { useReducer, useEffect } from "react";
import Recipe from "../models/recipeModel";

type State = Recipe[];
type ActionObj = {
  type: string;
  payload: string | Recipe;
};

const defaultRecipesState: Recipe[] = [];

const recipesReducer = (state: State, action: ActionObj) => {
  switch (action.type) {
    case "ADD":
      return state.concat({
        ...(action.payload as Recipe),
        // id: Math.random().toString()
      });
    case "REMOVE":
      return state.filter((recipe) => recipe.id !== action.payload);
    case "UPDATE":
      return state.map((recipe) =>
        recipe.id === (action.payload as Recipe).id
          ? { ...(action.payload as Recipe) }
          : recipe
      );
    default:
      return defaultRecipesState;
  }
};

const useRecipes = () => {
  const [recipesState, dispatchRecipesAction] = useReducer(
    recipesReducer,
    defaultRecipesState,
    () => {
      const storedRecipes = localStorage.getItem("recipes");
      if (storedRecipes) {
        return JSON.parse(storedRecipes);
      }
      return defaultRecipesState;
    }
  );

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipesState));
  }, [recipesState]);

  const addRecipeHandler = (recipe: Recipe) => {
    dispatchRecipesAction({
      type: "ADD",
      payload: recipe,
    });
  };

  const removeRecipeHandler = (id: string) => {
    dispatchRecipesAction({
      type: "REMOVE",
      payload: id,
    });
  };

  const updateRecipeHandler = (updates: Recipe) => {
    dispatchRecipesAction({
      type: "UPDATE",
      payload: updates,
    });
  };

  return {
    recipes: recipesState,
    addRecipe: addRecipeHandler,
    removeRecipe: removeRecipeHandler,
    editRecipe: updateRecipeHandler,
  };
};

export default useRecipes;
