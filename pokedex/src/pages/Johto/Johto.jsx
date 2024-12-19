import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';
import PrevAndNext from '../../components/PrevAndNext';

const Johto = () => {
  const { pokemon, goToPrev, goToNext, fetchAndRenderPokemon } = usePokemon(152, 251);

  const handlePokemonClick = (pokemonNumber) => {
    fetchAndRenderPokemon(pokemonNumber);
  };

  return (
    <div>
      <PokedexData
        name={pokemon.name}
        number={String(pokemon.number)}
        sprite={pokemon.sprite}
        types={pokemon.types}
        cry={pokemon.cry}
        description={pokemon.description}
        height={String(pokemon.height)}
        weight={String(pokemon.weight)}
      />
      <PrevAndNext
        onPrev={goToPrev}
        onNext={goToNext}
      />
      <PokemonList start={151} end={250} setPokemon={handlePokemonClick}/>
    </div>
  )
}

export default Johto