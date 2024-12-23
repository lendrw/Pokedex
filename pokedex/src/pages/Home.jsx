import React from 'react';
import styles from './Home.module.css';
import usePokemon from '../hooks/usePokemon';
import PokedexData from '../components/PokedexData';
import SearchForm from '../components/SearchForm';

import { Link } from 'react-router-dom';
import PrevAndNext from '../components/PrevAndNext';

const Home = () => {
    const { pokemon, fetchAndRenderPokemon, goToNext, goToPrev } = usePokemon(1, 898);

  return (
    <div className={styles.container}>
        
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
        <SearchForm 
            onSearch={fetchAndRenderPokemon}
        />

      <div className={styles.region_list}>
        <ul>
            <li className={styles.kanto}>
                <Link to="/kanto" className={styles.link}>
                    Kanto Pokédex
                </Link>
            </li>
            <li className={styles.johto}>
                <Link to="/johto" className={styles.link}>
                    Johto Pokédex
                </Link>
            </li>
            <li className={styles.hoenn}>
                <Link to="/hoenn" className={styles.link}>
                    Hoenn Pokédex
                </Link>
            </li>
            <li className={styles.sinnoh}>
                <Link to="/sinnoh" className={styles.link}>
                    Sinnoh Pokédex
                </Link>
            </li>
            <li className={styles.unova}>
                <Link to="/unova" className={styles.link}>
                    Unova Pokédex
                </Link>
            </li>
            <li className={styles.kalos}>
                <Link to="/kalos" className={styles.link}>
                    Kalos Pokédex
                </Link>
            </li>
            <li className={styles.alola}>
                <Link to="/alola" className={styles.link}>
                    Alola Pokédex
                </Link>
            </li>
            <li className={styles.galar}>
                <Link to="/galar" className={styles.link}>
                    Galar Pokédex
                </Link>
            </li>
        </ul>   
      </div>
    </div>
  )
}

export default Home