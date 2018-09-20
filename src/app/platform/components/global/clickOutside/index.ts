import { Component, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector    : 'click-outside',
  templateUrl : './index.html',
})
export class ClickOutSide {
  @Output() clickOutside = new EventEmitter();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
          this.clickOutside.emit();
      }
  }
}
