import React from "react";
import { useSelector } from "react-redux";
import Search from "./home/comps/Search";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.results);

  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen lg:w-[70%] lg:ml-[15%] text-blue-gray-900 my-4">
      <div className="flex flex-wrap justify-center">
        {searchResults.rslt.map((result) => (
          <div
            key={result.id}
            className="w-full sm:w-1/2 md:w-1/2 my-4 xl:w-1/3 2xl:w-1/4 sm:p-3 hover:opacity-70 cursor-pointer"
          >
            <Link to={`/recipe/${result.id}`}>
              <div>
                <div className="flex items-center justify-center">
                  <div
                    className="w-full h-[280px] md:h-[300px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${result.imageUrl})` }}
                  ></div>
                </div>
                <div className="text-xl font-bold text-center mt-2">
                  {result.name}
                </div>
                <div className="text-blue-gray-900 text-xl text-center mt-2">
                  {result.details}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
