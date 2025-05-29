import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]'
})
export class HoverBorderDirective {
  @Input('appHoverBorder') borderColor: string = '#FF5100';
  private defaultBorder = '2px solid transparent';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'border', this.defaultBorder);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      `2px solid ${this.borderColor}`
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'translateY(-5px)'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      this.defaultBorder
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'none'
    );
  }
}
