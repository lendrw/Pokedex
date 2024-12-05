import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';
import PrevAndNext from '../../components/PrevAndNext';

const Kalos = () => {
  const { pokemon, goToPrev, goToNext } = usePokemon(650, 721);

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
      <PokemonList start={649} end={720} />
    </div>
  )
}

export default Kalos