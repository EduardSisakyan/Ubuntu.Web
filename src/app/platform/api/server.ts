import { Injectable } from '@angular/core';

import { Connection } from '../services/connection';

import { IObservable } from '../models';
import {
  IGetServersBodyModel,
  ICreateServerBodyModel,
  IGetServersResModel,
} from 'app/platform/models/api/server';

@Injectable({
  providedIn: 'root',
})

export class ServerService {

  constructor(
    private connection: Connection,
  ) { }

  public getList = (body: IGetServersBodyModel): IObservable<IGetServersResModel> => {
    return this.connection.request({
      url    : 'Server/GetList',
      method : 'Post',
      data   : body,
    });
  }

  public create = (body: ICreateServerBodyModel): IObservable => {
    return this.connection.request({
      url    : 'Server/Create',
      method : 'Post',
      data   : body,
    });
  }
}
