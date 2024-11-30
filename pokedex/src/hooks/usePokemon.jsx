import { useState, useEffect } from 'react';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: 'Loading...',
    number: '',
    sprite: '',
    types: [],
    cry: '',
  });

  const [searchPokemon, setSearchPokemon] = useState(1);

  const fetchPokemon = async (pokemonId, signal) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, { signal });
      if (response.ok) {
        return await response.json();
      }
      throw new Error('Pokemon not found');
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error(error.message);
      }
      return null;
    }
  };

  const fetchAndRenderPokemon = async (pokemonId) => {
    const controller = new AbortController();
    const signal = controller.signal;

    setPokemon({ name: 'Loading...', number: '', sprite: '', types: [], cry: '' });

    const data = await fetchPokemon(pokemonId, signal);

    if (data) {
      setPokemon({
        name: data.name,
        number: data.id,
        sprite: data.sprites.other['showdown']?.front_default || '',
        types: data.types.map((t) => t.type.name),
        cry: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${data.id}.ogg`,
      });

      setSearchPokemon(data.id); 

    } else {
      setPokemon({
        name: 'MissingNO',
        number: '???',
        sprite: 'img/Missingno..webp',
        types: [],
        cry: '',
      });
    }
  };

  useEffect(() => {
    fetchAndRenderPokemon(searchPokemon);
  }, [searchPokemon]);

  const goToNext = () => setSearchPokemon((prev) => prev + 1);
  const goToPrev = () => setSearchPokemon((prev) => (prev > 1 ? prev - 1 : prev));

  return { pokemon, fetchAndRenderPokemon, goToNext, goToPrev, searchPokemon };
};

export default usePokemon;
