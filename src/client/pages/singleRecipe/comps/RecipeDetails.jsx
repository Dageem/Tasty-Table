import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetRecipeByIdQuery,
  useGetThreeRecentRecipesQuery,
} from "../../../reducers/api";
import { Link } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const recipeInRedux = useSelector((state) => state.data.recipe);

  const {
    data: recipeFromQuery,
    isLoading: recipeLoading,
    error: recipeError,
  } = useGetRecipeByIdQuery(id, { skip: !!recipeInRedux });

  const recipe = recipeFromQuery || recipeInRedux;

  const {
    data: recents,
    isLoading: recentsLoading,
    error: recentsError,
  } = useGetThreeRecentRecipesQuery();

  const backupImage =
    "https://hexclad.com/cdn/shop/files/Hexclad_13Pc_8Qt_Lid_FryPanHandles_BLACK_1024x1024.jpg?v=1686775048";

  useEffect(() => {
    if (!recipeInRedux) {
    }
  }, [dispatch, id, recipeInRedux]);

  if (recipeLoading || recentsLoading) {
    return <p>Loading...</p>;
  }

  if (recipeError || recentsError) {
    return (
      <p>
        Error Loading Data!{" "}
        {recipeError ? recipeError.message : recentsError.message}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-3 mt-6 gap-12">
      <div className="col-span-2">
        <h1 className="text-3xl font-bold">
          Everything about{" "}
          <strong className="text-yellow-900">{recipe.name}</strong>
        </h1>
        <p className="text-xl">{recipe.desc}</p>
        <img
          src={recipe.image2Url || backupImage}
          alt="recipe-image"
          onError={(e) => {
            e.target.src = backupImage;
          }}
          className="col-span-2 w-full h-[400px] md:h-[600px] xl:h-[800px]"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <h1 className="text-3xl font-bold">Ingredients</h1>
        <div>
          <ol>
            {recipe.Ingredient_recipe.map((ingredientItem) => (
              <li key={ingredientItem.id} className="text-xl font-semibold">
                {ingredientItem.ingredient.name} - {ingredientItem.measurement}
              </li>
            ))}
          </ol>
          <div>
            <h1 className="text-3xl font-bold">Cooking Instructions</h1>
            <ol>
              {recipe.instructions
                .split(/(\d+\.\s)/)
                .map((item, index, array) => {
                  if (/^\d+\.\s$/.test(item)) {
                    const nextItem = array[index + 1];
                    return (
                      <li key={index} className="text-lg font-semibold">
                        {item + (nextItem || "")}
                      </li>
                    );
                  }
                  return null;
                })}
            </ol>
          </div>
        </div>
        <img
          src={recipe.image3Url || backupImage}
          alt="recipe-image"
          onError={(e) => {
            e.target.src = backupImage;
          }}
          className="col-span-2 w-full h-[400px] md:h-[600px] xl:h-[800px]"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="hidden lg:block">
        <h1 className="text-3xl font-bold">Recently Added</h1>
        <div>
          {recents.map((recent, index) => (
            <Link to={`/recipe/${recent.id}`} key={recent.id} className="mb-4">
              <div className="relative hover:cursor-pointer hover:opacity-70">
                <img
                  src={recent.imageUrl || backupImage}
                  alt="recipe-image"
                  onError={(e) => {
                    e.target.src = backupImage;
                  }}
                  className="w-full h-[320px]"
                />
              </div>
              <div className="mt-2">
                <h1 className="text-2xl font-bold">{recent.name}</h1>
                <p>{recent.details}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
