import { Injectable } from '@angular/core';

import { Dispatcher }  from './dispatcher';
import { environment } from '../../../environments/environment';
import { IProfileDetailsModel } from 'app/platform/models';

@Injectable({
  providedIn: 'root',
})

export class Settings {

  private userToken: string;
  public defaultPath: string = 'home';
  public personDetails: IProfileDetailsModel;


  public get url(): string {
    return environment.hostUrl;
  }

  public get token(): string {
    if (!this.userToken) {
      if (localStorage.getItem('token')) {
        this.userToken = JSON.parse(localStorage.getItem('token'));
      } else {
        this.userToken = undefined;
      }
    }
    return this.userToken;
  }

  public set token(token: string | undefined) {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      this.userToken = token;
    } else {
      localStorage.removeItem('token');
      this.userToken = undefined;
    }
  }
}
