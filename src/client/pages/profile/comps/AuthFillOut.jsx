import React, { useState, useEffect } from "react";
import {
  useGetPopTagsQuery,
  useGetRecipeByIdQuery,
  useGetTagsQuery,
} from "../../../reducers/auth";
import { useEditCredsMutation } from "../../../reducers/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuthFillOut() {
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
  const [editRecipe, { isLoading: isEditing, error: editError }] = useEditCredsMutation();
  const [hasUpdated, setHasUpdated] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    details: "",
  });

  // Update local state
  useEffect(() => {
    if (recipeData && !isLoadingRecipe && !isError) {
      setFormData({
        username: recipeData.name || "",
        login: recipeData.details || "",
       
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
      
      
      


    
      
      
      
     
    //   Load Checks
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
            <input 
              username="username"
              className="border-2 w-full rounded mb-4" 
              value={formData.username} 
              onChange={handleChange} 
              placeholder="username" 
            />
            Login
            <textarea 
              name="login"
              className="border-2 h-20 w-full rounded mb-4" 
              value={formData.login} 
              onChange={handleChange} 
              placeholder="Details"
            ></textarea>
            
              
                 
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

export default AuthFillOut;
