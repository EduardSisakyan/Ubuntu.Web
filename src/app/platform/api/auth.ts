import { Injectable } from '@angular/core';

import { Connection } from '../services/connection';

import { IObservable } from '../models';
import { ILoginBodyViewModel, ILoginResponseViewModel } from 'app/platform/models/api/auth';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(
    private connection: Connection,
  ) { }

  public login = (data: ILoginBodyViewModel): IObservable<ILoginResponseViewModel> => {
    return this.connection.request({
      url    : 'Auth/Login',
      method : 'Post',
      data   : data,
    });
  }
}
