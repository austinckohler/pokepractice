import React, { Component } from "react";
import "./App.css";
import PokemonContainer from "./PokemonContainer";

export class App extends Component {
  state = {
    pokemon: [],
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((pokemon) => this.setState({ pokemon: pokemon.results }));

    // this.setState({ pokemon }));
  }

  render() {
    return (
      <div className="app">
        <PokemonContainer pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
