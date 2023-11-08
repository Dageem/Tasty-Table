import React, { useState, useEffect } from "react";
import {
  useGetPopTagsQuery,
  useGetRecipeByIdQuery,
  useGetTagsQuery,
} from "../../../reducers/api";
import { useEditRecipeMutation } from "../../../reducers/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import EditRecipeIngredients from "./comps/EditRecipeIngredients";
import { api } from "../../../reducers/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditRecipe() {
  // Redux
  const me = useSelector((state) => state.auth.credentials.user);
  
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // API and Edit 
  const { data, isLoading, error} = useGetTagsQuery();
  const { data: popData, isLoading: popLoad, error: popError} = useGetPopTagsQuery();
  const { data: recipeData, isLoading: isLoadingRecipe, isError } = useGetRecipeByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const [editRecipe, { isLoading: isEditing, error: editError }] = useEditRecipeMutation();
  const [hasUpdated, setHasUpdated] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    details: "",
    desc: "",
    instructions: "",
    imageUrl: "",
    image2Url: "",
    image3Url: "",
    tags: [{ name: "" }],
    ingredients: [{ name: "", measurement: "" }],
  });

  // Update local state
  useEffect(() => {
    if (recipeData && !isLoadingRecipe && !isError) {
      setFormData({
        name: recipeData.name || "",
        details: recipeData.details || "",
        desc: recipeData.desc || "",
        instructions: recipeData.instructions || "",
        imageUrl: recipeData.imageUrl || "",
        image2Url: recipeData.image2Url || "",
        image3Url: recipeData.image3Url || "",
        tags: recipeData.recipetags?.map(tag => ({ name: tag.tag.name })) || [],
        ingredients: recipeData.Ingredient_recipe?.map(ingredient => ({
          name: ingredient?.ingredient?.name || "",
          measurement: ingredient.measurement || ""
        })) || [{ name: "", measurement: "" }],
      });
    }
  }, [recipeData, isLoadingRecipe, isError]);
  
  useEffect(() => {
    if (hasUpdated) {
      navigate('/profile');
    }
  }, [hasUpdated, navigate]);
  

    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
        
      };
  
    
    
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        console.log('Update Payload before submission:', formData);
        
        try {
    
          const updatedRecipe = await editRecipe({ ...formData, id: id }).unwrap(); 
          console.log('Edit Recipe Response:', updatedRecipe);
          
          // Invalidate the cache
          api.util.invalidateTags([{ type: 'Recipe', id: id }]);
          
          // Set hasUpdated to trigger the navigation
          setHasUpdated(true);
          
        } catch (err) {
          console.error('Failed to update recipe', err);
          setHasUpdated(false);
        }
      };
      
      
      

      useEffect(() => {
        console.log('Form data changed:', formData);
      }, [formData]);
      
      
      


      const toggleTag = (apiTag) => {
        const tagExists = formData.tags.some(tag => tag.name === apiTag.name);
        const updatedTags = tagExists
          ? formData.tags.filter(tag => tag.name !== apiTag.name)
          : [...formData.tags, { name: apiTag.name }];
        
        setFormData(prevFormData => ({
          ...prevFormData,
          tags: updatedTags
        }));
      };
      
      
      const removeTag = (tagName) => {
        const updatedTags = formData.tags.filter(tag => tag.name !== tagName);
        
        setFormData({
          ...formData,
          tags: updatedTags
        });
      };
     
      const isLoadingAnyData = isLoading || popLoad || isLoadingRecipe || isEditing;
      const hasError = error || popError || isError || editError;
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
        <>
        {isLoadingAnyData && <div>Loading...</div>}
      {hasError && <div>Error: {hasError.message}</div>}
      {!isLoadingAnyData && !hasError && recipeData && (
          <form className="bg-white p-8 rounded-lg shadow-md w-7/10 mx-auto" onSubmit={handleSubmit}>
            <button className="border-2 p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50" onClick={() => navigate("/profile")}>
              Go Back
            </button>
            {/* <div className="p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50">
            Name
            </div> */}
            <input 
              name="name"
              className="border-2 w-full rounded mb-4" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Name" 
            />
            Details
            <textarea 
              name="details"
              className="border-2 h-20 w-full rounded mb-4" 
              value={formData.details} 
              onChange={handleChange} 
              placeholder="Details"
            ></textarea>
            Description
              <textarea 
              name="description"
              className="border-2 h20 w-full rounded mb-4"
              value={formData.desc}
              onChange={handleChange}
              placeholder="description"
              />
              <input
                name="imageUrl"
                className="border-2 w-full rounded mb-4"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="imageUrl"
              />
              <input
                name="image2Url"
                className="border-2 w-full rounded mb-4"
                value={formData.image2Url}
                onChange={handleChange}
                placeholder="image2Url"
              />
              <input
                name="image3Url"
                className="border-2 w-full rounded mb-4"
                value={formData.image3Url}
                onChange={handleChange}
                placeholder="image3Url"
              />
              {/* Display all available tags from the API */}
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  htmlFor="currentTags"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Current Tags:
                </label>
                <div className="flex flex-wrap gap-2 p-3 bg-gray-200 rounded">
                  {formData.tags.map((tag, index) => (
                    <div key={index} className="relative group">
                      <button
                        type="button"
                        className="absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center"
                        onClick={() => removeTag(tag.name)}
                      >
                        &ndash;
                      </button>
                      <div className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full">
                        {tag.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Section for Popular Tags */}
              {popData && !popLoad && (
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Popular Tags (click to add or remove):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {popData.map((apiTag) => {
                      const isSelected = formData.tags.some(
                        (tag) => tag.name === apiTag.name
                      );
                      return (
                        <button
                          key={apiTag.id}
                          type="button"
                          className={`px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 ${
                            isSelected ? "bg-blue-500 text-white" : ""
                          }`}
                          onClick={() => toggleTag(apiTag)}
                        >
                          {apiTag.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              <EditRecipeIngredients
                ingredients={formData.ingredients}
                setIngredients={(newIngredients) =>
                  setFormData({ ...formData, ingredients: newIngredients })
                }
              />
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update Recipe
                </button>
                {/* //  disabled={isSubmitting}>
                    // {isSubmitting ? 'Updating...' : 'Update Recipe'} */}
              </div>
            </form>
          )}
      </>
      {/* )} */}
    </div>
  );
}

export default EditRecipe;
