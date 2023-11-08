import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  useGetRecipesByUserIdQuery,
  useDeleteRecipeByIdMutation,
} from "../../reducers/api";
import Sidebar from "./comps/Sidebar";
import RecipesRender from "./comps/Recipes";
import Avatar from "./comps/Avatar";

function UserProfile() {
  const user = useSelector((state) => state.auth.credentials.user) || "";
  const [userId, setUserId] = useState(user.userId);
  const recipes = useSelector((state) => state.data.recipes);

  const {
    data: recipesData,
    isLoading: isRecipesLoading,
    isError: isRecipesError,
    refetch,
  } = useGetRecipesByUserIdQuery(userId, { skip: !userId });

  const [deleteRecipe] = useDeleteRecipeByIdMutation();

  // Handle errors
  useEffect(() => {
    if (isRecipesError) {
      console.error("Error loading recipes:", isRecipesError);
    }
  }, [isRecipesError]);

  // Delete recipe handler
  const onDelete = async (recipeId) => {
    try {
      await deleteRecipe(recipeId).unwrap();
      refetch();
    } catch (error) {
      console.log("Error during deletion:", error);
    }
  };

  if (isRecipesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[95%] min-h-[100vh] lg:w-[70%]  m-auto">
      {/* User Profile Header */}
      <div className="flex mb-6 mt-5 ml-5 justify-between ">
        <div className="flex flex-col">
          <Avatar mod={true}/>
          <h1 className="text-xl font-extrabold">{user.username}'s Profile</h1>
          <h2>Number of recipes: {recipes?.length || 0}</h2>
        </div>
        <div className="flex mr-10">
          <Link to="/recipesubmit">
            <button className="bg-green-500 p-4 rounded w-full max-w-md ml-[18%] font-extrabold text-black">
              Add a New Recipe!
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <RecipesRender recipes={recipes} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default UserProfile;
