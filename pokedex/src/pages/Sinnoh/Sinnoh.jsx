import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';
import PrevAndNext from '../../components/PrevAndNext';

const Sinnoh = () => {
  const { pokemon, goToPrev, goToNext, fetchAndRenderPokemon } = usePokemon(387, 493);

  const handlePokemonClick = (pokemonNumber) => {
    fetchAndRenderPokemon(pokemonNumber);
  };

  return (
    <div>
      <PokedexData
        name={pokemon.name}
        number={pokemon.number}
        sprite={pokemon.sprite}
        types={pokemon.types}
        cry={pokemon.cry}
        height={pokemon.height}
        weight={pokemon.weight}
      />
      <PrevAndNext
        onPrev={goToPrev}
        onNext={goToNext}
      />
      <PokemonList start={386} end={492} setPokemon={handlePokemonClick}/>
    </div>
  )
}

export default Sinnoh