import { Link } from "react-router-dom";
import React from 'react';
import "./Recipes.css";

function RecipesRender({ recipes, onDelete }) {

    const fallbackImageUrl = "https://cdn-icons-png.flaticon.com/128/1980/1980775.png";

    const handleError = (e) => {
        e.target.onerror = null; 
        e.target.src = fallbackImageUrl; 
      }
    
    if (recipes.length === 0) {
        return <p className="text-center mt-10 text-4xl"> You Have No Recipe's Currently. Please add some recipes!</p>;
      }
    
  return (
    <div className="relative flex flex-col justify-center items-center mt-10">
      {recipes.map((recipe) => (
        <div
          className="group m-4 w-[100%] p-4 border border-gray-300 bg-gradient-to-r from-gray-100  via-blue-gray-100 to-gray-100 rounded flex relative"
          key={recipe.id}
        >
            <span
            className="absolute inset-0 flex items-center justify-center text-4xl font-cursive opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-0"
        >
            Hover On Me
        </span>

          {/* Image */}
            <div className="flex-shrink-0 w-24 h-24 mr-4">
            <img
              src={recipe.imageUrl}
              alt="Recipe"
              className="w-24 h-24 object-contain"
              onError={handleError}
            />
          </div> 
          {/* Details Overlay */}
          <div
              className="absolute inset-0 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-10 bg-gray-600 bg-opacity-50">
            <p
              className="hidden md:block text-sm text-center text-black"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
            >
              {recipe.details.split(" ").slice(0, 15).join(" ") +
                (recipe.details.split(" ").length > 15 ? "..." : "")}
            </p>
          </div>

          {/* New container for Title and View Recipe button */}
      <div className="flex flex-col items-start flex-grow z-20">
        {/* Title */}
        <h2 className="text-lg font-bold mb-2">
          {recipe.name}
        </h2>

        {/* View Recipe Button */}
        <Link to={`/recipe/${recipe.id}`}>
          <button type="button" className="mt-2 bg-blue-gray-900 text-white rounded-full border-4 border-blue-gray-700 hover:bg-blue-gray-700 p-2">
            View Recipe
          </button>
        </Link>
      </div>



          {/* Edit and Delete buttons with fixed width */}
          <div className="flex-grow md:flex-grow-0 md:w-1/6 absolute right-10 flex flex-col space-y-1 z-20">
            <Link to={`/editrecipe/${recipe.id}`}>
                <button
                    className="relative w-full p-2 text-white-600 bg-blue-500 border-2 border-indigo-600 rounded-full shadow-2xl transition-all duration-500 ease-out text-white  overflow-hidden group hover:bg-blue-gray-700"
                >
                    {/* <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-full group-hover:h-full"></span>
                    <span className="relative z-10">Edit</span> */}
                    Edit
                </button>
            </Link>

            <button
                className="relative w-full p-2 text-white-600 bg-red-500 border-2 border-red-900 rounded-full shadow-2xl transition-all duration-500 ease-out text-white overflow-hidden group hover:bg-blue-gray-700"

              onClick={() => onDelete(recipe.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesRender;
