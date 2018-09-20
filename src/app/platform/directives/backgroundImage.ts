import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[bgImage]',
})

export class BackgroundImageDirective {

  @Input('bgImage') set url(path: string) {
    this.renderer.addClass(this.elementRef.nativeElement, 'G-background-image');
    if (path) {
      path = path.split(' ').join('%20');
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', `url("${path}")`);
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', 'url(app/platform/assets/images/person.png)');
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}
}
