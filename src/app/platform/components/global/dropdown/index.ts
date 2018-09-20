import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ISelectModel } from 'app/platform/models';

@Component({
  selector    : 'select-dropdown',
  templateUrl : './index.html',
  styleUrls   : ['./index.scss'],
})

export class Dropdown {
  @Output() evChange: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() list: ISelectModel[] = [];
  @Input() multiple: boolean;
  @Input() removeBtn: boolean;
  @Input() error: boolean;
  @Input() placeholder: string;
  @Input() get values(): any[] { return this._selectedItems || []; }
  @Input() get value(): any {
    return this._selectedValue;
  }

  private _selectedValue: any;
  private _selectedItems: any[];
  public isOpen: boolean;

  constructor() {}

  get selectedItem(): ISelectModel {
    return this.list.find(item => JSON.stringify(item.value) === JSON.stringify(this.value)) || null;
  }

  set value(val: any) {
    this.close();
    this._selectedValue = val;
    this.evChange.emit(this._selectedValue);
  }

  set values(val: any[]) {
    if (val) {
      this._selectedItems = val;
      this.evChange.emit(this._selectedItems);
    }
  }

  public change = (item: ISelectModel): void => {
    if (!this.multiple) {
      this.value = item.value;
    } else {
      if (!this.isSelected(item)) {
        this.values = [...this.values, item.value];
      } else {
        this.values = this.values.filter(el => el !== item.value);
      }
    }
  }

  public removeItem = (event: Event, id: number): void => {
    event.stopPropagation();
    this.remove.emit(id);
    this.list = this.list.filter(item => JSON.stringify(item.id) !== JSON.stringify(id));
  }

  public toggle = (): void => {
    if (this.list.length) {
      this.isOpen = !this.isOpen;
    }
  }
  public close = (): void => {
    if (this.isOpen) this.isOpen = false;
  }

  public isSelected = (item: ISelectModel): boolean => {
    if (!this.multiple) {
      return item.value === this.value;
    } else {
      return this.values.includes(item.value);
    }
  }
}
