import React from 'react';
import usePokedex from '../hooks/usePokedex';

const PokemonList = ({ start, end }) => {
  const { pokemonList, loading, error } = usePokedex(start, end);

  if (loading) return <div>Carregando Pokémons...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h1>Lista de Pokémons</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
