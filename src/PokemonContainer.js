import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonContainer({ pokemon }) {
  const pokemonInfo = pokemon.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      pokemon={pokemon.name}
      pokemonImage={pokemon.url}
    />
  ));
  return (
    <>
      <ul className="card-container">{pokemonInfo}</ul>
    </>
  );
}

export default PokemonContainer;
