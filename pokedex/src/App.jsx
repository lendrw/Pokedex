import './App.css'
import Home from './pages/Home'
import Kanto from './pages/Kanto/Kanto';
import Johto from './pages/Johto/Johto';
import Alola from './pages/Alola/Alola';
import Hoenn from './pages/Hoenn/Hoenn';
import Galar from './pages/Galar/Galar';
import Kalos from './pages/Kalos/Kalos';
import Sinnoh from './pages/Sinnoh/Sinnoh';
import Unova from './pages/Unova/Unova';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/kanto' element={<Kanto/>}/>
          <Route path='/johto' element={<Johto/>}/>
          <Route path='/hoenn' element={<Hoenn/>}/>
          <Route path='/sinnoh' element={<Sinnoh/>}/>
          <Route path='/unova' element={<Unova/>}/>
          <Route path='/kalos' element={<Kalos/>}/>
          <Route path='/alola' element={<Alola/>}/>
          <Route path='/galar' element={<Galar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
