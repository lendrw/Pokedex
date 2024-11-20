import { useState, useEffect } from 'react';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: 'Loading...',
    number: '',
    image: '',
  });
  
  const [searchPokemon, setSearchPokemon] = useState(1);

  const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (response.status === 200) {
      return await response.json();
    }
    return null;
  };

  const renderPokemon = async (pokemon) => {
    setPokemon({ name: 'Loading...', number: '', image: '' });

    const data = await fetchPokemon(pokemon);

    if (data) {
      setPokemon({
        name: data.name,
        number: data.id,
        image: data.sprites.versions['generation-viii'].icons.front_default,
      });
      setSearchPokemon(data.id);
    } else {
      setPokemon({
        name: 'MissingNO',
        number: '???',
        image: 'img/Missingno..webp',
      });
    }
  };

  useEffect(() => {
    renderPokemon(searchPokemon);
  }, [searchPokemon]);

  const goToNext = () => setSearchPokemon((prev) => prev + 1);
  const goToPrev = () => setSearchPokemon((prev) => (prev > 1 ? prev - 1 : prev));

  return { pokemon, renderPokemon, goToNext, goToPrev, searchPokemon };
};

export default usePokemon;
