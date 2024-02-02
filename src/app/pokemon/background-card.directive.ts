import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBackgroundCard]",
})
export class BackgroundCardDirective {
  constructor(private el: ElementRef) {
    this.setBackgroundColor("#ede9c4");
  }
  @Input("pkmnBbgColor") backgroundColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBackgroundColor(this.backgroundColor || "#f7f4e0");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBackgroundColor("#ede9c4");
  }
  setBackgroundColor(color: string) {
    this.el.nativeElement.style.background = `${color}`;
  }
}
