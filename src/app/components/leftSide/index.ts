import { Component } from '@angular/core';

import { Services }            from './services';
import { IMenuItemViewModel }  from './models';
import { Login } from 'app/platform/services/guards/login';

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
    private login: Login,
  ) {}

  public logOut = () => this.login.loggedOut();

  public changeItemIsOpenState = (item: IMenuItemViewModel): void => {
    item.isOpen = !item.isOpen;
  }
}
