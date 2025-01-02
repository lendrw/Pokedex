import './App.css';
import Home from './pages/Home'
import Kanto from './pages/Kanto/Kanto';
import Johto from './pages/Johto/Johto';
import Alola from './pages/Alola/Alola';
import Hoenn from './pages/Hoenn/Hoenn';
import Galar from './pages/Galar/Galar';
import Kalos from './pages/Kalos/Kalos';
import Sinnoh from './pages/Sinnoh/Sinnoh';
import Unova from './pages/Unova/Unova';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/Pokedex' element={<Home/>}/>
          <Route path='/Pokedex/kanto' element={<Kanto/>}/>
          <Route path='/Pokedex/johto' element={<Johto/>}/>
          <Route path='/Pokedex/hoenn' element={<Hoenn/>}/>
          <Route path='/Pokedex/sinnoh' element={<Sinnoh/>}/>
          <Route path='/Pokedex/unova' element={<Unova/>}/>
          <Route path='/Pokedex/kalos' element={<Kalos/>}/>
          <Route path='/Pokedex/alola' element={<Alola/>}/>
          <Route path='/Pokedex/galar' element={<Galar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
