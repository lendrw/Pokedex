import React from 'react';
import styles from './Home.module.css';
import usePokemon from '../hooks/usePokemon';
import PokedexData from '../components/PokedexData';
import SearchForm from '../components/SearchForm';

import { Link } from 'react-router-dom';

const Home = () => {
    const { pokemon, fetchAndRenderPokemon, goToNext, goToPrev } = usePokemon(1, 898);

    return (
        <div className="container">
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
            <SearchForm 
                onSearch={fetchAndRenderPokemon}
            />
            <div className={styles.region_list}>
                <ul>
                    <Link to="/Pokedex/kanto" className={styles.link}>
                        <li className={styles.kanto}>Kanto Pokédex</li>
                    </Link>
                    <Link to="/Pokedex/johto" className={styles.link}>
                        <li className={styles.johto}>Johto Pokédex</li>
                    </Link>
                    <Link to="/Pokedex/hoenn" className={styles.link}>
                        <li className={styles.hoenn}>Hoenn Pokédex</li>
                    </Link>
                    <Link to="/Pokedex/sinnoh" className={styles.link}>
                        <li className={styles.sinnoh}>Sinnoh Pokédex</li>
                    </Link>
                    <Link to="/Pokedex/unova" className={styles.link}>
                        <li className={styles.unova}>Unova Pokédex</li>
                    </Link>
                    <Link to="/Pokedex/kalos" className={styles.link}>
                        <li className={styles.kalos}>Kalos Pokédex</li>
                    </Link>
                    <Link to="/Pokedex/alola" className={styles.link}>
                        <li className={styles.alola}>Alola Pokédex</li>
                    </Link>
                    <Link to="/Pokedex/galar" className={styles.link}>
                        <li className={styles.galar}>Galar Pokédex</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Home;
