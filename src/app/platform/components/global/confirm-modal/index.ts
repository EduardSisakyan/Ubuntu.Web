import { Component, Input, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector    : 'confirm-modal',
  templateUrl : './index.html',
  styleUrls   : ['./index.scss'],
})
export class ConfirmModal {

  @Input() isOpen: boolean;
  @Input() text: string = 'Are you sure you want to delete?';
  @Output() close: EventEmitter<undefined> = new EventEmitter();
  @Output() confirm: EventEmitter<undefined> = new EventEmitter();


  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      if (this.isOpen && event.keyCode === 27) {
        this.close.emit();
      }
    }
}
