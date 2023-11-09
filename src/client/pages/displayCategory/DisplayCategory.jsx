import React, { useState } from "react";
import { useGetRecipesByNameQuery } from "../../reducers/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Pagination from "./Pagiantion"; // Make sure the import path is correct

function DisplayCategory() {
  const { category } = useParams();
  const {
    data: recipes,
    error,
    isLoading,
  } = useGetRecipesByNameQuery(category);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 16;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showPagination = recipes.length >= 17;

  const backupImage =
    "https://hexclad.com/cdn/shop/files/Hexclad_13Pc_8Qt_Lid_FryPanHandles_BLACK_1024x1024.jpg?v=1686775048";

  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen lg:w-[70%] lg:ml-[15%] text-blue-gray-900 my-4">
      <div className="w-full mb-4 text-center text-blue-gray-900">
        <h1 className="text-xl md:text-3xl font-bold">
          The best <strong className="text-purple-900">{category}</strong>{" "}
          recipes
        </h1>
        {showPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(recipes.length / recipesPerPage)}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      <div className="flex flex-wrap justify-center">
        {currentRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 hover:opacity-70 cursor-pointer"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <div className="">
                <div className="flex items-center justify-center">
                  <img
                    src={recipe.imageUrl || backupImage}
                    alt="recipe-image"
                    onError={(e) => {
                      e.target.src = backupImage;
                    }}
                    className="w-full h-[280px] md:h-[300px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  {/* <div
                    className="w-full h-[280px] md:h-[300px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${recipe.imageUrl || backupImage})`,
                    }}
                  ></div> */}
                </div>
                <div className="text-xl font-bold text-center">
                  {recipe.name}
                </div>
                <div className="text-xl text-center">{recipe.details}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(recipes.length / recipesPerPage)}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default DisplayCategory;
