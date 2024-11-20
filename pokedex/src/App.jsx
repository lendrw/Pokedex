import './App.css'
import PokedexData from './components/PokedexData';
import SearchForm from './components/SearchForm';
import usePokemon from './hooks/usePokemon';

function App() {
  const { pokemon, renderPokemon, goToNext, goToPrev } = usePokemon();

  return (
    <>
      <PokedexData
        name={pokemon.name}
        number={pokemon.number}
        image={pokemon.image}
      />
      <SearchForm 
        onSearch={renderPokemon}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  )
}

export default App
