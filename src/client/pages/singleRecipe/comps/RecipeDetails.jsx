import React from "react";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../../../reducers/api";
import { useGetThreeRecentRecipesQuery } from "../../../reducers/api";
import { Link } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-3 mt-6 gap-12">
      <div className="col-span-2">
        <h1 className="text-3xl font-bold">
          Everything about <strong>{recipe.name}</strong>
        </h1>
        <p className="text-xl">
          {recipe.desc}
        </p>
        <div
          className="col-span-2 w-full h-[400px] md:h-[600px] xl:h-[800px] bg-cover bg-center"
          style={{ backgroundImage: `url(${recipe.image2Url})` }}
        ></div>
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
        <div
          className="col-span-2 w-full h-[400px] md:h-[600px] xl:h-[800px] bg-cover bg-center"
          style={{ backgroundImage: `url(${recipe.image3Url})` }}
        ></div>
      </div>
    </div>
  );
}
