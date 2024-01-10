import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { SvgPokeballCloseComponent } from "./pokemon/svg-pokeball-close/svg-pokeball-close.component";
import { PokemonModule } from "./pokemon/pokemon.module";

@NgModule({
  declarations: [
    AppComponent,
    SvgPokeballCloseComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, PokemonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
