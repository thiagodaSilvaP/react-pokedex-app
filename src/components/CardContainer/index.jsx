import { useState, useEffect } from "react";
import { Card } from "../Card/";
import { Container } from "./style";

export const CardContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonsPromises = [];

    for (let index = 1; index <= 1; index++) {
      pokemonsPromises.push(
        fetch(url + index)
          .then((response) => response.json())
          .then((data) => data)
      );
    }
    Promise.all(pokemonsPromises).then((pokemons) => setPokemons(pokemons));
  }, []);
  console.log(pokemons);
  return <Container>{pokemons.map(pokemon => <Card key={pokemon.id} info={pokemon}/>)}</Container>;
};
