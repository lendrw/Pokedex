import { useState, useEffect } from 'react';

const usePokemon = (initialPokemon, maxPokemon) => {
  const [pokemon, setPokemon] = useState({
    name: 'Loading...',
    number: '',
    sprite: '',
    types: [],
    cry: '',
    description: '',
  });

  const [searchPokemon, setSearchPokemon] = useState(initialPokemon);

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

  const fetchDescription = async (pokemonId, signal) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`, { signal });
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

    setPokemon({ name: 'Loading...', number: '', sprite: '', types: [], cry: '', description: '' });

    const pokemonData = await fetchPokemon(pokemonId, signal);
    const pokemonDescription = await fetchDescription(pokemonId, signal);

    if (pokemonData && pokemonDescription) {
      setPokemon({
        name: pokemonData.name,
        number: pokemonData.id,
        sprite: pokemonData.sprites.other['showdown']?.front_default || '',
        types: pokemonData.types.map((t) => t.type.name),
        cry: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonData.id}.ogg`,
        description: pokemonDescription.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text,
      });
    } else {
      setPokemon({
        name: 'MissingNO',
        number: '???',
        sprite: 'img/Missingno..webp',
        types: [],
        cry: '',
        description: 'A mysterious glitch in the system.',
      });
    }
  };

  useEffect(() => {
    fetchAndRenderPokemon(searchPokemon);
  }, [searchPokemon]);

  const goToNext = () => {
    setSearchPokemon((prev) => {
      const nextPokemon = prev + 1;
      return nextPokemon > maxPokemon ? initialPokemon : nextPokemon; 
    });
  };

  const goToPrev = () => {
    setSearchPokemon((prev) => {
      const prevPokemon = prev - 1;
      return prevPokemon < initialPokemon ? maxPokemon : prevPokemon; 
    });
  };

  return { pokemon, goToNext, goToPrev, searchPokemon };
};

export default usePokemon;
