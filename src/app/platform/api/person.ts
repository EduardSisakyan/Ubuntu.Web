import { Injectable } from '@angular/core';

import { Connection } from '../services/connection';

import { IObservable } from '../models';
import { IProfileDetailsResModel } from 'app/platform/models/api/person';

@Injectable({
  providedIn: 'root',
})

export class PersonService {

  constructor(
    private connection: Connection,
  ) { }

  public getProfileDetails = (): IObservable<IProfileDetailsResModel> => {
    return this.connection.request({
      url    : 'Person/ProfileDetails',
      method : 'Get',
    });
  }
}
