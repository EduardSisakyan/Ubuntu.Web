import { Component, OnInit } from '@angular/core';

import { Dispatcher }                       from 'app/platform/services/dispatcher';
import { ToasterStatusEnum }                from 'app/platform/enums';
import { IToasterModel, IToasterViewModel } from 'app/platform/models';

@Component({
  selector    : 'app-toaster',
  templateUrl : './index.html',
  styleUrls   : ['./index.scss'],
})
export class Toaster implements OnInit {
  private id: number = 0;
  public elements: IToasterViewModel[] = [];

  public ToasterStatusEnum = ToasterStatusEnum;

  constructor(
    private dispatcher: Dispatcher,
  ) {}

  private pushNewItem = (value: IToasterModel): void => {
    const newItem: IToasterViewModel = {
      ...value,
      id: this.id,
      isActive: true,
      disableRemove: false,
    };
    this.id += 1;
    this.elements.push(newItem);
    this.startRemoveTimer(newItem);
  }

  private startRemoveTimer = (item: IToasterViewModel) => {
    setTimeout(() => {
      if (!item.disableRemove) {
        this.hideItem(item.id);
      }
    }, 4000);
  }

  private removeItem = (id: number): void => {
    this.elements = this.elements.filter(x => x.id !== id);
  }

  public hideItem = (id: number, event?: Event): void => {
    if (event) event.stopPropagation();
    this.elements.map(x => {
      if (x.id === id) x.isActive = false;
      return x;
    });
    setTimeout(() => this.removeItem(id), 500);
  }

  public disableRemove = (id: number) => {
    this.elements.map(x => {
      if (x.id === id) x.disableRemove = true;
      return x;
    });
  }

  ngOnInit(): void {
    this.dispatcher.toaster
      .subscribe((value: IToasterModel) => this.pushNewItem(value));
  }
}
