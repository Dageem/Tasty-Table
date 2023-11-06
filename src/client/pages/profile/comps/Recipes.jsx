import { Link } from "react-router-dom";

function RecipesRender({ recipes, onDelete }) {
  return (
    <div className="recipes-container flex flex-wrap justify-end mt-10">
      {recipes.map((recipe) => (
        <div
          className="group m-4 w-3/4 p-4 border border-gray-300 bg-gradient-to-r from-purple-100 via-purple-50 to-gray-100 rounded flex relative"
          key={recipe.id}
        >
          {/* Image */}
          <div className="mr-4 flex-none">
            <img
              src={recipe.imageUrl}
              alt="Recipe"
              className="w-24 h-24 object-contain"
            />
          </div>
          {/* Title */}
          <h2 className="flex-grow text-lg font-bold text-center mb-2">
            {recipe.name}
          </h2>
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

          {/* Details Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p
              className="text-sm text-center text-black"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
            >
              {recipe.details.split(" ").slice(0, 15).join(" ") +
                (recipe.details.split(" ").length > 15 ? "..." : "")}
            </p>
          </div>

          {/* Edit and Delete buttons*/}
          <div className="absolute bottom-0 right-0 flex flex-col space-y-2 p-4">
            <Link to={`/editrecipe/${recipe.id}`}>
              <button className="bg-blue-900 text-white p-2 rounded">
                Edit Recipe
              </button>
            </Link>

            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => onDelete(recipe.id)}
            >
              Delete Recipe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesRender;
