import { Injectable }          from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Settings }   from '../settings';
import { Dispatcher } from '../dispatcher';

@Injectable({
  providedIn: 'root',
})

export class Login implements CanActivate {

  public state: boolean;

  constructor(
    private dispatcher: Dispatcher,
    private settings: Settings,
    private router: Router,
  ) {
    this.dispatcher.login.subscribe(state => {
      this.state = state;
    });
  }

  public loggedIn = () => {
    this.dispatcher.loginState = true;
  }

  public loggedOut = () => {
    localStorage.removeItem('mu_token');
    this.settings.token = undefined;
    this.dispatcher.loginState = false;
    this.router.navigate(['sign-in']);
  }

  canActivate() {
    // access activating the module only if
    // the user is logged in
    return this.state;
  }
}
