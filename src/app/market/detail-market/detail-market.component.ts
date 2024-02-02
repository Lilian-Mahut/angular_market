import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Market } from "../market";
import { MarketService } from "../market.service";

@Component({
  selector: "app-detail-market",
  templateUrl: "./detail-market.component.html",
})
export class DetailMarketComponent implements OnInit {
  market: Market | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marketService: MarketService
  ) {}

  ngOnInit() {
    const marketId: string | null = this.route.snapshot.paramMap.get("id");
    if (marketId) {
      this.market = this.marketService.getMarketById(+marketId);
    }
  }

  deleteMarket(market: Market) {}

  goToMarketList() {
    this.router.navigate(["/markets"]);
  }
  goToEditMarket(market: Market) {
    this.router.navigate(["/market/edit", market.id]);
  }
}
