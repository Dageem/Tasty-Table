import { useSelector } from 'react-redux';
import { useGetSavedRecipesQuery } from '../../../reducers/api';
import { selectCurrentUserId } from '../../../reducers/auth';

export default function Saved() {
  const userId = useSelector(selectCurrentUserId);
  const { data: savedRecipes, isLoading, error } = useGetSavedRecipesQuery(userId, {
    skip: !userId,
  });
  
  if (!userId) return <p>Please log in to view saved recipes.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading saved recipes: {error.message}</p>;

  return (
    <div>
      <h1>Your Saved Recipes</h1>
      <ul>
        {savedRecipes.map((savedRecipe) => (
          <li key={savedRecipe.recipe.id}>{savedRecipe.recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}



