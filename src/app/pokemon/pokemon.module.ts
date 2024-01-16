import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { RouterModule, Routes } from "@angular/router";
import { BackgroundCardDirective } from "./background-card.directive";
import { PokemonService } from "./pokemon.service";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    BackgroundCardDirective,
    DetailPokemonComponent,
    ListPokemonComponent,
    PokemonFormComponent,
    PokemonTypeColorPipe,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
