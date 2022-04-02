import { Container } from "./style";

export const Card = ({ info }) => {
  return (
    <Container>
      <img src={info.sprites.front_default} alt="" />
    </Container>
  );
};
