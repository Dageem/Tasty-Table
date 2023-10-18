import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import RecentRecipes from "./RecentRecipes";

function Home() {
  return (
    <div>
      <section className="">
        <div className="text-center mb-6">
          <h1 className="text-2xl py-4 font-bold text-purple-900">
            Recipes For Everyone
          </h1>
          <p className="text-lg bg-gray-300 italic text-purple-400 mb-6 p-1 rounded-xl w-[95%] ml-[2.5%]">
            "Restaurant quality recipes for average Joes."
            <br /> -Chef Daniel
          </p>
        </div>
        <div className="flex flex-col">
          <Link to="/categories/easy">
            <div className="relative hover:cursor-pointer hover:opacity-70">
              <img
                src="https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg"
                alt=""
                className="w-[95%] ml-[2.5%] rounded-xl py-2 h-[300px]"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 p-2 bg-white bg-opacity-80 rounded text-l font-bold">
                Easy Recipes
              </div>
            </div>
          </Link>
          <Link to="/categories/quick">
            <div className="relative hover:cursor-pointer hover:opacity-70">
              <img
                src="https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg"
                alt=""
                className="w-[95%] ml-[2.5%] rounded-xl py-2 h-[300px]"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 p-2 bg-white bg-opacity-80 rounded text-l font-bold">
                Quick Recipes
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section>
        <div className="p-4">
          <h1 className="text-xl text-center font-bold text-black">
            Search Recipes
          </h1>
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-[95%] ml-[2.5%] border border-black rounded-lg p-2"
          />
        </div>
        <div>
          <div className="my-6">
            <Carousel />
          </div>
          <div className="text-center">
          <Link to="/allrecipes">
              <button className="bg-purple-900 text-white my-4 py-2 px-4 w-[200px] rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300">
                All Recipes
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <RecentRecipes />
      </section>
    </div>
  );
}

export default Home;
