import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[mktBorderCard]",
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder("#cecacaaa");
  }
  @Input("mktBorderCard") borderColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || "#009688");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#cecacaaa");
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
