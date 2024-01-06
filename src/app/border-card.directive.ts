import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder("#cecacaaa");
    this.setBackgroundColor("#ede9c4");
  }
  @Input("pkmnBorderCard") borderColor: string;
  @Input("pkmnBbgColor") backgroundColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || "#009688");
    this.setBackgroundColor(this.backgroundColor || "#f7f4e0");
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
