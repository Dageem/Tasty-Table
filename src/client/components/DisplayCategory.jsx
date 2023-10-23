import React from "react";
import { useGetRecipesByNameQuery } from "../reducers/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function DisplayCategory() {
  const { category } = useParams();
  const {
    data: recipes,
    error,
    isLoading,
  } = useGetRecipesByNameQuery(category);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="w-[95%] ml-[2.5%] lg:w-[70%] lg:ml-[15%] text-blue-gray-900 my-4">
      <div className="w-full mb-4 text-center text-blue-gray-900">
        <h1 className="text-xl md:text-3xl font-bold">The best <strong className="text-purple-900">{category}</strong> recipes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 hover:opacity-70 cursor-pointer">
            <Link to={`/recipe/${recipe.id}`}>
            <div className="">
              <div className="flex items-center justify-center"> 
                <img src={recipe.imageUrl} alt="recipe-image" className="h-[300px] w-full" />
              </div>
              <div className="text-xl font-bold text-center">{recipe.name}</div>
              <div className="text-xl text-center">{recipe.details}</div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  
    
}

export default DisplayCategory;
