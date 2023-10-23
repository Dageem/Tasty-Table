import React, { useState } from 'react';
import { useGetSearchRecipesQuery } from '../reducers/api';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, error, isLoading } = useGetSearchRecipesQuery(searchQuery);

 

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {data.map((recipe) => (
              <li key={recipe.id}>{recipe.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;







