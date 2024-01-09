import { Component, OnInit, TemplateRef } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";
import { NgIfContext } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: false,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  monPokemon: TemplateRef<NgIfContext<Pokemon | undefined>> | null;
  aucunPokemon: TemplateRef<NgIfContext<Pokemon | undefined>> | null;

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      this.pokemonSelected = pokemon;
    } else {
      this.pokemonSelected = pokemon;
    }
  }
}
