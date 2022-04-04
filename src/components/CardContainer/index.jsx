import { useContext, useState } from "react";
import { Card } from "../Card/";
import { Container } from "./style";
import { PokemonContext } from "../../contexts/PokemonsContext";
import { Modal } from "../Modal";

export const CardContainer = () => {
  const pokemons = useContext(PokemonContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentInfosPokemon, setCurrentInfosPokemon] = useState({});

  const handleOpenModal = (pokemon) => {
    setCurrentInfosPokemon(pokemon)
    setModalIsOpen((prev) => !prev)
  };
  const handleCloseModal = () => setModalIsOpen(false)

  return (
    <Container>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <Card info={pokemon} handleOpenModal={() => handleOpenModal(pokemon)} />
          </div>
        );
      })}
      <Modal info={currentInfosPokemon} handleCloseModal={handleCloseModal} modalIsOpen={modalIsOpen} />
    </Container>
  );
};
