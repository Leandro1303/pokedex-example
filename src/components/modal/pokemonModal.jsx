import { Link } from 'react-router-dom';
import { useModal } from '../../context/pokeDetailsModal.context';
import PokeChart from '../chart/pokeChart';
import PokeType from '../pokeType/pokeType';

// STYLING
import './pokemonModal.css';

const PokemonModal = () => {
    const { modalVisible, modalData, closeModal } = useModal();

    if (!modalVisible) {
        return null;
    }

    const pokemonImg = modalData.sprites.other["official-artwork"].front_default;
    console.log(pokemonImg);

    return (
        <div className="modal"  onClick={closeModal}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="output-container">
                    <div className="top-container">
                        <div className="name-and-id">
                            <h5 id="pokemon-name">{modalData.name.toUpperCase()}</h5>
                            <h6 id="pokemon-id">No. {modalData.id}</h6>
                        </div>
                        <div id="sprite-container" className="sprite-container">
                            <img id="pokeImg" src={pokemonImg} alt={modalData.name} />
                        </div>
                        <PokeType types={modalData.types}/>
                    </div>
                    <div className="bottom-container">
                        <PokeChart data={modalData.stats} />
                    </div>
                </div>
                    <Link
                        to={`/${modalData.name}`}
                        state={{ data: modalData }}
                        className='more-details'
                    >
                        More Details
                    </Link>
            </div>
        </div>
    );
};

export default PokemonModal;