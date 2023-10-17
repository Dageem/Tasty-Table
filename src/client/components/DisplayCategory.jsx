import React from "react";
import { useGetRecipesByNameQuery } from "../reducers/api";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";

function DisplayCategory() {
  const { category } = useParams();
  const { data: recipes, error, isLoading } = useGetRecipesByNameQuery(category);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;
  console.log(recipes)
  return (
    <div className="flex flex-wrap">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 sm:p-4 md:p-6 lg:p-8 flex justify-center">
          <Card className="max-w-[20rem] overflow-hidden py-0.5 px-3.5 bg-red-300 mt-5">
            <CardHeader floated={false} shadow={false} color="transparent" className="">
              <img src={recipe.imageUrl} alt="recipe-image" />
            </CardHeader>
            <CardBody className="py-0.5 px-3.5 flex flex-col items-center">
              <Typography className="mt-5 font-serif text-center" variant="h4" color="blue-gray">
                {recipe.name}
              </Typography>
              <Typography variant="lead" color="white" className="mt-3 font-normal text-center">
                {/* {recipe.desc} */}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              {/* {recipe.tagId} */}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default DisplayCategory;
