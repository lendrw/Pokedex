import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';

const Unova = () => {
  const { pokemon, goToPrev, goToNext, fetchAndRenderPokemon } = usePokemon(494, 649);

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
      
      <PokemonList start={493} end={648} setPokemon={handlePokemonClick}/>
    </div>
  )
}

export default Unova