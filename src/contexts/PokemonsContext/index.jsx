import {createContext, useState, useEffect} from 'react';

export const PokemonContext = createContext()

export const PokemonProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonsPromises = [];

    for (let index = 1; index <= 2; index++) {
      pokemonsPromises.push(
        fetch(url + index)
          .then((response) => response.json())
          .then((data) => data)
      );
    }
    Promise.all(pokemonsPromises).then((pokemons) => setPokemons(pokemons));
  }, []);
    
    return (
        <PokemonContext.Provider value={pokemons}>
            {children}
        </PokemonContext.Provider>
    )
}