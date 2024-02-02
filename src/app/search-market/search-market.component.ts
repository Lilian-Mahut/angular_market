import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-market",
  template: `
    <a>
      <i class="material-icons click-to-toggle" (click)="openSearch()"
        >search</i
      >
    </a>
  `,
  styles: ``,
})
export class SearchMarketComponent {
  openSearch() {}
}
