import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder("#cecacaaa");
    this.setBackgroundColor("#ede9c4");
    this.setTransform("scale(1)");
  }
  @Input("pkmnBorderCard") borderColor: string;
  @Input("pkmnBbgColor") backgroundColor: string;
  @Input("pkmnTranformScale") transformScale: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || "#009688");
    this.setBackgroundColor(this.backgroundColor || "#f7f4e0");
    this.setTransform(this.transformScale || "scale(1.07)");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#cecacaaa");
    this.setBackgroundColor("#ede9c4");
    this.setTransform("scale(1)");
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
  setBackgroundColor(color: string) {
    this.el.nativeElement.style.background = `${color}`;
  }
  setTransform(scale: string) {
    this.el.nativeElement.style.transform = `${scale}`;
  }
}
