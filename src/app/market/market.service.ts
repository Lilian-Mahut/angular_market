import { Injectable } from "@angular/core";
import { Market } from "./market";
import { MARKETS } from "./mock-market-list";

@Injectable()
export class MarketService {
  getMarketList(): Market[] {
    return MARKETS;
  }

  getMarketById(marketId: number): Market | undefined {
    return MARKETS.find((market) => market.id == marketId);
  }

  getMarketTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
