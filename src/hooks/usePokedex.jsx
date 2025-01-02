import { useState, useEffect } from 'react';
import pokedexService from '../services/pokedexService';

const usePokedex = (start, end) => {
  const [pokemonList, setPokemonList] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);

      const interval = {
        offset: start,
        limit: end - start + 1,
      };

      try {
        const response = await pokedexService.getPokemonsList(interval);
        const results = response.results;

        
        const detailedPokemons = await Promise.all(
          results.map(async (pokemon) => {
            const details = await pokedexService.getPokemonDetails(pokemon.url); 
            return {
              name: details.name,
              number: details.id,
              sprite: details.sprites.versions['generation-viii'].icons.front_default, 
            };
          })
        );

        setPokemonList(detailedPokemons); 
      } catch (err) {
        setError(err.message || 'Erro ao buscar os Pokémons.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [start, end]); 

  return { pokemonList, loading, error };
};

export default usePokedex;
