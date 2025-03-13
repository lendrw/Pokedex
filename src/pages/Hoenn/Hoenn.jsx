import React from 'react';
import usePokemon from '../../hooks/usePokemon';
import PokedexData from '../../components/PokedexData';
import PokemonList from '../../components/PokemonList';

const Hoenn = () => {
  const { pokemon, goToPrev, goToNext, fetchAndRenderPokemon } = usePokemon(252, 386);

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
      
      <PokemonList start={251} end={385} setPokemon={handlePokemonClick}/>
    </div>
  )
}

export default Hoenn