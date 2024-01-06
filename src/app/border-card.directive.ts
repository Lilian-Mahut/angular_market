import { Directive, ElementRef, Host, HostListener } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder("#cecacaaa");
    this.setBackgroundColor("#ede9c4");
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder("#009688");
    this.setBackgroundColor("#f7f4e0");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#cecacaaa");
    this.setBackgroundColor("#ede9c4");
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
  setBackgroundColor(color: string) {
    this.el.nativeElement.style.background = `${color}`;
  }
}
