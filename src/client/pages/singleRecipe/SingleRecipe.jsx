import React from "react";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../../reducers/api";
import SingleHead from "./comps/SingleHead";
import RecipeDetails from "./comps/RecipeDetails";

export default function SingleRecipe() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="w-[95%] ml-[2.5%] xl:w-[70%] xl:ml-[15%] text-blue-gray-900 my-4">
      <SingleHead />
      <RecipeDetails />
    </div>
  );
}
