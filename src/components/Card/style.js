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
  align-items: center;
  flex-direction: column;
`;

export const TypesContainer = styled.div`
  
`