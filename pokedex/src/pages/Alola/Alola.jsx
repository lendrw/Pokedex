import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';
import PrevAndNext from '../../components/PrevAndNext';

const Alola = () => {
  const { pokemon, goToPrev, goToNext } = usePokemon(722, 809);

  return (
    <div>
      <PokedexData
        name={pokemon.name}
        number={pokemon.number}
        sprite={pokemon.sprite}
        types={pokemon.types}
        cry={pokemon.cry}
      />
      <PrevAndNext
        onPrev={goToPrev}
        onNext={goToNext}
      />
      <PokemonList start={721} end={808} />
    </div>
  )
}

export default Alola