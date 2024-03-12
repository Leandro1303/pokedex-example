import { useState } from 'react';
import axios from 'axios';
import PokemonCard from '../pokemon-card/pokemon-card';

import './pokemon-list.styles.css'
import { useModal } from '../../context/pokeDetailsModal.context';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [seenPokemon, setSeenPokemon] = useState(new Set());
  const { openModal } = useModal();
  const [ desable, setDisable ] = useState(false);

  const loadMorePokemon = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`);
      const newPokemonList = response.data.results.filter(
        (pokemon) => !seenPokemon.has(pokemon.name)
      );

      // Fetch additional details for each Pokémon
      const detailedPokemonList = await Promise.all(
        newPokemonList.map(async (pokemon) => {
          const detailedResponse = await axios.get(pokemon.url);
          return detailedResponse.data;
        })
      );

      setPokemonList((prevList) => [...prevList, ...detailedPokemonList]);
      setOffset((prevOffset) => prevOffset + 25);
      
      // Update the set of seen Pokemon
      setSeenPokemon((prevSet) => {
        const newNames = newPokemonList.map((pokemon) => pokemon.name);
        return new Set([...prevSet, ...newNames]);
      });
    } catch (error) {
      if (error.code == "ERR_BAD_REQUEST") setDisable(true)
      console.error('Error fetching Pokemon list:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pokemon-list-container'>
      <h2>Pokemon List</h2>
      <div className='cards-container'>
        <div className='pokemon-card-list'>
          {pokemonList.map((pokemon, index) => (
            <PokemonCard key={index} data={pokemon} onClick={() => openModal(pokemon)} />
            ))}
        </div>
        </div>
      <button onClick={loadMorePokemon} disabled={ loading || desable }>
        {pokemonList.length === 0 ?
          'Get Pokemons'
        : loading ?
          'Loading...'
        :
          'Load more'
        }
      </button>
    </div>
  );
};

export default PokemonList;
