import React from 'react';
import { useSelector } from 'react-redux';
import { useGetSavedRecipesQuery } from '../../../reducers/api';
import { selectCurrentUserId } from '../../../reducers/auth';
import { Link } from 'react-router-dom';

export default function Saved() {
  const userId = useSelector(selectCurrentUserId);
  const { data: savedRecipes, isLoading, error } = useGetSavedRecipesQuery(userId, {
    skip: !userId,
  });

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
        {savedRecipes.map((savedRecipe) => (
          <div
            key={savedRecipe.recipe.id}
            className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 2xl:w-1/4 sm:p-3 hover:opacity-70 cursor-pointer"
          >
            <Link to={`/recipe/${savedRecipe.recipe.id}`}>
              <div>
                <div className="flex items-center justify-center">
                  <div
                    className="w-full h-[280px] md:h-[300px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${savedRecipe.recipe.imageUrl})` }}
                  ></div>
                </div>
                <div className="text-xl font-bold text-center">
                  {savedRecipe.recipe.name}
                </div>
                <div className="text-blue-gray-900 text-xl text-center ">
                  {savedRecipe.recipe.details}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}




