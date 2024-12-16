import React from 'react';
import usePokedex from '../hooks/usePokedex';
import PropTypes from 'prop-types';
import styles from './PokemonList.module.css';

const PokemonList = ({ start, end, setPokemon }) => {
  const { pokemonList, loading, error } = usePokedex(start, end);

  if (loading) return <div>Carregando Pokémons...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {pokemonList.map((pokemon, index) => (
          <li 
            className={styles.listItem}
            key={pokemon.name} 
            onClick={() => setPokemon(pokemon.number)}
          >
            <p className={styles.pokemon_number}>{(index + 1).toString().padStart(3, '0')}</p>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <p className={styles.pokemon_name}>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

PokemonList.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  setPokemon: PropTypes.func.isRequired
};

export default PokemonList;
