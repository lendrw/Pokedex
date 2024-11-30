import React from 'react';
import usePokedex from '../hooks/usePokedex';

const PokemonList = ({ start, end }) => {
  const { pokemonList, loading, error } = usePokedex(start, end);

  if (loading) return <div>Carregando Pokémons...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.number} >
            <img src={pokemon.sprite} alt={pokemon.name} />
            <p>#{pokemon.number} - {pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
