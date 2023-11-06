import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  useGetRecipesByUserIdQuery,
  useGetPostByUserIdQuery,
  useDeleteRecipeByIdMutation,
} from "../../reducers/api";
import Sidebar from "./comps/Sidebar";
import RecipesRender from "./comps/Recipes";

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

  const {
    data: postsData,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useGetPostByUserIdQuery(userId, { skip: !userId });

  const [deleteRecipe] = useDeleteRecipeByIdMutation();

  // Handle errors
  useEffect(() => {
    if (isRecipesError) {
      console.error("Error loading recipes:", isRecipesError);
    }
    if (isPostsError) {
      console.error("Error loading posts:", isPostsError);
    }
  }, [isRecipesError, isPostsError]);

  // Delete recipe handler
  const onDelete = async (recipeId) => {
    try {
      await deleteRecipe(recipeId).unwrap();
      refetch();
    } catch (error) {
      console.log("Error during deletion:", error);
    }
  };

  // Loading states
  if (isRecipesLoading || isPostsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[95%] min-h-[100vh] lg:w-[70%]  m-auto">
      {/* User Profile Header */}
      <div className="flex mb-6 mt-5 ml-5 justify-between ">
        <div className="flex flex-col">
          <h1 className="text-xl font-extrabold">{user.username}'s Profile</h1>
          <h2>Number of recipes: {recipes?.length || 0}</h2>
        </div>
        <div className="flex mr-10">
          <Link to="/recipesubmit">
            <button className="bg-green-300 text-white p-3 rounded w-full max-w-md ml-[18%]">
              Add a New Recipe !
            </button>
          </Link>
        </div>
      </div>
      <div>
      <Sidebar />
      </div>
    </div>
  );
}

export default UserProfile;
