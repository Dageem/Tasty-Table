import React from "react";
import { useSelector } from "react-redux";
import {
  useGetSavedRecipesQuery,
  useDeleteSavedRecipeMutation,
} from "../../../reducers/api";
import { selectCurrentUserId } from "../../../reducers/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Saved() {
  const userId = useSelector(selectCurrentUserId);
  const {
    data: savedRecipes,
    isLoading,
    error,
  } = useGetSavedRecipesQuery(userId, {
    skip: !userId,
  });
  const [imageLoading, setImageLoading] = useState({});
  const [deleteSavedRecipeMutation] = useDeleteSavedRecipeMutation();

  const handleDeleteSavedRecipe = async (userId, recipeId) => {
    try {
      await deleteSavedRecipeMutation({ userId, recipeId });
    } catch (error) {}
  };

  const backupImage =
    "https://hexclad.com/cdn/shop/files/Hexclad_13Pc_8Qt_Lid_FryPanHandles_BLACK_1024x1024.jpg?v=1686775048";

  if (!userId) return <p>Please log in to view saved recipes.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading saved recipes: {error.message}</p>;

  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen lg:w-[70%] lg:ml-[15%] text-blue-gray-900 my-4">
      <div>
        <h1 className="text-xl text-center md:text-3xl font-bold">
          Your Saved Recipes
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {savedRecipes.length === 0 ? (
          <div className="text-center text-xl font-extrabold mt-6 text-red-900 w-full">
            <p>You Have No Saved Recipes</p>
          </div>
        ) : (
          savedRecipes.map((savedRecipe) => (
            <div
              key={savedRecipe.recipe.id}
              className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 2xl:w-1/4 sm:p-3 cursor-pointer"
            >
              <Link
                to={`/recipe/${savedRecipe.recipe.id}`}
                className="hover:opacity-70"
              >
                {/* Wrap the content you want inside the link */}
                <div>
                  <div className="flex items-center justify-center">
                    <img
                      src={savedRecipe.recipe.imageUrl || backupImage}
                      alt="recipe-image"
                      onLoad={() => {
                        setImageLoading((prevImageLoading) => ({
                          ...prevImageLoading,
                          [savedRecipe.recipe.id]: false,
                        }));
                      }}
                      onError={(e) => {
                        e.target.src = backupImage;
                        setImageLoading((prevImageLoading) => ({
                          ...prevImageLoading,
                          [savedRecipe.recipe.id]: false,
                        }));
                      }}
                      className={`w-full h-[280px] md:h-[300px] ${
                        imageLoading[savedRecipe.recipe.id] ? "hidden" : ""
                      }`}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <div className="text-xl font-bold text-center">
                    {savedRecipe.recipe.name}
                  </div>
                  <div className="text-blue-gray-900 text-xl text-center ">
                    {savedRecipe.recipe.details}
                  </div>
                </div>
              </Link>
              {/* Center the button */}
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    handleDeleteSavedRecipe(userId, savedRecipe.recipe.id)
                  }
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Remove Recipe
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
