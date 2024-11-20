import React, { useState } from 'react';

const SearchForm = ({ onSearch, onPrev, onNext }) => {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue.toLowerCase());
    setInputValue('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input_search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Pokémon name or ID"
      />
      <button type="submit">Search</button>
      <button className="btn-prev" onClick={onPrev}>
        Previous
      </button>
      <button className="btn-next" onClick={onNext}>
        Next
      </button>
    </form>
  );
};

export default SearchForm;
