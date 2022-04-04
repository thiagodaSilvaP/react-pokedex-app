import { useContext, useState } from "react";
import { Card } from "../Card/";
import { Container } from "./style";
import { PokemonContext } from "../../contexts/PokemonsContext";
import { Modal } from "../Modal";

export const CardContainer = () => {
  const pokemons = useContext(PokemonContext);
  const [isModal, setIsModal] = useState(false);
  const handleIsModal = () => setIsModal(prev => !prev)
  return (
    <Container>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <Card  info={pokemon} handleIsModal={handleIsModal}/>
            <Modal info={pokemon} isModal={isModal}/>
          </div>
        );
      })}
    </Container>
  );
};
