import { CardContainer } from '../components/CardContainer';
import { Container } from './style';
import { Theme } from '../styles/GlobalStyles';

function App() {
  return (
    <Container>
      <Theme>
        <CardContainer />
      </Theme>
    </Container>
  )
}

export default App
