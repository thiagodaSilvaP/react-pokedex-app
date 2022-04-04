import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  background-color: #00000020;
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: 80%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bg_light};
`;
