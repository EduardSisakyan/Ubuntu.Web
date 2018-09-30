import { Injectable }               from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { IToasterModel } from 'app/platform/models';

@Injectable({
  providedIn: 'root',
})

export class Dispatcher {

  //#region LOGIN

  private _login: boolean;

  public readonly login: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public set loginState(login: boolean) {
    if (this._login !== login) {
      this.login.next(login);
      this._login = login;
    }
  }

  //#endregion

  //#region LOADING

  private _loading: boolean;

  public readonly loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public set loadingState(state: boolean) {
    if (this._loading !== state) {
      this.loading.next(state);
      this._loading = state;
    }
  }

  //#endregion

  //#region TOASTER

  private _toaster: IToasterModel;

  public toaster: Subject<IToasterModel> = new Subject();

  public set toasterState(message: IToasterModel) {
    if (this._toaster !== message) {
      this.toaster.next(message);
      this._toaster = message;
    }
  }

  //#endregion
}
