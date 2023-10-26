import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults, clearSearch } from "../reducers/api";

const fetchSearchResults = async (searchQuery, dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/recipe/search?query=${searchQuery}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch(setSearchResults(data));
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.results);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    dispatch(clearSearch());

    fetchSearchResults(searchQuery, dispatch);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      <ul>
        {searchResults.rslt.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
