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
 <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
    <form className="bg-white p-8 rounded-lg shadow-md w-7/10 mx-auto" onSubmit={handleSubmit}>
    <button className="border-2 p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50" onClick={() => navigate("/profile")}>
        Go Back
    </button>
      <input  className="border-8 w-full rounded mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea  className="border-8 h-20 w-full rounded mb-4"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Details"
      ></textarea> 
      <textarea  className="border-8 h-40 w-full rounded mb-4"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      ></textarea>
      <textarea  className="border-8 p-2 w-full h-40 rounded mb-4"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      ></textarea>
      <input  className="border-8 p-2 w-full rounded mb-4"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
      />
      <input  className="border-8 p-2 w-full rounded mb-4"
        value={image2Url}
        onChange={(e) => setImage2Url(e.target.value)}
        placeholder="Image 2 URL"
      />
      <input  className="border-8 p-2 w-full rounded mb-4"
        value={image3Url}
        onChange={(e) => setImage3Url(e.target.value)}
        placeholder="Image 3 URL"
      />
       
        



          <div>
            <button className="bg-green-300 text-white p-2 rounded mb-4 hover:bg-green-800" onClick={() => setTags([...tags, { name: "" }])}>Add Tag</button>
          </div>
       {tags.map((tag, index) => (
      <div>
        <div>
          <button 
              onClick={() => {
                  const newTags = [...tags];
                  newTags.splice(index, 1);
                  setTags(newTags);
              }}
              className="bg-red-500 text-white p-1 rounded">
              Delete Tag
          </button>
        </div>
        <div key={index} className="border-8 p-2 rounded mb-4 flex items-center w-1/4">
            <input
                value={tag.name}
                onChange={(e) => {
                    const newTags = [...tags];
                    newTags[index].name = e.target.value;
                    setTags(newTags);
                }}
                placeholder="Tag Name"
                className="flex-1 p-1 rounded mr-2"/>
          </div>
    </div>
))}



      {ingredients.map((ingredient, index) => (
      <div>
        <div>
        <button 
            onClick={() => {
              const newIngredients = [...ingredients];
                newIngredients.splice(index, 1);
                setIngredients(newIngredients);
            }}
            className="bg-red-500 text-white p-1 rounded">
            Delete Ingredient
        </button>
      </div>
              <div key={index} className="border-8 p-2 rounded mb-4 flex items-center">
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
        </div>
      ))}
        <button className="bg-green-300 text-white p-2 rounded mb-4 hover:bg-green-800"
          onClick={() =>
            setIngredients([...ingredients, { name: "", measurement: "" }])
          }
        >
          Add Ingredient
        </button>


      <button className="bg-green-500 text-white p-4 rounded w-full hover:bg-green-800" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditRecipe;