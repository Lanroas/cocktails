import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value.trim(); 
    setQuery(input);
    if (input === '') {
      onSearch('');
    }
    if (input.length === 1) {
      onSearch(input);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search cocktails..."
        value={query}
        onChange={handleInputChange}
        maxLength={20} 
      />
    </div>
  );
};

export default Search;
