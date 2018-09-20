import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';

import { Dispatcher } from '../dispatcher';
import { Settings }   from '../settings';

@Injectable({
  providedIn: 'root',
})

export class SignIn implements CanActivate {

  public state: boolean;

  constructor(
    private dispatcher: Dispatcher,
    private settings: Settings,
  ) {
    this.dispatcher.login.subscribe(state => {
      if (this.settings.token && state) {
        this.state = false;
      } else if (!this.settings.token) {
        this.state = true;
      }
    });
  }

  canActivate() {
    return this.state;
  }
}
