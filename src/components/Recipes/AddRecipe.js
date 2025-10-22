import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import DynamicInputs from "../UI/DynamicInputs";
import classes from "./AddRecipe.module.css";

const AddRecipe = (props) => {
  const [enteredIngredients, setEnteredIngredients] = useState([""]);
  const [enteredInstructions, setEnteredInstructions] = useState([""]);
  const [enteredName, setEnteredName] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [error, setError] = useState();

  const addRecipeHandler = (event) => {
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
    props.onAddRecipe(
      enteredName,
      enteredIngredients.slice(0, -1),
      enteredInstructions.slice(0, -1),
      selectedImage
    );

    setEnteredIngredients([""]);
    setEnteredInstructions([""]);
    setEnteredName("");
    setSelectedImage();

    event.target.reset();
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const imageUploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file.type.startsWith("image/")) {
        event.target.value = "";
        return;
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
          <label>
            Ingredients
            <DynamicInputs
              type="Ingredient"
              inputValues={enteredIngredients}
              setInputValues={setEnteredIngredients}
            />
          </label>
          <label>
            Instructions
            <DynamicInputs
              type="Instruction"
              inputValues={enteredInstructions}
              setInputValues={setEnteredInstructions}
            />
          </label>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={imageUploadHandler}
          ></input>
          {selectedImage && (
            <div>
              <img
                alt="not found"
                src={URL.createObjectURL(selectedImage)}
              />
            </div>
          )}
          <Button type="submit">Add Recipe</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddRecipe;
