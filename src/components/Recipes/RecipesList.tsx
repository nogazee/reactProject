import { useContext } from "react";
import RecipeItem from "./RecipeItem";
import classes from "./RecipesList.module.css";
import RecipeContext from "../../store/recipe-context";

const RecipesList = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className={classes.container}>
      {recipes.map((recipe, index) => (
        <RecipeItem recipe={recipe} key={index} />
      ))}
    </div>
  );
};

export default RecipesList;
