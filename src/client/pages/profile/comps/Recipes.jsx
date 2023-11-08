import { Link } from "react-router-dom";

function RecipesRender({ recipes, onDelete }) {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {recipes.map((recipe) => (
        <div
          className="group m-4 w-[100%] p-4 border border-gray-300 bg-gradient-to-r from-gray-200  via-gray-100 to-gray-300 rounded flex relative"
          key={recipe.id}
        >
          {/* Image */}
          <div className="">
            <img
              src={recipe.imageUrl}
              alt="Recipe"
              className="w-24 h-24 object-contain"
            />
          </div>
          {/* Title */}
          <h2 className="flex-grow text-lg font-bold">
            {recipe.name}
          </h2>
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

          {/* Details Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p
              className="hidden md:block text-sm text-center text-black"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
            >
              {recipe.details.split(" ").slice(0, 15).join(" ") +
                (recipe.details.split(" ").length > 15 ? "..." : "")}
            </p>
          </div>

          {/* Edit and Delete buttons with fixed width */}
          <div className=" w-1/6 absolute right-10 flex flex-col space-y-1">
            <Link to={`/editrecipe/${recipe.id}`}>
              <button className="w-full bg-blue-900 text-white p-2 rounded">
                Edit 
              </button>
            </Link>

            <button
              className="w-full bg-red-500 text-white p-2 rounded"
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
