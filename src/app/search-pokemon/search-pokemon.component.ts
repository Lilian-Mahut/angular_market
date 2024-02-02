import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-pokemon",
  template: `
    <a>
      <i class="material-icons click-to-toggle" (click)="openSearch()"
        >search</i
      >
    </a>
  `,
  styles: ``,
})
export class SearchPokemonComponent {
  openSearch() {}
}
