import { useState, useEffect } from "react";
import CardComponent from "./components/cards.jsx";
import { ListItem, SimpleGrid } from "@chakra-ui/react";
function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  // if (!pokemons.length) return <p>CARGANDO...</p>;

  return (
    <div>
      <SimpleGrid columns={4} spacing={10}>
        {pokemons.map((pokemon) => (
          <CardComponent pokemon={pokemon} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default App;
