import { useState, useEffect } from 'react';
import pokedexService from '../services/pokedexService';

const usePokedex = (start, end) => {
  const [pokemonList, setPokemonList] = useState([]); // Armazena os dados dos Pokémons
  const [loading, setLoading] = useState(true); // Indica se está carregando
  const [error, setError] = useState(null); // Armazena erros, caso ocorram

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);

      const interval = {
        offset: start, // Primeiro Pokémon no intervalo
        limit: end - start + 1, // Quantidade total de Pokémons no intervalo
      };

      try {
        const response = await pokedexService.getPokemonsList(interval);
        setPokemonList(response.results); // Supondo que `results` contenha a lista de Pokémons
      } catch (err) {
        setError(err.message || 'Erro ao buscar os Pokémons.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [start, end]); // Atualiza quando o intervalo mudar

  return { pokemonList, loading, error };
};

export default usePokedex;
