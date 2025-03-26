import React, { useState } from "react";

function RecipeCreate({ onAddRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };

    onAddRecipe(newRecipe); // Pass data to parent
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <label htmlFor="name">Recipe Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="cuisine">Cuisine</label>
      <input
        type="text"
        name="cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        required
      />

      <label htmlFor="photo">Image URL</label>
      <input
        type="text"
        name="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />

      <label htmlFor="ingredients">Ingredients</label>
      <textarea
        name="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />

      <label htmlFor="preparation">Preparation</label>
      <textarea
        name="preparation"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        required
      />

      <button type="submit">Create Recipe</button>
    </form>
  );
}

export default RecipeCreate;
