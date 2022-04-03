import {
  Container,
  ImagePokemon,
  InfoContainer,
  TypesContainer,
} from "./style";

export const Card = ({ info }) => {
  console.log(info.types[0].type);
  return (
    <Container>
      <ImagePokemon src={info.sprites.front_default} alt="pokemon" />
      <InfoContainer>
        <h1>{info.id}</h1>
        <h3>{info.name}</h3>
        <TypesContainer>
          {info.types.length > 1 ? (
            <>
              <h2>{info.types[0].type.name}</h2>
              <h2>{info.types[1].type.name}</h2>
            </>
          ) : (
            <>
              <h2>{info.types[0].type.name}</h2>
            </>
          )}
        </TypesContainer>
      </InfoContainer>
    </Container>
  );
};
