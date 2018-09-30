import { Injectable } from '@angular/core';
import { Resolve } 		from '@angular/router';

import { ServerService } from 'app/platform/api/server';
import { IGetServersBodyModel } from 'app/platform/models/api/server';

@Injectable()
export class Resolver implements Resolve<any> {

  constructor(
    private serverService: ServerService,
  ) {}
  resolve() {
    const BODY: IGetServersBodyModel = {
      limit  : 20,
      offset : 0,
    };
    return this.serverService.getList(BODY);
  }
}
