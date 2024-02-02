import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Market } from "../market";
import { MarketService } from "../market.service";

@Component({
  selector: "app-market-form",
  templateUrl: "./form-market.component.html",
  styleUrls: ["./market-form.component.css"],
})
export class MarketFormComponent implements OnInit {
  @Input() market: Market;
  types: string[];
  isAddForm: boolean;

  constructor(private marketService: MarketService, private router: Router) {}

  ngOnInit() {
    this.types = this.marketService.getMarketTypeList();
    this.isAddForm = this.router.url.includes("add");
  }

  hasType(type: string): boolean {
    return this.market.types.includes(type);
  }

  isTypesValid(type: string): boolean {
    // pour empêcher de décocher le type actuel
    if (this.market.types.length == 1 && this.hasType(type)) {
      return false;
    }
    // pour empêcher de sélectionner un 4e type s'il y a déjà 3 types sélectionnés
    // et de lui laisser la possibilité de déselectionner un des 3 types choisis
    if (this.market.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.market.types.push(type);
    } else {
      const index = this.market.types.indexOf(type);
      this.market.types.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.marketService
        // .addMarket(this.market)
        // .subscribe((market: Market) =>
        //   this.router.navigate(["/market", market.id])
        // );
    } else {
      this.marketService
        // .updateMarket(this.market)
        // .subscribe(() => this.router.navigate(["/market", this.market.id]));
    }
  }
}
