import React, { useState } from "react";
import { useCreateRecipeMutation } from "../reducers/api";

const RecipeForm = ({ userId }) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [desc, setDesc] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image2Url, setImage2Url] = useState("");
  const [image3Url, setImage3Url] = useState("");
  const [tags, setTags] = useState([""]);
  const [ingredients, setIngredients] = useState([
    { name: "", measurement: "" },
  ]);

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipeData = {
      name,
      details,
      desc,
      instructions,
      imageUrl,
      image2Url,
      image3Url,
      userId,
      tagId: null,
      tags,
      ingredients,
    };

    try {
      const response = await createRecipe(recipeData);
      console.log(response);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Details"
      ></textarea>
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      ></textarea>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      ></textarea>
      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
      />
      <input
        value={image2Url}
        onChange={(e) => setImage2Url(e.target.value)}
        placeholder="Image 2 URL"
      />
      <input
        value={image3Url}
        onChange={(e) => setImage3Url(e.target.value)}
        placeholder="Image 3 URL"
      />

      {tags.map((tag, index) => (
        <input
          key={index}
          value={tag}
          onChange={(e) => {
            const newTags = [...tags];
            newTags[index] = e.target.value;
            setTags(newTags);
          }}
          placeholder="Tag"
        />
      ))}
      <button onClick={() => setTags([...tags, ""])}>Add Tag</button>

      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            value={ingredient.name}
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[index].name = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder="Ingredient Name"
          />
          <input
            value={ingredient.measurement}
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[index].measurement = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder="Measurement"
          />
        </div>
      ))}
      <button
        onClick={() =>
          setIngredients([...ingredients, { name: "", measurement: "" }])
        }
      >
        Add Ingredient
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
