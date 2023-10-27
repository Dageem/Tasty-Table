import { useGetThreeRecentRecipesQuery } from "../../../reducers/api";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function RecentRecipes() {
  const { data: recipes, error, isLoading } = useGetThreeRecentRecipesQuery();
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);

  const nextRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const prevRecipe = () => {
    setCurrentRecipeIndex((prevIndex) =>
      prevIndex === 0 ? recipes.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="mt-4 mb-4">
      <div>
        <h1 className="text-3xl font-bold mt-4 mb-2">Recent Recipes</h1>
      </div>
      {isMobileScreen ? (
        <div className="relative hover:cursor-pointer hover:opacity-70">
          <img
            src={recipes[currentRecipeIndex].imageUrl}
            alt="recipe-image"
            className="h-[350px] w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
            <button onClick={prevRecipe}>
              <FaArrowAltCircleLeft className="text-3xl" />
            </button>
            <button onClick={nextRecipe}>
              <FaArrowAltCircleRight className="text-3xl" />
            </button>
          </div>
          <div className="mt-2">
            <h1 className="text-xl font-bold">
              {recipes[currentRecipeIndex].name}
            </h1>
            <p>{recipes[currentRecipeIndex].details}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <Link to={`/recipe/${recipe.id}`}>
              <div
                key={recipe.id}
                className={
                  index !== currentRecipeIndex ? "hidden md:block" : ""
                }
              >
                <div className="relative hover:cursor-pointer hover:opacity-70">
                <div
                  className="w-full h-[300px] xl:h-[350px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${recipe.imageUrl})` }}
                ></div>
                </div>
                <div className="mt-2">
                  <h1 className="text-xl font-bold">{recipe.name}</h1>
                  <p>{recipe.details}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentRecipes;
