import React, { useState, useEffect } from "react";
import { useGetRecipesQuery } from "../../reducers/api";
import { Link } from "react-router-dom";
import Pagination from "../displayCategory/Pagiantion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function AllRecipes() {
  const initialPage = 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const recipesPerPage = 16;
  const [isLoading, setIsLoading] = useState(true);

  const {
    data: recipes,
    isLoading: isRecipesLoading,
    isError: isRecipesError,
    refetch,
  } = useGetRecipesQuery();

  useEffect(() => {
    if (isRecipesError) {
      console.error("Error loading recipes:", isRecipesError);
    }
  }, [isRecipesError]);

  if (isRecipesLoading) {
    return (
      <div className=" flex justify-center items-center">
        <div className="text-blue-900 text-xl font-bold">LOADING...</div>
      </div>
    );
  }

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showPagination = recipes.length >= 17;

  const backupImage =
    "https://hexclad.com/cdn/shop/files/Hexclad_13Pc_8Qt_Lid_FryPanHandles_BLACK_1024x1024.jpg?v=1686775048";

  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen lg:w-[70%] lg:ml-[15%] text-blue-gray-900 my-4">
      <div>
        <h1 className="text-xl text-center md:text-3xl font-bold">
          All Recipes
        </h1>
        {showPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(recipes.length / recipesPerPage)}
            onPageChange={paginate}
          />
        )}
      </div>
      <div className="flex flex-wrap justify-center">
        {currentRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 2xl:w-1/4 my-3 hover:opacity-70 cursor-pointer"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <div>
                <div className="flex items-center justify-center">
                  {isLoading && (
                    <AiOutlineLoading3Quarters className="text-4xl animate-spin" />
                  )}
                  <img
                    src={recipe.imageUrl || backupImage}
                    alt="recipe-image"
                    onLoad={() => setIsLoading(false)}
                    onError={(e) => {
                      e.target.src = backupImage;
                      setIsLoading(false);
                    }}
                    className={`w-full h-[280px] md:h-[300px] ${
                      isLoading ? "hidden" : ""
                    }`}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className="text-xl font-bold text-center">
                  {recipe.name}
                </div>
                <div className="text-blue-gray-900 text-xl text-center">
                  {recipe.details}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(recipes.length / recipesPerPage)}
          onPageChange={paginate}
        />
      )}
    </div>
  );
}

export default AllRecipes;
