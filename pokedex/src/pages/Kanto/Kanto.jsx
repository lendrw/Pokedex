import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import usePokedex from '../../hooks/usePokedex';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';

const Kanto = () => {
  const { pokemon } = usePokemon();

  return (
    <div>
      <PokedexData
        name={pokemon.name}
        number={pokemon.number}
        sprite={pokemon.sprite}
        types={pokemon.types}
        cry={pokemon.cry}
      />

      <PokemonList start={1} end={15} />
    </div>
  );
};

export default Kanto;
