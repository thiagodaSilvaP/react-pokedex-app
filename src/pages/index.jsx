import { CardContainer } from "../components/CardContainer";
import { Container } from "./style";
import { Theme } from "../styles/GlobalStyles";
import { PokemonProvider } from "../contexts/PokemonsContext";

function App() {
  return (
    <Container>
      <PokemonProvider>
        <Theme>
          <CardContainer />
        </Theme>
      </PokemonProvider>
    </Container>
  );
}

export default App;
