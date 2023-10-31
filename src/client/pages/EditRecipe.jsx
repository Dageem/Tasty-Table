import React, { useState, useEffect } from "react";
import { useEditRecipeMutation, useGetTagsQuery } from "../reducers/api";
import { useSelector, useDispatch } from "react-redux";
// import { useGetRecipeByIdQuery } from "../reducers/api";
import {useParams, useNavigate} from "react-router-dom";
import { api } from "../reducers/api"

function EditRecipe(){
const me = useSelector((state) => state.auth.credentials.user)
const { id } = useParams();
const dispatch = useDispatch();
const recipe = useSelector(state =>
  state.data.recipe
);
const { data, isLoading, error } = useGetTagsQuery();
if (isLoading) return <div>Loading tags...</div>;
if (error) return <div>Error loading tags!</div>;
useEffect(() => {
  if (id) {
    dispatch(api.endpoints.getRecipeById.initiate(id));
  }
}, [dispatch, id]);
const [change, setChange] = useState(false);

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

  useEffect(() => {
    if (recipe && recipe.recipetags) {
      console.log("recipe.recipetags before setting state:", recipe.recipetags);
      setName(recipe.name || "");
      setDetails(recipe.details || "");
      setDesc(recipe.desc || "");
      setInstructions(recipe.instructions || "");
      setImageUrl(recipe.imageUrl || "");
      setImage2Url(recipe.image2Url || "");
      setImage3Url(recipe.image3Url || "");
      setTags(recipe.recipetags.map((i) => {
        return i.tag
    }))
      // setIngredients(recipe.Ingredient_recipe || [{ name: "", measurement: "" }]);
    }
  }, [recipe]);

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

  
  const toggleTag = (tag) => {
    setTags((prevTags) => {
      // Check if the tag is already included in the tags array
      if (prevTags.includes(tag)) {
        // If it is, remove the tag and return a new array
        return prevTags.filter((t) => t !== tag);
      } else {
        // If it's not, add the tag and return a new array
        return [...prevTags, tag];
      }
    })};



  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
      <form className="bg-white p-8 rounded-lg shadow-md w-7/10 mx-auto" onSubmit={handleSubmit}>
        <button className="border-2 p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50" onClick={() => navigate("/profile")}>
          Go Back
        </button>
        {/* Name input */}
        <input className="border-2 w-full rounded mb-4" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        {/* Details input */}
        <textarea className="border-2 h-20 w-full rounded mb-4" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Details"></textarea>
        {/* Description input */}
        <textarea className="border-2 h-40 w-full rounded mb-4" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description"></textarea>
        {/* Instructions input */}
        <textarea className="border-2 p-2 w-full h-40 rounded mb-4" value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions"></textarea>
        {/* Image URL inputs */}
        <input className="border-2 p-2 w-full rounded mb-4" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
        <input className="border-2 p-2 w-full rounded mb-4" value={image2Url} onChange={(e) => setImage2Url(e.target.value)} placeholder="Image 2 URL" />
        <input className="border-2 p-2 w-full rounded mb-4" value={image3Url} onChange={(e) => setImage3Url(e.target.value)} placeholder="Image 3 URL" />
        
        {/* Tags */}
        {/* <div>
          <button type="button" className="bg-green-300 text-white p-2 rounded mb-4 hover:bg-green-800" onClick={() => setTags([...tags, { name: "" }])}>
            Add Tag
          </button>
          {tags.map((tag, index) => (
            <div key={`tag-${index}`} className="flex flex-wrap -mx-3 mb-2">
              {console.log(tag)}
              <div className="w-full px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Tag Name"
                  value={tag.name}
                  onChange={(e) => {
                    const newTags = [...tags];
                    newTags[index].name = e.target.value;
                    setTags(newTags);
                  }}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => {
                    const newTags = tags.filter((_, idx) => idx !== index);
                    setTags(newTags);
                  }}
                >
                  Remove Tag
                </button>
              </div>
            </div>
          ))}
        </div> */}

         {/* Display all available tags from the API */}
         {data && data.map((apiTag, index) => {
          const isSelected = tags.some(tag => tag.name === apiTag.name);
          return (
            <button
              key={`tag-${index}`}
              type="button"
              className={`inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 ${
                isSelected ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => toggleTag(apiTag.name)}
            >
              {apiTag.name}
            </button>
          );
        })}
        
        {/* Ingredients */}
        <div>
          <button type="button" className="bg-green-300 text-white p-2 rounded mb-4 hover:bg-green-800" onClick={() => setIngredients([...ingredients, { name: "", measurement: "" }])}>
            Add Ingredient
          </button>
          {ingredients.map((ingredient, index) => (
            <div key={`ingredient-${index}`} className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Ingredient Name"
                  value={ingredient.name}
                  onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index].name = e.target.value;
                    setIngredients(newIngredients);
                  }}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  type="text"
                  placeholder="Measurement"
                  value={ingredient.measurement}
                  onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index].measurement = e.target.value;
                    setIngredients(newIngredients);
                  }}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => {
                    const newIngredients = ingredients.filter((_, idx) => idx !== index);
                    setIngredients(newIngredients);
                  }}
                >
                  Remove Ingredient
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
  
  export default EditRecipe;
  