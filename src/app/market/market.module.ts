import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MarketTypeColorPipe } from "./market-type-color.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { DetailMarketComponent } from "./detail-market/detail-market.component";
import { ListMarketComponent } from "./list-market/list-market.component";
import { RouterModule, Routes } from "@angular/router";
import { BackgroundCardDirective } from "./background-card.directive";
import { MarketService } from "./market.service";
import { MarketFormComponent } from "./form-market/form-market.component";

const marketRoutes: Routes = [
  { path: "markets", component: ListMarketComponent },
  { path: "market/:id", component: DetailMarketComponent },
  { path: "market/edit/:id", component: MarketFormComponent },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    BackgroundCardDirective,
    DetailMarketComponent,
    ListMarketComponent,
    MarketFormComponent,
    MarketTypeColorPipe,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(marketRoutes)],
  providers: [MarketService],
})
export class MarketModule {}
