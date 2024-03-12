import SearchBox from '../search-box/search-box'

import logo from '../../assets/Pokédex_logo.png'
import './navigation.styles.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <div className='nav'>
          <Link to='/'><img src={logo} alt="pokedex logo" id="poke-logo" /></Link>
          <SearchBox />
        </div>
    )
}

export default  Navigation;