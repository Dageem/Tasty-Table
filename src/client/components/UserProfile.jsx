import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetRecipesByUserIdQuery, useGetPostByUserIdQuery } from "../reducers/api";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import './userProfile.css';

function UserProfile() {
  const user = useSelector((state) => state.auth.credentials.user) || "";
  const [userId, setUserId] = useState(user.userId);

  const {
    data: recipesData,
    isLoading: isRecipesLoading,
    isError: isRecipesError,
  } = useGetRecipesByUserIdQuery(userId, {
    skip: !userId,
  });

  const {
    data: postsData,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useGetPostByUserIdQuery(userId, {
    skip: !userId,
  });

  useEffect(() => {
    if (isRecipesError) {
      console.error("Error loading recipes:", isRecipesError);
    }
    if (isPostsError) {
      console.error("Error loading posts:", isPostsError);
    }
  }, [isRecipesError, isPostsError]);

  if (isRecipesLoading) {
    return <div>Loading Recipes...</div>;
  }

  if (isPostsLoading) {
    return <div>Loading Posts...</div>;
  }

  return (
    <div className="big-container">
      <div className="flex flex-col mb-6 mt-5 ml-5">
        <h1 className="text-xl font-extrabold">{user.username}'s Profile</h1>
        <h2>number of recipes: </h2>
        <h2>number of posts: </h2>
      </div>

      <Tabs className="" value="recipesAndPosts">
        <TabsHeader>
          <Tab value="recipes">Recipes</Tab>
          <Tab value="posts">Posts</Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="recipes">
            <div className="recipes-container">
              {recipesData && recipesData.map((recipe) => (
                <div className="apple" key={recipe.id}>
                  <p>Name: {recipe.name}</p>
                  <p>Details: {recipe.details}</p>
                  {/* Add date or time if needed */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="posts">
            <div className="">
              {postsData && postsData.map((post) => (
                <div className="apple" key={post.id}>
                  <p>Title: {post.title}</p>
                  <p>Content: {post.content}</p>
                  {/* Add date, time, and author name if needed */}
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
