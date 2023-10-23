import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../reducers/api";

export default function SingleRecipe() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="text-blue-gray-900 mt-5">
      <section className="grid grid-cols-1 gap-x-12 md:grid-cols-3 w-[95%] ml-[2.5%] md:w-[95%] md:ml-[2.5%] lg:w-[70%] lg:ml-[15%]">
        <div className="flex flex-col justify-center items-center py-5 px-1 col-span-3 lg:col-span-2">
          <h1 className="text-xl font-bold md:text-3xl">{recipe.name}</h1>
          <p>{recipe.details}</p>
          <img
            className="rounded-xl w-full md:w-3/4 lg:w-[100%] h-[700px]"
            src={recipe.imageUrl}
            alt="Recipe image"
          />
        </div>
        <div className="hidden xl:flex col-span-1 flex-col justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQH10ABaP0vlPw/profile-displayphoto-shrink_800_800/0/1566569501300?e=2147483647&v=beta&t=4oURRlcat1xowixQtOT6p1JmYm5rE2mW2WiAY3zaPqk"
            alt=""
            className="rounded-full w-[210px]"
          />
          <h1 className="text-purple-900 font-bold text-md">
            OUR HEAD CHEF AND TEAM
          </h1>
          <p className="text-center px-6">
            All recipes are approved by Head Chef Daniel. Whether he or his team
            created it, or one of our fantastic contributors, you know it will
            be delicious.
          </p>
          <div className="m-5">
            {/* <button className="font-bold px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-700 mr-4">
              SAVE RECIPE
            </button>
            <button className="font-bold px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-300">
              LIKE RECIPE
            </button> */}
          </div>
          <div className="mt-5 mx-2 bg-purple-900 rounded-xl hover:opacity-70 cursor-pointer">
            <img
              src="https://bansaloilandfoods.com/wp-content/uploads/2022/12/scale.jpg"
              alt=""
              className="rounded-xl w-[100%] h-[300px]"
            />
            <h1 className="text-xl font-bold text-white text-center ">
              CHECK OUT ALL RECIPES
            </h1>
          </div>
        </div>
      </section>

      <div className="h-[100px]"></div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-12 w-[95%] ml-[2.5%] md:w-[80%] md:ml-[10%] lg:w-[70%] lg:ml-[15%]">
        <div className="col-span-2">
          <h1 className="text-center font-bold lg:text-2xl pb-2">
            Everything about the{" "}
            <strong className="text-purple-900">{recipe.name}</strong>...
          </h1>
          <p className="">
            {recipe.desc}
          </p>
        </div>
        <div className="mx-2">
          <img
            src={recipe.image2Url}
            alt="food image"
            className="rounded-xl w-[100%] h-[250px]"
          />
        </div>
      </section>

      <div className="h-[100px]"></div>

      <section>
        <div>
          <h1 className="font-bold text-2xl text-purple-900">Ingredients</h1>
          <ul>
            {recipe.Ingredient_recipe.map((ingredientRecipe) => (
              <li key={ingredientRecipe.id}>
                {ingredientRecipe.ingredient.name}:{" "}
                {ingredientRecipe.measurement}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="">
          <h1 className="font-bold text-2xl">How to make {recipe.name}</h1>
          <ol>
            {recipe.instructions
              .split(/(\d+\.\s)/)
              .map((item, index, array) => {
                if (/^\d+\.\s$/.test(item)) {
                  const nextItem = array[index + 1];
                  return <li key={index}>{item + (nextItem || "")}</li>;
                }
                return null;
              })}
          </ol>
        </div>
      </section>
    </div>
  );
}
