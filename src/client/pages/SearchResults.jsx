import React from "react";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.results);

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.rslt.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;



