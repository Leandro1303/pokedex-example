import PropTypes from 'prop-types';
import './pokeType.styles.css'

const PokeType = ({ types }) => {
    return(
        <div className="type-wrapper">
            {
                types.map((pokeType, index) => (
                    <p key={index} className={`type-container ${pokeType.type.name}`}>
                        {pokeType.type.name.toUpperCase()}
                    </p>
                ))
            }
        </div>
    )
}

PokeType.propTypes = {
    types: PropTypes.array.isRequired,
}

export default PokeType;