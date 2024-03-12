import { useState, useEffect } from 'react';
import './search-box.css'
import axios from 'axios';
import { useModal } from '../../context/pokeDetailsModal.context';
import Swal from 'sweetalert2';

const SearchBox = () => {
    const baseURL = "https://pokeapi.co/api/v2/pokemon";
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState([]);
    const { openModal } = useModal();

    useEffect(() => {
        if (pokemon && Object.keys(pokemon).length > 0) {
            openModal(pokemon);
            setPokemon([]);
        }
    }, [pokemon, openModal]);

    const getPokemon = async (who) => {
        setLoading(true)
        try {
            const response = await axios.get(`${baseURL}/${who}/`);
            const data = response.data;
            setPokemon(data);
        } catch (error) {
            setLoading(false)
            Swal.fire({
                icon: "error",
                title: `Error`,
                text: `Por favor, verifique el nombre o numero de su pokemon.`,
              });
            console.error('Error getthing your Pokemon:', error);
        } finally {
            setLoading(false)
        }
    }
    
    const handleSearch = async (event) => {
        event.preventDefault();
        const searchPoke = event.target.pokemon.value.toLowerCase();
        await getPokemon(searchPoke);
    }

    return (
        <div className="search-container">
            <form role="search" id="search-form" onSubmit={handleSearch}>
                <label>Nombre o número:</label>
                <input type="text" name="pokemon" id="search-input" required />
                <button id="search-button" type="submit" disabled={loading}>
                    {loading ? 'Buscando...' : 'Search'}
                </button>
            </form>
        </div>
    )
}

export default SearchBox;
