import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';
import search from '../assets/icons/search.svg';

const SearchForm = ({ onSearch }) => {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue.toLowerCase());
    setInputValue('');
  };

  return (
    <form 
      className={styles.form} 
      onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input_search}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="name or number"
      />
      <button 
        type="submit"
        className='button'>
        <img src={search} alt="magnifying glass" />
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
