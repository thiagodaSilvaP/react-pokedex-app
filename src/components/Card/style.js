import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.bg_light};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImagePokemon = styled.img`
  height: 150px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: column;

  .id-pokemon {
    font-size: medium;
    font-weight: normal;
    margin-bottom: 10px;
  }
  .name-pokemon {
    font-weight: bolder;
    font-size: x-large;
    margin-bottom: 5px;
  }
`;

export const TypesContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    flex: 1;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 6px;
    color: ${props => props.theme.colors.bg_light};
  }

  .first-type {
    margin-right: 10px;
  }
`