import React, { useState, useContext, ChangeEvent } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import DynamicInputs from "../UI/DynamicInputs";
import RecipeContext from "../../store/recipe-context";
import classes from "./AddRecipe.module.css";
import Recipe from "../../models/recipeModel";

const AddRecipe = () => {
  const [enteredIngredients, setEnteredIngredients] = useState([""]);
  const [enteredInstructions, setEnteredInstructions] = useState([""]);
  const [enteredName, setEnteredName] = useState("");
  const [selectedImage, setSelectedImage] = useState<
    null | MediaSource | Blob
  >();
  const [error, setError] = useState<{
    title: string;
    message: string;
  } | null>();

  const { addRecipe } = useContext(RecipeContext);

  const addRecipeHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredIngredients.length === 1 ||
      enteredInstructions.length === 1 ||
      !selectedImage
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid value in all fields.",
      });

      return;
    }

    const newRecipe = new Recipe(
      enteredName,
      enteredIngredients.slice(0, -1),
      enteredInstructions.slice(0, -1),
      URL.createObjectURL(selectedImage)
    );

    addRecipe(newRecipe);

    setEnteredIngredients([""]);
    setEnteredInstructions([""]);
    setEnteredName("");
    setSelectedImage(null);

    (event.target as HTMLFormElement).reset();
  };

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const imageUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        event.target.value = "";
        setError({
          title: "Invalid file input",
          message: "Please select an image file.",
        });
        return;
      }
    }
    setSelectedImage(file);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <header className={classes.header}>
          <h2>Add Recipe</h2>
        </header>
        <form onSubmit={addRecipeHandler} autoComplete="off">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            id="recipeName"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <p>Ingredients</p>
          <DynamicInputs
            type="Ingredient"
            inputValues={enteredIngredients}
            setInputValues={setEnteredIngredients}
          />
          <p>Instructions</p>
          <DynamicInputs
            type="Instruction"
            inputValues={enteredInstructions}
            setInputValues={setEnteredInstructions}
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={imageUploadHandler}
          ></input>
          {selectedImage && (
            <div>
              <img alt="preview" src={URL.createObjectURL(selectedImage)} />
            </div>
          )}
          <Button type="submit">Add Recipe</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddRecipe;
