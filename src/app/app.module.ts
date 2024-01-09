import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./pokemon/detail-pokemon/detail-pokemon.component";
import { ListPokemonComponent } from "./pokemon/list-pokemon/list-pokemon.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { SvgPokeballOpenComponent } from "./svg-pokeball-open/svg-pokeball-open.component";
import { SvgPokeballCloseComponent } from "./svg-pokeball-close/svg-pokeball-close.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

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
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
