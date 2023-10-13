import React from 'react';
import { useGetRecipesByNameQuery } from "../reducers/api";

function DisplayCategory() {
  const { data: recipes, error, isLoading } = useGetRecipesByNameQuery("easy");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories!</p>;
  console.log(recipes)
  return (
    <div>
      <ul className='recipes-list'>
        {recipes.map((recipe) => (
          <li className='recipe' key={recipe.id}>
            <div class="-ml-sm flex flex-col">
              <div className='recipe-content'>
                <h1 className='recipe-name'>{recipe.name}</h1>
                <h1 className='recipe-details'>{recipe.details}</h1>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayCategory;

