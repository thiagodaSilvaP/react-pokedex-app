import ReactDOM from "react-dom";
import { Overlay, ModalContainer } from "./style";

export const Modal = ({ info, modalIsOpen, handleCloseModal }) => {
  if (!modalIsOpen) return null;
  console.log(info);
  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>
        <button onClick={handleCloseModal}>X</button>
        <h1>{info.name}</h1>
      </ModalContainer>
    </Overlay>,
    document.getElementById("pokemon-modal")
  );
};
