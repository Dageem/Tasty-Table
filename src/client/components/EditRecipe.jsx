import React, { useState } from "react";
import { useEditRecipeMutation } from "../reducers/api";
import { useSelector } from "react-redux";
// import { useGetRecipeByIdQuery } from "../reducers/api";
import {useParams, useNavigate} from "react-router-dom";

const EditRecipe = () => {
const me = useSelector((state) => state.auth.credentials.user)
  const { id } = useParams();
//   const { data, isLoading } = useGetRecipeByIdQuery(id);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [desc, setDesc] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image2Url, setImage2Url] = useState("");
  const [image3Url, setImage3Url] = useState("");
  const [tags, setTags] = useState([{ name: "" }]);
  const [ingredients, setIngredients] = useState([
    { name: "", measurement: "" },
  ]);
  const [editRecipe] = useEditRecipeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const recipeData = {
      id: id,
      name,
      details,
      desc,
      instructions,
      imageUrl,
      image2Url,
      image3Url,
      userId: me.userId,  
      tags,
      ingredients,
    };

    try {
      const response = await editRecipe(recipeData);
      console.log(response);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  const navigate = useNavigate();
  return (
 <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form className="bg-white p-8 rounded-lg shadow-md w-7/10 mx-auto" onSubmit={handleSubmit}>
    <button className="mb-6 bg-purple-900 text-white rounded px-6 py-3 hover:bg-purple-600" onClick={() => navigate("/profile")}>
        Go Back
    </button>
      <input  className="border p-2 w-full rounded mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea  className="border p-2 w-full rounded mb-4"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Details"
      ></textarea> 
      <textarea  className="border p-2 w-full rounded mb-4"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      ></textarea>
      <textarea  className="border p-2 w-full rounded mb-4"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      ></textarea>
      <input  className="border p-2 w-full rounded mb-4"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
      />
      <input  className="border p-2 w-full rounded mb-4"
        value={image2Url}
        onChange={(e) => setImage2Url(e.target.value)}
        placeholder="Image 2 URL"
      />
      <input  className="border p-2 w-full rounded mb-4"
        value={image3Url}
        onChange={(e) => setImage3Url(e.target.value)}
        placeholder="Image 3 URL"
      />
       
        



      {tags.map((tag, index) => (

          <div key={index} className="mb-4">
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


      <button className="bg-purple-800 text-white p-2 rounded mb-4" onClick={() => setTags([...tags, { name: "" }])}>Add Tag</button>

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
              className="flex-1 p-1 rounded mr-2"
            />
            <input
              value={ingredient.measurement}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index].measurement = e.target.value;
                setIngredients(newIngredients);
              }}
              placeholder="Measurement"
              className="flex-1 p-1 rounded mr-2"
            />
          </div>
        ))}
        <button className="bg-purple-800 text-white p-2 rounded mb-4"
          onClick={() =>
            setIngredients([...ingredients, { name: "", measurement: "" }])
          }
        >
          Add Ingredient
        </button>


      <button className="bg-purple-800 text-white p-4 rounded w-full" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditRecipe;