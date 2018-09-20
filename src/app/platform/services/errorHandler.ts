import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';
import { Location }        from '@angular/common';
import { Observable, of }  from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Settings }   from './settings';
import { Dispatcher } from './dispatcher';
import { Login }      from './guards/login';

import { IToasterModel }     from 'app/platform/models';
import { ToasterStatusEnum } from 'app/platform/enums';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandler {

  constructor(
    private dispatcher: Dispatcher,
    private router: Router,
    private settings: Settings,
    private login: Login,
    private location: Location,
  ) { }

  public handleError = (error: any) => {
    const TOASTER: IToasterModel = {
      status : ToasterStatusEnum.error,
      text   : error.statusText,
    };
    switch (error.status) {
      case 401:
        this.login.loggedOut();
        break;
      case 403:
        TOASTER.status = ToasterStatusEnum.error;
        TOASTER.text = 'Sorry, but you don\'t have permission';
        this.location.back();
        break;
      case 500:
        TOASTER.status = ToasterStatusEnum.error;
        this.router.navigate([this.settings.defaultPath]);
        break;
      case 502:
        this.router.navigate([this.settings.defaultPath]);
        break;
      case 502.3:
        this.router.navigate([this.settings.defaultPath]);
        break;
      default:
        TOASTER.status = ToasterStatusEnum.error;
        TOASTER.text = error.statusText || 'Something went wrong';
        break;
    }
    this.dispatcher.toasterState = TOASTER;
  }

  public check = (data: Observable<any>, disableLoader?: boolean): Observable<any> => {
    return data
      .pipe(
        catchError((error): Observable<any> => {
          if (!disableLoader) {
            this.handleError(error);
            this.dispatcher.loadingState = false;
          }
          return of(undefined);
        }),
        map((results): Observable<any> => {
          if (!disableLoader) this.dispatcher.loadingState = false;
          if (results && results.ok) {
            const BODY = results._body && JSON.parse(results._body);
            if (BODY.success) {
              return of(BODY.data);
            } else {
              BODY.messages.forEach((message: any) => {
                if (message.value) {
                  const TOASTER: IToasterModel = {
                    status : ToasterStatusEnum.error,
                    text   : message.value,
                  };
                  this.dispatcher.toasterState = TOASTER;
                }
              });
              throw BODY;
            }
          }
          return of(undefined);
        })
      );
  }
}


