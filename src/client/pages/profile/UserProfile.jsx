import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  useGetRecipesByUserIdQuery,
  useGetPostByUserIdQuery,
  useDeleteRecipeByIdMutation,
} from "../../reducers/api";
// import './userProfile.css';
import { api } from "../../reducers/api";

function UserProfile() {
  const user = useSelector((state) => state.auth.credentials.user) || "";
  const [userId, setUserId] = useState(user.userId);
  const recipes = useSelector(state => state.data.recipes);
 
  const {
    data: recipesData,
    isLoading: isRecipesLoading,
    isError: isRecipesError,
    refetch  
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

  
  
  

  // const onDelete = async (recipeId) => {
  //   try {
  //     await deleteRecipe(recipeId);
      // const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
      // setRecipes(updatedRecipes);
    
  //   } catch {
  //     console.log("error");
  //   }
  // };
  
  // Loading states
  if (isRecipesLoading || isPostsLoading) {
    return <div>Loading...</div>;
  }
  
  
  return (
    <div className="big-container">
  {/* User Profile Header */}
  <div className="flex flex-col mb-6 mt-5 ml-5">
    <h1 className="text-xl font-extrabold">{user.username}'s Profile</h1>
    <h2>Number of recipes: {recipes?.length || 0}</h2>
    <h2>Number of posts: {postsData.length}</h2>
  </div>

  <Tabs className="" value="recipesAndPosts">
    <TabsHeader>
      <Tab value="recipes">Recipes</Tab>
    </TabsHeader>
    <TabsBody>
      <TabPanel value="recipes">
      <div className="recipes-container flex flex-wrap justify-end mt-10">
    {recipes.map((recipe) => (
        <div className="group m-4 w-3/4 p-4 border border-gray-300 bg-gradient-to-r from-purple-100 via-purple-50 to-gray-100 rounded flex relative" key={recipe.id}>
            {/* Image */}
            <div className="mr-4 flex-none">
                <img 
                    src={recipe.imageUrl} 
                    alt="Recipe" 
                    className="w-24 h-24 object-contain"
                />
            </div>
            {/* Title */}
            <h2 className="flex-grow text-lg font-bold text-center mb-2">{recipe.name}</h2>
            <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Details Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-center text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                    { 
                        recipe.details.split(" ").slice(0, 20).join(" ")
                        + (recipe.details.split(" ").length > 20 ? "..." : "")
                    }
                </p>
            </div>

            {/* Edit and Delete buttons*/}
            <div className="absolute bottom-0 right-0 flex flex-col space-y-2 p-4">
                <Link to={`/editrecipe/${recipe.id}`}>
                    <button className="bg-blue-900 text-white p-2 rounded">
                        Edit Recipe
                    </button>
                </Link>
                <button 
                    className="bg-red-500 text-white p-2 rounded" 
                    onClick={() => onDelete(recipe.id)}
                >
                    Delete Recipe
                </button>
            </div>
        </div>
    ))}          
          <div className="mt-10 w-full flex justify-center">
            <Link to="/recipesubmit">
              <button className="bg-green-300 text-white p-4 rounded w-full max-w-md">
                Add a New Recipe !
              </button>
            </Link>
          </div>

        </div>
      </TabPanel>

      <TabPanel value="posts">
        <div className="">
          {postsData.map((post) => (
            <div className="apple" key={post.id}>
              <p>Title: {post.title}</p>
              <p>Content: {post.content}</p>
            </div>
          ))}
        </div>
      </TabPanel>

    </TabsBody>
  </Tabs>
</div>

  );
}

export default UserProfile;
