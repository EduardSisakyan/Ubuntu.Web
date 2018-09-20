import { Component } from '@angular/core';

import { Services }            from './services';
import { IMenuItemViewModel }  from './models';

@Component({
  selector    : 'app-left-side',
  templateUrl : './view/index.html',
  styleUrls   : ['./styles/index.scss'],
  providers   : [ Services ]
})

export class AppLeftSide {

  public list: IMenuItemViewModel[] = this.services.menuItems;

  constructor(
    private services: Services,
  ) {}

  public changeItemIsOpenState = (item: IMenuItemViewModel): void => {
    item.isOpen = !item.isOpen;
  }
}
