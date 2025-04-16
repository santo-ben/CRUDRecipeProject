import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <tr className="recipe-create">
      <td><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /></td>
      <td><input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} placeholder="Cuisine" required /></td>
      <td><input type="url" name="photo" value={formData.photo} onChange={handleChange} placeholder="Photo URL" required /></td>
      <td><textarea name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Ingredients" required /></td>
      <td><textarea name="preparation" value={formData.preparation} onChange={handleChange} placeholder="Preparation" required /></td>
      <td><button type="button" onClick={handleSubmit}>Create</button></td>
    </tr>
  );
}

export default RecipeCreate;

