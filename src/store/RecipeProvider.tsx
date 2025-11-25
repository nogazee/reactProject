import RecipeContext from "./recipe-context";
import useRecipes from "../hooks/use-recipes";
import React, {PropsWithChildren} from "react";

const RecipeProvider: React.FC<PropsWithChildren> = (props) => {
  const recipeContext = useRecipes();

  return (
    <RecipeContext.Provider value={recipeContext}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
