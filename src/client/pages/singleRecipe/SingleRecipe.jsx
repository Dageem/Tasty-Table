import React from "react";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../../reducers/api";

export default function SingleRecipe() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="w-[95%] ml-[2.5%] lg:w-[70%] lg:ml-[15%] text-blue-gray-900 my-4">
      {recipe.name}
    </div>
  );
}
