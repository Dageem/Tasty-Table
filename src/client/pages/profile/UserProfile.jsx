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
  //   const recipes = useSelector(state => state.data.recipes);

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

      <div className="flex flex-col mb-6 mt-5 ml-5 bg-yellow-300">
        <div className="">
          <h1 className="text-xl font-extrabold">{user.username}Daniel</h1>
          <h2>Number of recipes: {recipes.length}</h2>
          <h2>Number of posts: {postsData.length}</h2>
        </div>
        <div className="mt-10 w-full flex justify-center">
          <Link to="/recipesubmit">
            <button className="bg-green-300 text-white p-4 rounded w-full">
              Add a New Recipe !
            </button>
          </Link>
        </div>
      </div>

      <Tabs className="" value="recipesAndPosts">
        <TabsHeader>
          <Tab value="recipes">Recipes</Tab>
          <Tab value="posts">Posts</Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="recipes">
            <div className="recipes-container flex flex-wrap justify-center mt-10 w-300">
              {recipes.map((recipe) => (
                <div className="m-4 relative group w-1/4" key={recipe.id}>
                  {/* Image */}
                  <div className="w-full h-96 relative overflow-hidden">
                    <img
                      src={recipe.imageUrl}
                      alt="Recipe"
                      className="w-full max-h-full object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white p-4">
                        <h2 className="text-lg font-bold mb-2">
                          {recipe.name}
                        </h2>
                        <p>
                          {recipe.details.split(" ").slice(0, 70).join(" ") +
                            (recipe.details.split(" ").length > 70
                              ? "..."
                              : "")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Edit and Delete buttons */}
                  <div className="mt-4 flex justify-between">
                    <Link
                      to={`/editrecipe/${recipe.id}`}
                      className="flex-1 mr-2"
                    >
                      <button className="bg-blue-900 text-white p-2 rounded w-full">
                        Edit Recipe
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white p-2 rounded flex-1"
                      onClick={(e) => {
                        onDelete(recipe.id);
                      }}
                    >
                      Delete Recipe
                    </button>
                  </div>
                </div>
              ))}

              {/* <div className="mt-10 w-full flex justify-center">
                        <Link to="/recipesubmit">
                            <button className="bg-green-300 text-white p-4 rounded w-full">
                            Add a New Recipe !
                            </button>
                        </Link>
                    </div> */}
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
