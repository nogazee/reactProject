import Card from "../UI/Card";
import ItemList from "../UI/ItemList";
import classes from "./Recipe.module.css";

const Recipe = (props) => {
    return (
      <Card key={props.index} className={classes.recipe}>
        <header className={classes.header}>
          <h2>{props.recipe.name}</h2>
        </header>
        <img
          className={classes.img}
          alt={props.recipe.name}
          src={URL.createObjectURL(props.recipe.image)}
        ></img>
        <div className={classes.content}>
          <h3>Ingredients</h3>
          <ItemList items={props.recipe.ingredients}></ItemList>
          <h3>Instructions</h3>
          <ItemList items={props.recipe.instructions}></ItemList>
        </div>
      </Card>
    );
}

export default Recipe;