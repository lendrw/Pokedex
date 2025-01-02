import axios from 'axios';

const pokedexService = {
  getPokemonsList: async (interval) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${interval.limit}&offset=${interval.offset}`;
    const response = await axios.get(url);
    return response.data;
  },
  
  getPokemonDetails: async (url) => {
    const response = await axios.get(url);
    return response.data;
  },
};

export default pokedexService;
