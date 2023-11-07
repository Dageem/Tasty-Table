import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./displayCategory/Pagiantion";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.results);

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 16;

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.rslt.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalResults = searchResults.rslt.length;

  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen lg:w-[70%] lg:ml-[15%] text-blue-gray-900 my-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        {totalResults} Recipes
      </h1>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(searchResults.rslt.length / resultsPerPage)}
        onPageChange={handlePageChange}
      />
      <div className="flex flex-wrap justify-center">
        {currentResults.map((result) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(searchResults.rslt.length / resultsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SearchResults;

