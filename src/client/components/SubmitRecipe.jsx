import React, { useState } from "react";
import { useCreateRecipeMutation } from "../reducers/api";

const RecipeForm = () => {
  // console.log({userId})
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [desc, setDesc] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image2Url, setImage2Url] = useState("");
  const [image3Url, setImage3Url] = useState("");
  const [tags, setTags] = useState([{ id: "", name: "" }]);
  const [userId, setUserId] = useState("");
  const [ingredients, setIngredients] = useState([
    { name: "", measurement: "" },
  ]);
  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numericUser = parseInt(userId, 10);

    const recipeData = {
      name,
      details,
      desc,
      instructions,
      imageUrl,
      image2Url,
      image3Url,
      userId: numericUser,  
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
    <form onSubmit={handleSubmit}>
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
       <input
        type= "number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="user ID"
      />


      {tags.map((tag, index) => (
          <div key={index}>
              <input
                  type="number"
                  value={tag.id}
                  onChange={(e) => {
                      const newTags = [...tags];
                      newTags[index].id = parseInt(e.target.value, 10) || ""; 
                      setTags(newTags);
                  }}
                  placeholder="Tag ID"
              />
              <input
                  value={tag.name}
                  onChange={(e) => {
                      const newTags = [...tags];
                      newTags[index].name = e.target.value;
                      setTags(newTags);
                  }}
                  placeholder="Tag Name"
              />
          </div>
      ))}


      <button onClick={() => setTags([...tags, { id: "", name: "" }])}>Add Tag</button>

              {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              value={ingredient.id || ""}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index].id = Number(e.target.value);
                setIngredients(newIngredients);
              }}
              placeholder="Ingredient ID"
            />
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
            setIngredients([...ingredients, { id: "", name: "", measurement: "" }])
          }
        >
          Add Ingredient
        </button>


      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;