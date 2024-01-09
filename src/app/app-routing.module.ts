import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ListPokemonComponent } from "./pokemon/list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./pokemon/detail-pokemon/detail-pokemon.component";

const routes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent },
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
