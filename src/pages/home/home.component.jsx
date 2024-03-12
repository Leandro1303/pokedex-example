import { Outlet } from 'react-router-dom';
import PokemonModal from '../../components/modal/pokemonModal';
import PokemonList from '../../components/pokemon-list/pokemon-list';

import './home.styles.css';

const Home = () => {
    return (
      <main >
        <PokemonList />
        <PokemonModal />
        <Outlet />
      </main>
    );
};

export default Home;