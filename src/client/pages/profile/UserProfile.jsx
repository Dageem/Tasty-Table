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
import Sidebar from "./comps/Sidebar";
import RecipesRender from './comps/Recipes';

function UserProfile() {
  const user = useSelector((state) => state.auth.credentials.user) || "";
  const [userId, setUserId] = useState(user.userId);
  const recipes = useSelector(state => state.data.recipes);
  console.log(recipes)
 
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
          {/* Recipes TabPanel */}
          <TabPanel value="recipes">
            <div className="flex">
              <div className="w-1/4">
                <Sidebar />
              </div>
              <div className="w-3/4">
                <RecipesRender recipes={recipes} onDelete={onDelete} />
                <div className="mt-10 w-full flex justify-center">
                  <Link to="/recipesubmit">
                    <button className="bg-green-300 text-white p-4 rounded w-full max-w-md">
                      Add a New Recipe !
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
  
            {/* Posts TabPanel */}
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
