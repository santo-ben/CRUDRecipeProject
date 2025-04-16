import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <div className="recipe-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Photo</th>
              <th>Ingredients</th>
              <th>Preparation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td>
                  <img
                    src={recipe.photo}
                    alt={recipe.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </td>
                <td className="content_td">
                  <p>{recipe.ingredients}</p>
                </td>
                <td className="content_td">
                  <p>{recipe.preparation}</p>
                </td>
                <td>
                  <button name="delete" onClick={() => deleteRecipe(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* Add RecipeCreate Row */}
            <RecipeCreate addRecipe={addRecipe} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

