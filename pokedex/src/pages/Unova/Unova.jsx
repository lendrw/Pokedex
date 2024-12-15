import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';
import PrevAndNext from '../../components/PrevAndNext';

const Unova = () => {
  const { pokemon, goToPrev, goToNext, fetchAndRenderPokemon } = usePokemon(494, 649);

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
      <PokemonList start={493} end={648} setPokemon={handlePokemonClick}/>
    </div>
  )
}

export default Unova