import { useReducer, useEffect } from "react";

const defaultRecipesState = [];

const recipesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.concat({
        ...action.payload,
        id: Math.random().toString(),
      });
    case "REMOVE":
      return state.filter((recipe) => recipe.id !== action.payload);
    case "UPDATE":
      return state.map((recipe) =>
        recipe.id === action.payload.id ? { ...action.payload } : recipe
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
      return JSON.parse(localStorage.getItem("recipes")) || defaultRecipesState;
    }
  );

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipesState));
  }, [recipesState]);

  const addRecipeHandler = (recipe) => {
    dispatchRecipesAction({
      type: "ADD",
      payload: recipe,
    });
  };

  const removeRecipeHandler = (id) => {
    dispatchRecipesAction({
      type: "REMOVE",
      payload: id,
    });
  };

  const updateRecipeHandler = (updates) => {
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
