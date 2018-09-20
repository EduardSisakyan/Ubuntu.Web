import { Injectable } from '@angular/core';

import { Connection } from '../services/connection';

import { IObservable } from '../models';
import {
  ILoginBodyViewModel,
  ILoginResponseViewModel,
} from '../models/api/token';

@Injectable({
  providedIn: 'root',
})

export class TokenService {

  constructor(
    private connection: Connection,
  ) { }

  public login = (data: ILoginBodyViewModel): IObservable<ILoginResponseViewModel> => {
    return this.connection.request({
      url    : 'Token/Login',
      method : 'Post',
      data   : data,
    });
  }
}
