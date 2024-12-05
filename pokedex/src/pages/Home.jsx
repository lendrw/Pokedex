import React from 'react';
import usePokemon from '../hooks/usePokemon';
import PokedexData from '../components/PokedexData';
import SearchForm from '../components/SearchForm';

import { Link } from 'react-router-dom';
import PrevAndNext from '../components/PrevAndNext';

const Home = () => {
    const { pokemon, fetchAndRenderPokemon, goToNext, goToPrev } = usePokemon(1, 898);

  return (
    <div>
        <PokedexData
            name={pokemon.name}
            number={pokemon.number}
            sprite={pokemon.sprite}
            types={pokemon.types}
            cry={pokemon.cry}
            description={pokemon.description}
        />
        <PrevAndNext
            onPrev={goToPrev}
            onNext={goToNext}
        />
        <SearchForm 
            onSearch={fetchAndRenderPokemon}
        />

      <div>
        <ul>
            <Link to='/kanto'>
                <li>Kanto Pokedex</li>
            </Link>
            <Link to='/johto'>
                <li>Johto Pokedex</li>
            </Link>
            <Link to='/hoenn'>
                <li>Hoenn Pokedex</li>
            </Link>
            <Link to='/sinnoh'>
                <li>Sinnoh Pokedex</li>
            </Link>
            <Link to='/unova'>
                <li>Unova Pokedex</li>
            </Link>
            <Link to='/kalos'>
                <li>Kalos Pokedex</li>
            </Link>
            <Link to='/alola'>
                <li>Alola Pokedex</li>
            </Link>
            <Link to='/galar'>
                <li>Galar Pokedex</li>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Home