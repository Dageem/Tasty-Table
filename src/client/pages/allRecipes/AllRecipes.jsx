import React from "react";
import { useGetRecipesQuery } from "../../reducers/api";
import { Link } from "react-router-dom";

function AllRecipes() {
  const { data: recipes, error, isLoading } = useGetRecipesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="w-[95%] ml-[2.5%] lg:w-[70%] lg:ml-[15%] text-blue-gray-900 my-4">
      <div>
        <h1 className="text-xl text-center md:text-3xl font-bold">
          All Recipes
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 2xl:w-1/4 sm:p-3 hover:opacity-70 cursor-pointer"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <div>
                <div className="flex items-center justify-center">
                <div
                  className="w-full h-[280px] md:h-[300px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${recipe.imageUrl})` }}
                ></div>
                </div>
                <div className="text-xl font-bold text-center">
                  {recipe.name}
                </div>
                <div className="text-blue-gray-900 text-xl text-center ">
                  {recipe.details}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;
