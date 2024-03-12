import {
  Routes,
  Route,
} from 'react-router-dom'

//Routes
import Home from './pages/home/home.component'
import PokemonDetails from './pages/pokemon-details/pokeDetails.component'

// STYLES
import './App.css'
import Navigation from './components/navigation/navigation.component'

const App = () => {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<PokemonDetails />} />
      </Routes>
    </div>
  )
}

export default App
