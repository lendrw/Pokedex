import React from 'react';
import usePokedex from '../hooks/usePokedex';
import PropTypes from 'prop-types';
import styles from './PokemonList.module.css';
import CustomScrollbar from './CustomScrollbar';

const PokemonList = ({ start, end, setPokemon }) => {
  const { pokemonList, loading, error } = usePokedex(start, end);

  if (loading) return (
    <div className={styles.list_loading}>
      <div className='loading'></div>
    </div>
  );
  
  if (error) return <div>Error: {error}</div>;

  return (
    <CustomScrollbar>
      <ul className={styles.list}>
        {pokemonList.map((pokemon, index) => (
          
          <li
            className={styles.listItem}
            key={pokemon.name}
            onClick={() => setPokemon(pokemon.number)}
          >
            <div className={styles.pokemon_number}>
              <p>
                {(index + 1).toString().padStart(3, '0')}
              </p>
            </div>
            <div className={styles.skew}></div>
            
            <img src={pokemon.sprite} alt={pokemon.name} />
            <p className={styles.pokemon_name}>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </CustomScrollbar>
  );
};

PokemonList.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  setPokemon: PropTypes.func.isRequired
};

export default PokemonList;
