import React, { ChangeEvent, Fragment, useState } from "react";
import Button from "../UI/Button";
import DynamicInputs from "../UI/DynamicInputs";
import classes from "./Recipe.module.css";
import Recipe from "../../models/recipeModel";

const EditRecipe: React.FC<{
  recipe: Recipe;
  onDone: (recipe: Recipe) => void;
  id: string;
  isEditing: boolean;
}> = (props) => {
  const [enteredIngredients, setEnteredIngredients] = useState([
    ...props.recipe.ingredients,
    "",
  ]);
  const [enteredInstructions, setEnteredInstructions] = useState([
    ...props.recipe.instructions,
    "",
  ]);
  const [enteredName, setEnteredName] = useState(props.recipe.name);
  const [selectedImage, setSelectedImage] = useState(props.recipe.image);
  const [error, setError] = useState<{ message: string } | null>();

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const imageUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        event.target.value = "";
        setError({
          message: "Please select an image file.",
        });
        return;
      }
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const updateRecipeHandler = () => {
    if (
      enteredName.trim().length === 0 ||
      enteredIngredients.length === 1 ||
      enteredInstructions.length === 1
    ) {
      setError({
        message: "Please enter a valid value in all fields.",
      });
      return;
    }

    setError(null);

    const updatedRecipe = new Recipe(
      enteredName,
      enteredIngredients.slice(0, -1),
      enteredInstructions.slice(0, -1),
      selectedImage,
      props.id
    );
    props.onDone(updatedRecipe);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
      </header>
      <div className={classes["img-select"]}>
        <img
          className={`${classes.img} ${props.isEditing && classes["img-edit"]}`}
          alt={enteredName}
          src={selectedImage}
        ></img>
        <p>Click or drag to select an image</p>
        <input type="file" accept="image/*" onChange={imageUploadHandler} />
      </div>
      <div className={classes.content}>
        <h3>Ingredients</h3>
        <DynamicInputs
          type="Ingredient"
          inputValues={enteredIngredients}
          setInputValues={setEnteredIngredients}
        />
        <h3>Instructions</h3>
        <DynamicInputs
          type="Instruction"
          inputValues={enteredInstructions}
          setInputValues={setEnteredInstructions}
        />
      </div>
      {error && <p className={classes.error}>{error.message}</p>}
      <Button className={classes["done-btn"]} onClick={updateRecipeHandler}>
        Done
      </Button>
    </Fragment>
  );
};

export default EditRecipe;
