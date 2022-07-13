import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = { bgColor: '', color: '' };

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(
      this.appHighlight.bgColor || 'yellow',
      this.appHighlight.color || 'black'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }

  highlight(color: string, fontColor?: string) {
    this.element.nativeElement.style.backgroundColor = color;
    this.element.nativeElement.style.color = fontColor;
  }
}
