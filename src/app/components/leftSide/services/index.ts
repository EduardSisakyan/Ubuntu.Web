import { Injectable } from '@angular/core';

import { IMenuItemViewModel } from '../models';

@Injectable()

export class Services {
  public menuItems: IMenuItemViewModel[] = [
    {
      name: 'servers',
      path: 'servers',
      icon: 'icon-operators',
    },
  ];
}
