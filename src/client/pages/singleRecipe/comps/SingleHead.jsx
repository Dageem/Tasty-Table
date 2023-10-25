import React from "react";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../../../reducers/api";
import { Link } from "react-router-dom";

export default function SingleHead() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div>
      <div className="mt-10 grid grid-cols-1 lg:grid lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h1 className="text-3xl  font-bold mb-3">{recipe.name}</h1>
          <p className="text-xl  mb-5">{recipe.details}</p>
          <div className="">
            <button className="text-blue-gray-900 font-semibold border border-blue-gray-900 border-solid py-2 px-2 mr-2 hover:text-white hover:bg-blue-gray-900">
              Like Recipe
            </button>
            <button className="text-blue-gray-900 font-semibold border border-blue-gray-900 border-solid py-2 px-2 mr-2 hover:text-white hover:bg-blue-gray-900">
              Save Recipe
            </button>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="col-span-1 flex items-center justify-center text-center">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQH10ABaP0vlPw/profile-displayphoto-shrink_800_800/0/1566569501300?e=2147483647&v=beta&t=4oURRlcat1xowixQtOT6p1JmYm5rE2mW2WiAY3zaPqk"
              alt=""
              className="h-[150px] rounded-full"
            />
            <h1 className="text-md ml-2">
              <strong className="text-md md:text-lg">
                Guaranteed delicious!
              </strong>{" "}
              <br />
              <p className="italic">
                "We think everybody should be able to enjoy restaurant quality
                meals at home" <strong>-Chef Daniel</strong>
              </p>
            </h1>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="grid mt-5 grid-cols-1 lg:grid-cols-3 gap-12">
        <div
          className="col-span-2 w-full h-[400px] md:h-[600px] xl:h-[800px] bg-cover bg-center"
          style={{ backgroundImage: `url(${recipe.imageUrl})` }}
        ></div>
        <div className="col-span-1 hidden lg:block">
          <div
            className="w-full h-[300px] xl:h-[400px] bg-cover bg-center relative hover:opacity-70 cursor-pointer"
            style={{
              backgroundImage: `url(https://cookdinehost.com/cdn/shop/products/WEB_AD_Cookbook-promo-photo-16.jpg?v=1692339216&width=1200)`,
            }}
          >
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl text-center text-black rounded p-1 w-[55%] bg-white opacity-80 font-bold mt-4">
              Our Cookbook
            </h1>
          </div>
          <Link to="/allrecipes">
            <div
              className="w-full h-[300px] xl:h-[400px] bg-cover bg-center relative hover:opacity-70 cursor-pointer"
              style={{
                backgroundImage: `url(https://assets3.thrillist.com/v1/image/3130793/828x1500/flatten;scale;webp=auto;jpeg_quality=60.jpg)`,
              }}
            >
              <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl text-center text-black rounded p-1 w-[55%] bg-white opacity-80 font-bold mt-4">
                All Recipes
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
