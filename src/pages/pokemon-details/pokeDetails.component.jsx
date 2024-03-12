import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../../components/UI-Components/spinner/spinner.component";
import ProgressBarComponent from "../../components/UI-Components/progress-bar/progressBar.component";

import "./pokeDetails.styles.css"
const PokemonDetails = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon${location.pathname}/`;
        setLoading(true);
        try {
            const response = await axios.get(url);
            const data = response.data;
            setPokemon(data);
        } catch (error) {
            setLoading(false);
            Swal.fire({
                icon: "error",
                title: `${error.response.data}`,
                text: `${error.message}`,
            });
            console.error('Error fetching your Pokemon:', error);
        } finally {
            setLoading(false);
        }
        };

        getPokemon();
    }, [location.pathname]);

    console.log(pokemon)
    
    return (
        <>
        {!loading & pokemon.length != 0 ? (
            <div className="detail-content">
                <div className="detail-head">
                    <div className="name-id">
                        <p>{pokemon.name}</p>
                        <p>#{pokemon.id}</p>
                    </div>
                </div>
                <img id="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="physical-description">
                    <div className="column">
                        <p>Height:</p>
                        <p>{pokemon.height} Ft</p>
                    </div>
                    <div className="column">
                        <p>Weight:</p>
                        <p>{pokemon.weight} Lb</p>
                    </div>
                </div>
                <div className="stats-container">
                    <h3>STATS</h3>
                    {pokemon.stats.map((stat, index) => (
                        <ProgressBarComponent key={index} label={stat.stat.name.toUpperCase()} value={stat.base_stat} />
                    ))}
                </div>
            </div>
            ) : (
            <Spinner />
        )}
        </>
    );
};

export default PokemonDetails;
