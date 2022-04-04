import { UseTypeTheme } from "../../hooks/UseTypeTheme";

import {
  Container,
  ImagePokemon,
  InfoContainer,
  TypesContainer,
} from "./style";

export const Card = ({ info, handleIsModal }) => {
  return (
    <Container onClick={handleIsModal}>
      <ImagePokemon src={info.sprites.front_default} alt="pokemon" />
      <InfoContainer>
        <h1 className="id-pokemon">
          Nº{info.id < 10 ? `00${info.id}` : info.id}
        </h1>
        <h3 className="name-pokemon">{info.name}</h3>
        <TypesContainer>
          {info.types.length > 1 ? (
            <>
              <div
                className="first-type"
                style={{
                  backgroundColor: UseTypeTheme(info.types[0].type.name),
                }}
              >
                {info.types[0].type.name}
              </div>
              <div
                style={{
                  backgroundColor: UseTypeTheme(info.types[1].type.name),
                }}
              >
                {info.types[1].type.name}
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  backgroundColor: UseTypeTheme(info.types[0].type.name),
                }}
              >
                {info.types[0].type.name}
              </div>
            </>
          )}
        </TypesContainer>
      </InfoContainer>
    </Container>
  );
};
