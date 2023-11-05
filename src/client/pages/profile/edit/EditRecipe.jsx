
import React, { useState, useEffect } from "react";
import { useGetPopTagsQuery, useGetRecipeByIdQuery, useGetTagsQuery } from "../../../reducers/api";
import { useEditRecipeMutation } from "../../../reducers/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import EditRecipeIngredients from "./comps/EditRecipeIngredients"
import { api } from "../../../reducers/api"




function EditRecipe() {
  // Redux 
  const me = useSelector((state) => state.auth.credentials.user);
  // const [isBoot, setIsBoot] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // API and Edit 
  // const { data, isLoading, error} = useGetTagsQuery();
  const { data: popData, isLoading: popLoad, error: popError} = useGetPopTagsQuery();
  const { isLoading: isLoadingRecipe} = useGetRecipeByIdQuery(id);
  const recipe = useSelector((state) => state.data.recipe);
  const [editRecipe, { isLoading: isEditing, error: editError }] = useEditRecipeMutation();
  const [load, setLoad] = useState(true)
  useEffect(() => {
      setLoad(isLoadingRecipe)
  }, [isLoadingRecipe])


  const [formData, setFormData] = useState({
    name: "",
    details: "",
    desc: "",
    instructions: "",
    imageUrl: "",
    image2Url: "",
    image3Url: "",
    tags:  [{ name: "" }],
    ingredients: [{ name: "", measurement: "" }]
  });

  useEffect(() => {
    // if (id && !hasSubmitted) {
      if (id) {
      // setIsBoot(true);
      dispatch(api.endpoints.getRecipeById.initiate(id))
        .unwrap()
        .finally(() => {
          // setIsBoot(false); // End loading
        });
    }
  // }, [id, dispatch, hasSubmitted]);
}, [id, dispatch]);

  // Update local state 
  useEffect(() => {
    // if (recipe && !hasSubmitted) {
      if (recipe) {
      const {
        name,
        details,
        desc,
        instructions,
        imageUrl,
        image2Url,
        image3Url,
        recipetags,
        Ingredient_recipe,
      } = recipe;

      // console.log('Ingredient_recipe:', Ingredient_recipe);
      // console.log('Tags: ', recipetags? recipetags.map(tagItem => tagItem.tag.name) : [{ name: "" }])

      setFormData({
        name: name || "",
        details: details || "",
        desc: desc || "",
        instructions: instructions || "",
        imageUrl: imageUrl || "",
        image2Url: image2Url || "",
        image3Url: image3Url || "",
        tags: recipetags ? recipetags.map(tagItem => ({ name: tagItem.tag.name })) : [],
        ingredients: Ingredient_recipe ? Ingredient_recipe.map(ingredientItem => ({
          name: ingredientItem?.ingredient?.name || "",
          measurement: ingredientItem.measurement || ""
        })) : [{ name: "", measurement: "" }],
      });
    }
  // }, [recipe, hasSubmitted]);
     }, [recipe]);

    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
  
    
    
      const handleSubmit = (event) => {
        event.preventDefault();
      
        console.log('Update Payload before submission:', formData);
        
        // Start the update process
        editRecipe({ ...formData, id: id }).unwrap()
          .then(updatedRecipe => {
            console.log('Edit Recipe Response:', updatedRecipe);
            
            // Invalidate the cache
            api.util.invalidateTags([{ type: 'Recipe', id: id }]);
            
            // Refetch the recipe data
            return dispatch(api.endpoints.getRecipeById.initiate(id)).unwrap();
          })
          .then(freshData => {
            console.log('Fresh Data after update:', freshData);
            
            // Update local state with the new data
            const updatedTags = freshData.recipetags?.map(tagItem => ({ name: tagItem.tag.name })) || [];
            console.log('Setting form data with tags:', updatedTags); 
            
            setFormData(prevFormData => ({
              ...prevFormData,
              tags: updatedTags,
            }));
            
           
            navigate('/profile');
          })
          .catch(err => {
            console.error('Failed to update recipe', err);
          });
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
     
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
        {/* {isBoot ? ( <div>isBooting...</div> ) : ( */}
          <>
          {isEditing && <div>Updating recipe...</div>}
          {popLoad && <div>Loading tags...</div>}
          {popError && <div>Error loading tags!</div>}
          {!recipe && <div>Loading recipe...</div>}
        {!popLoad && !popError && recipe && !isEditing && (
          <form className="bg-white p-8 rounded-lg shadow-md w-7/10 mx-auto" onSubmit={handleSubmit}>
            <button className="border-2 p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50" onClick={() => navigate("/profile")}>
              Go Back
            </button>
          
            <input 
              name="name"
              className="border-2 w-full rounded mb-4" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Name" 
            />
            <textarea 
              name="details"
              className="border-2 h-20 w-full rounded mb-4" 
              value={formData.details} 
              onChange={handleChange} 
              placeholder="Details"
            ></textarea>
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
              placeholder= "imageUrl"
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
                  <label htmlFor="currentTags" className="block text-gray-700 text-sm font-bold mb-2">
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
            {popData && !popLoad &&( 
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Popular Tags (click to add or remove):
                </label>
                <div className="flex flex-wrap gap-2">
                  {popData.map((apiTag) => {
                    const isSelected = formData.tags.some(tag => tag.name === apiTag.name);
                    return (
                      <button
                        key={apiTag.id}
                        type="button"
                        className={`px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 ${isSelected ? 'bg-blue-500 text-white' : ''}`}
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
                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
  