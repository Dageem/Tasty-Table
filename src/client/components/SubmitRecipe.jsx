import React, { useState } from "react";
import { useCreateRecipeMutation } from "../reducers/api";

const SubmitRecipe = () => {
  const [createRecipe, { isLoading, isError, error }] =
    useCreateRecipeMutation();

  const [formData, setFormData] = useState({
    name: "",
    details: "",
    desc: "",
    instructions: "",
    imageUrl: "",
    image2Url: "",
    image3Url: "",
    userId: 1,
    tagId: 1,
    tags: [""],
    ingredients: [{ name: "", measurement: "" }],
  });

  //   const [createRecipe, { isLoading, isError, error }] =
  //     useCreateRecipeMutation();

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleTagChange = (index, value) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData({ ...formData, tags: newTags });
  };

  const handleIngredientChange = (index, key, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index][key] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: [...prevData.ingredients, { name: "", measurement: "" }],
    }));
  };

  const addTag = () => {
    setFormData((prevData) => ({ ...prevData, tags: [...prevData.tags, ""] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting formData:", formData);
    if (!formData.name) {
      alert("Please enter a recipe name.");
      return;
    }
    try {
      await createRecipe(formData);
      alert("Recipe submitted successfully!");
    } catch (error) {
      console.error("Failed to submit the recipe", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        placeholder="Recipe Name"
        value={formData.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <textarea
        placeholder="Recipe details"
        value={formData.details}
        onChange={(e) => handleInputChange("details", e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={formData.desc}
        onChange={(e) => handleInputChange("desc", e.target.value)}
      />
      <textarea
        placeholder="Instructions"
        value={formData.instructions}
        onChange={(e) => handleInputChange("instructions", e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={(e) => handleInputChange("imageUrl", e.target.value)}
      />
      <input
        type="text"
        placeholder="2nd Image URL"
        value={formData.image2Url}
        onChange={(e) => handleInputChange("image2Url", e.target.value)}
      />
      <input
        type="text"
        placeholder="3rd Image URL"
        value={formData.image3Url}
        onChange={(e) => handleInputChange("image3Url", e.target.value)}
      />
      <div>
        {formData.tags.map((tag, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Tag ${index + 1}`}
              value={tag}
              onChange={(e) => handleTagChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addTag}>
          Add Tag
        </button>
      </div>

      <div>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Measurement"
              value={ingredient.measurement}
              onChange={(e) =>
                handleIngredientChange(index, "measurement", e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
      </div>

      <button type="submit" disabled={isLoading}>
        Submit Recipe
      </button>
      {isError && <p>Error: {error.message}</p>}
    </form>
  );
};

export default SubmitRecipe;
