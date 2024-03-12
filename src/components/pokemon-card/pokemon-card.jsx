import PropTypes from 'prop-types';
import PokeType from '../pokeType/pokeType';
import './pokemon-card.styles.css'

const PokemonCard = ({ data, onClick }) => {
    const imgURL = data.sprites.other["official-artwork"].front_default;
    const name = data.name;
    const type = data.types;
    return (
        <div className="pokemon-card" onClick={onClick}>
            <img id="card-img" src={imgURL} alt={name} />
            <p>{name.toUpperCase()}</p>
            <PokeType types={type}/>
        </div>
    );
};

PokemonCard.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PokemonCard;
