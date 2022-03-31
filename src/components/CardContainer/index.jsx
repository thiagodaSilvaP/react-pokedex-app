import {Card} from '../Card/';
import {Container} from './style';

export const CardContainer = () => {
    const array = [1, 4, 5]
    return (
        <Container>
            {array.map(item => <Card key={item}/>)}
        </Container>
    )
}