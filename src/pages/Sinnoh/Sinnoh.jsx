import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';

const Sinnoh = () => {
  const { pokemon, goToPrev, goToNext, fetchAndRenderPokemon } = usePokemon(387, 493);

  const handlePokemonClick = (pokemonNumber) => {
    fetchAndRenderPokemon(pokemonNumber);
  };

  return (
    <div className='container'>
      <PokedexData
        name={pokemon.name}
        number={String(pokemon.number)}
        sprite={pokemon.sprite}
        types={pokemon.types}
        cry={pokemon.cry}
        description={pokemon.description}
        height={String(pokemon.height)}
        weight={String(pokemon.weight)}
        onPrev={goToPrev}
        onNext={goToNext}
      />
      
      <PokemonList start={386} end={492} setPokemon={handlePokemonClick}/>
    </div>
  )
}

export default Sinnoh