import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DetailPokemonComponent } from "./pokemon/detail-pokemon/detail-pokemon.component";
import { ListPokemonComponent } from "./pokemon/list-pokemon/list-pokemon.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";

import { SvgPokeballOpenComponent } from "./svg-pokeball-open/svg-pokeball-open.component";
import { SvgPokeballCloseComponent } from "./svg-pokeball-close/svg-pokeball-close.component";

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    DetailPokemonComponent,
    ListPokemonComponent,
    PokemonTypeColorPipe,
    SvgPokeballOpenComponent,
    SvgPokeballCloseComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
