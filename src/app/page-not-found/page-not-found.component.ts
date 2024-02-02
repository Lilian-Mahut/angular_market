import { Component } from "@angular/core";

@Component({
  selector: "page-404",
  template: `
    <div class="center">
      <img
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
        alt=""
      />
      <h1>Hey, cette page n'existe pas !</h1>
      <a
        routerLink="/pokemons"
        class="waves-effect waves-teal btn orange darken-2 link"
      >
        Retourner à l'accueil
      </a>
    </div>
  `,
  styles: [".link { cursor: pointer;}"],
})
export class PageNotFoundComponent {}
