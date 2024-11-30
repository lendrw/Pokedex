import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';

const Sinnoh = () => {
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

      <PokemonList start={386} end={492} />
    </div>
  )
}

export default Sinnoh