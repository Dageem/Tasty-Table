import { useGetThreeRecentRecipesQuery } from "../reducers/api";

function RecentRecipes() {
  const { data: recipes, error, isLoading } = useGetThreeRecentRecipesQuery();
  console.log(recipes);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="">
      <div>
        <h1 className="text-2xl text-center font-bold mt-4">Recent Additions</h1>
      </div>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <div className="pt-4">
              <img
                src={recipe.imageUrl}
                alt="recipe-image"
                className="w-[95%] ml-[2.5%] rounded-xl py-2 h-[300px]"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-center w-[95%] ml-[2.5%]">
                {recipe.name}
              </h1>
            </div>
            <div>
              <p className="text-blue-gray-900 text-md w-[95%] ml-[2.5%]">
                {recipe.details}Lorem ipsum dolor sit amet consectetur
                adipisicing elit. In ut cum debitis aliquam, aliquid est
                doloremque molestiae quasi tenetur corrupti? Repellendus
                eligendi ducimus laudantium, quidem earum libero ab? Quisquam,
                illum?
              </p>
            </div>
            <div>
              <h1 className="bg-purple-900 text-lg font-bold text-center rounded-xl mt-1 text-white w-[95%] ml-[2.5%] hover:text-yellow-700 cursor-pointer">
                Continue Reading
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentRecipes;
