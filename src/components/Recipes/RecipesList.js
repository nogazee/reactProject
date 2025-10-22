import Card from "../UI/Card";
import InputList from "../UI/InputList";
import classes from "./RecipesList.module.css";

const RecipesList = (props) => {
  return (
    <div className={classes.container}>
      {props.recipes.map((recipe, index) => (
        <Card key={index} className={classes.recipe}>
          <header className={classes.header}>
            <h2>{recipe.name}</h2>
          </header>
          <img
            className={classes.img}
            alt="recipe"
            src={URL.createObjectURL(recipe.image)}
          ></img>
          <div className={classes.content}>
            <h3>Ingredients</h3>
            <InputList inputs={recipe.ingredients}></InputList>
            <h3>Instructions</h3>
            <InputList inputs={recipe.instructions}></InputList>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RecipesList;
