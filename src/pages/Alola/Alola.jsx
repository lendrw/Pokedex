import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';

const Alola = () => {
  const { pokemon, goToPrev, goToNext, fetchAndRenderPokemon } = usePokemon(722, 809);

  const handlePokemonClick = (pokemonNumber) => {
    fetchAndRenderPokemon(pokemonNumber);
  };

  return (
    <div className='container'>
      <div className='landscape'>
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
          onSearch={fetchAndRenderPokemon}
        />
      </div>
      
      
      <PokemonList start={721} end={808} setPokemon={handlePokemonClick}/>
    </div>
  )
}

export default Alola