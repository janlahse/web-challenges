import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${pageOffset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [pageOffset]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setPageOffset(pageOffset - 20)}
        disabled={pageOffset == 0 && true}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setPageOffset(pageOffset + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
