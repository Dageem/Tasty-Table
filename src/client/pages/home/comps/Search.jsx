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

  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    dispatch(clearSearch());

    try {
      const response = await fetch(
        `https://tasty-table-lqa6.onrender.com/api/recipe/search?query=${searchQuery}`
        // `http://localhost:3000/api/recipe/search?query=${searchQuery}`
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
    <div className="bg-gray-100">
      <form onSubmit={handleSearchSubmit}>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="border border-blue-gray-900 rounded-lg p-2 w-[200px]"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
