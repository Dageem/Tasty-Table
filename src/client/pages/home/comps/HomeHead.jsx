import React from "react";
import { Link } from "react-router-dom";

const HomeHead = () => {
  return (
    <div>
      <h1 className="text-3xl text-blue-gray-900 font-extrabold mt-6 mb-2">
        Get Into The Holiday Spirit!
      </h1>
      <div className="grid grid-cols-5 h-[500px] bg-cover bg-center">
        <div
          className="col-span-3 w-full h-[500px] bg-cover bg-center "
          style={{
            backgroundImage:
              "url(https://www.tasteofhome.com/wp-content/uploads/2018/01/Seasoned-Roast-Turkey_EXPS_TBZ23_36695_DR_06_27_3b.jpg)",
          }}
        ></div>
        <div className="col-span-2 bg-[#462001] flex justify-center items-center p-4">
          <div className="flex flex-col items-center">
            <p className="text-white text-center lg:text-2xl font-bold mb-2">
              The Most Popular Thanksgiving Recipes
            </p>
            <Link to={`/categories/holiday`}>
              <button className="bg-white text-[#462001] font-bold px-4 py-2 rounded-lg hover:scale-110">
                Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHead;
