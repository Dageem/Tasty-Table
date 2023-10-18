import React from "react";
import { useGetRecipesQuery } from "../reducers/api";

function AllRecipes() {
  const { data: recipes, error, isLoading } = useGetRecipesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="mt-6 mx-auto max-w-[95%] sm:max-w-[95%] md:max-w-[80%] lg:max-w-[70%]">
      <div>
        <h1 className="text-xl text-center md:text-3xl font-bold">All Recipes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 hover:opacity-70 cursor-pointer"
          >
            <div className="shadow-2xl h-[370px]">
              <div className="flex items-center justify-center">
                <img
                  src={recipe.imageUrl}
                  alt="recipe-image"
                  className="rounded-xl h-[250px] w-[250px]"
                />
              </div>
              <div className="text-xl font-bold text-center">{recipe.name}</div>
              <div className="text-blue-gray-900 text-xl text-center">
                {recipe.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;
