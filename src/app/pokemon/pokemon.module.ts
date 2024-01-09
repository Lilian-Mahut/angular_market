import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { RouterModule, Routes } from "@angular/router";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    DetailPokemonComponent,
    ListPokemonComponent,
    PokemonTypeColorPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
})
export class PokemonModule {}
