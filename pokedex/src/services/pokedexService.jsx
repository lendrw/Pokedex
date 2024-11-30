import axios from 'axios';

const pokedexService = {
  // Requisição para obter a lista de Pokémons (básica)
  getPokemonsList: async (interval) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${interval.limit}&offset=${interval.offset}`;
    const response = await axios.get(url);
    return response.data;
  },

  // Requisição para obter os detalhes de um Pokémon específico
  getPokemonDetails: async (url) => {
    const response = await axios.get(url);
    return response.data;
  },
};

export default pokedexService;
