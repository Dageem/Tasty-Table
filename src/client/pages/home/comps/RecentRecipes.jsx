import { useGetThreeRecentRecipesQuery } from "../../../reducers/api";
import { Link } from "react-router-dom";

function RecentRecipes() {
  const { data: recipes, error, isLoading } = useGetThreeRecentRecipesQuery();

  const backupImage = "https://hexclad.com/cdn/shop/files/Hexclad_13Pc_8Qt_Lid_FryPanHandles_BLACK_1024x1024.jpg?v=1686775048";

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="mt-4 mb-4">
      <div>
        <h1 className="text-3xl font-bold mt-4 mb-2">Recent Recipes</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="relative hover:cursor-pointer hover:opacity-70">
              <img
                src={recipe.imageUrl || backupImage}
                alt="recipe"
                onError={(e) => (e.target.src = backupImage)}
                className="w-full h-[300px] xl:h-[350px]"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="mt-2">
                <h1 className="text-xl font-bold">{recipe.name}</h1>
                <p>{recipe.details}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecentRecipes;

