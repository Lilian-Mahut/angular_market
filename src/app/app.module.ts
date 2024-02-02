import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { MarketModule } from "./market/market.module";
import { SearchMarketComponent } from "./search-market/search-market.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SearchMarketComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, FormsModule, MarketModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
