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


function UserProfile() {
  const user = useSelector((state) => state.auth.credentials.user) || "";
  const [userId, setUserId] = useState(user.userId);
  const [recipes, setRecipes] = useState([]);

  // Fetching Recipes and Posts Data
  const {
    data: recipesData,
    isLoading: isRecipesLoading,
    isError: isRecipesError,
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

  // Update local recipes state when recipesData changes
  useEffect(() => {
    if (recipesData) {
      setRecipes(recipesData);
    }
  }, [recipesData]);

  // Delete recipe handler
  const onDelete = async (recipeId) => {
    try {
      await deleteRecipe(recipeId);
      const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
      setRecipes(updatedRecipes);
    } catch {
      console.log("error");
    }
  };

  // Loading states
  if (isRecipesLoading || isPostsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="big-container">
      {/* User Profile Header */}
      <div className="flex flex-col mb-6 mt-5 ml-5">
        <h1 className="text-xl font-extrabold">{user.username}'s Profile</h1>
        <h2>Number of recipes: {recipes.length}</h2>
        <h2>Number of posts: {postsData.length}</h2>
      </div>

      <Tabs className="" value="recipesAndPosts">
        <TabsHeader>
          <Tab value="recipes">Recipes</Tab>
          <Tab value="posts">Posts</Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="recipes">
            <div className="recipes-container">
              {recipes.map((recipe) => (
                <div className="apple" key={recipe.id}>
                  <Link to={`/editrecipe/${recipe.id}`}>
                    <button className="bg-blue-500 text-white p-2 rounded mb-4">
                      Edit Recipe
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 text-white p-2 rounded mb-4"
                    onClick={() => onDelete(recipe.id)}
                  >
                    Delete Recipe
                  </button>
                  <p>Name: {recipe.name}</p>
                  <p>Details: {recipe.details}</p>
                </div>
              ))}
              <Link to="/recipesubmit">
                <button className="bg-green-500 text-white p-4 rounded w-full">
                  New Recipe
                </button>
              </Link>
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
