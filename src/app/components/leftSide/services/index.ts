import { Injectable } from '@angular/core';

import { IMenuItemViewModel } from '../models';

@Injectable()

export class Services {
  public menuItems: IMenuItemViewModel[] = [
    {
      name: 'users',
      path: 'users',
      icon: 'icon-users',
    },
  ];
}
