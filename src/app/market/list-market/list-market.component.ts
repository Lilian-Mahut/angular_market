import { Component, OnInit } from "@angular/core";
import { Market } from "../market";
import { Router } from "@angular/router";
import { MarketService } from "../market.service";

@Component({
  selector: "app-list-market",
  templateUrl: "./list-market.component.html",
  styles: [".link { cursor: pointer;}"],
})
export class ListMarketComponent implements OnInit {
  marketList: Market[];

  constructor(private router: Router, private marketService: MarketService) {}

  ngOnInit() {
    this.marketList = this.marketService.getMarketList();
  }

  goToMarket(market: Market) {
    this.router.navigate(["/market", market.id]);
  }
}
