import { useContext, useState, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ItemList from "../UI/ItemList";
import EditRecipe from "./EditRecipe";
import RecipeContext from "../../store/recipe-context";
import classes from "./Recipe.module.css";

const Recipe = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const recipeCtx = useContext(RecipeContext);

  const removeButtonClickHandler = (id) => {
    recipeCtx.removeRecipe(id);
  };

  const editButtonClickHandler = () => {
    setIsEditing(true);
  };

  const updateRecipeHandler = (updates) => {
    recipeCtx.editRecipe(updates);
    setIsEditing(false);
  };

  return (
    <Card className={classes.recipe}>
      {!isEditing ? (
        <Fragment>
          <header className={classes.header}>
            <h2>{props.recipe.name}</h2>
            <div
              className={classes["remove-btn"]}
              onClick={() => removeButtonClickHandler(props.recipe.id)}
            />
          </header>
          <img
            className={classes.img}
            alt={props.recipe.name}
            src={props.recipe.image}
          ></img>
          <Button
            className={classes["edit-btn"]}
            onClick={() => editButtonClickHandler(props.recipe.id)}
          >
            Edit
          </Button>
          <div className={classes.content}>
            <h3>Ingredients</h3>
            <ItemList items={props.recipe.ingredients}></ItemList>
            <h3>Instructions</h3>
            <ItemList items={props.recipe.instructions}></ItemList>
          </div>
        </Fragment>
      ) : (
        <EditRecipe {...props} id={props.recipe.id} onDone={updateRecipeHandler} isEditing={isEditing} />
      )}
    </Card>
  );
};

export default Recipe;
