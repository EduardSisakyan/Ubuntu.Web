import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Dispatcher }   from 'app/platform/services/dispatcher';
import { TokenService } from 'app/platform/api/token';
import { Settings }     from 'app/platform/services/settings';
import { Login }        from 'app/platform/services/guards/login';

import { ILoginBodyViewModel, ILoginResponseViewModel } from 'app/platform/models/api/token';

@Component({
  templateUrl : '../view/index.html',
  styleUrls   : ['../styles/index.scss']
})

export class Controller implements OnInit {

  public id: number;
  public setPasswordModal: boolean = false;
  public form: FormGroup;
  public loginState: boolean;

  get email() { return this.form.get('email').value; }
  get password() { return this.form.get('password').value; }

  constructor(
    private tokenService: TokenService,
    private dispatcher: Dispatcher,
    private settings: Settings,
    private router: Router,
    private login: Login,
  ) {
    this.dispatcher.login.subscribe(state => this.loginState = state);
  }

  private handleData = (data: ILoginResponseViewModel): boolean => {
    if (data && data.accessToken) this.settings.token = `Bearer ${data.accessToken}`;
    return !!(data && data.accessToken);
  }

  public closeSetPasswordModal = () => this.setPasswordModal = false;
  public openSetPasswordModal = () => this.setPasswordModal = true;

  public submit = () => {
    if (this.form.valid) {
      const body: ILoginBodyViewModel = {
        login: this.email,
        password: this.password,
      };
      this.tokenService.login(body)
        .subscribe(
          (data) => {
            if (this.handleData(data.value)) {
              this.login.loggedIn();
              this.router.navigate([this.settings.defaultPath]);
            }
          },
          () => this.login.loggedOut(),
        );
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
