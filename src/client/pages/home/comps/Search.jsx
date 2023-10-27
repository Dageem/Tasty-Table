import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults, clearSearch } from "../../../reducers/api";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = async () => {
    dispatch(clearSearch());

    try {
      const response = await fetch(
        `https://tasty-table-lqa6.onrender.com/api/recipe/search?query=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      dispatch(setSearchResults(data));
      navigate("/search-results");
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold">Search Recipes</h1>
      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-blue-gray-900 rounded-lg p-2 w-full lg:w-1/2"
        />
        <button
          onClick={handleSearchButtonClick}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;


