import React from "react";
import { Link } from "react-router-dom";

const TempFeature = () => {
  return (
    <div>
      <h1 className="text-3xl text-blue-gray-900 font-extrabold mt-6 mb-2">
        We Help With Your Health And Wellnes Goals!
      </h1>
      <div className="grid grid-cols-5 h-[500px] bg-cover bg-center">
        <div
          className="col-span-3 w-full h-[500px] bg-cover bg-center "
          style={{
            backgroundImage:
              "url(https://mealpreponfleek.com/wp-content/uploads/2019/04/food-prep-ideas-777x431.jpg)",
          }}
        ></div>
        <div className="col-span-2 bg-white flex justify-center items-center p-4">
          <div className="flex flex-col items-center">
            <p className="text-blue-gray-900 text-center lg:text-2xl font-bold italic mb-2">
              "Meal prepping not only paves the way for substantial savings but
              also aligns perfectly with achieving your personal health and
              wellness targets. However, the prospect of starting can sometimes
              seem overwhelming. To simplify your meal prep adventure or enhance
              your existing routine, we've curated a selection of recipes that
              promise ease and inspiration. Dive in and transform the way you
              approach your culinary preparations!"
            </p>
            <Link to={`/categories/foodprep`}>
              <button className="bg-blue-gray-900 text-white text-xl font-bold px-6 py-3 rounded-lg hover:scale-110">
                Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempFeature;
