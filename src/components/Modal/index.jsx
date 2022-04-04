import ReactDOM from 'react-dom';
import {Container} from './style';

export const Modal = ({info, isModal}) => {
    if (!isModal) return null
    console.log(info);
    return ReactDOM.createPortal(
        <Container>
            <h1>{info.name}</h1>
        </Container>,
        document.getElementById('pokemon-modal')
    )
}