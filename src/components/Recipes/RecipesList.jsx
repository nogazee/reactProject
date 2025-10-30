import { useContext } from "react";
import Recipe from "./Recipe";
import classes from "./RecipesList.module.css";
import RecipeContext from "../../store/recipe-context";

const RecipesList = () => {
  const recipeCtx = useContext(RecipeContext);
  
  return (
    <div className={classes.container}>
      {recipeCtx.recipes.map((recipe, index) => (
        <Recipe recipe={recipe} index={index} />
      ))}
    </div>
  );
};

export default RecipesList;
