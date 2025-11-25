class Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  id: string;

  constructor(
    recipeName: string,
    recipeIngredients: string[],
    recipeInstructions: string[],
    recipeImage: string,
    recipeId?: string
  ) {
    this.name = recipeName;
    this.ingredients = recipeIngredients;
    this.instructions = recipeInstructions;
    this.image = recipeImage;
    if (recipeId) {
      this.id = recipeId
    } else {
      this.id = Math.random().toString();
    }
  }
}

export default Recipe;
