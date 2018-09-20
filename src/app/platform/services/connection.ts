import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Headers,
  Http,
  RequestOptions,
  Request,
} from '@angular/http';

import { Dispatcher }    from './dispatcher';
import { Settings }      from './settings';
import { ErrorHandler }  from './errorHandler';
import { IRequestModel } from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class Connection {

  constructor(
    private http: Http,
    private settings: Settings,
    private errorHandler: ErrorHandler,
    private dispatcher: Dispatcher,
  ) { }

  public request = (details: IRequestModel, disableLoader?: boolean): Observable<any> => {
    if (!disableLoader) this.dispatcher.loadingState = true;
    const URL = `${this.settings.url}api/`;
    const TOKEN = this.settings.token;
    const HEADERS = new Headers();

    /* Change header */
    if (!details.headers) {
      HEADERS.append('Content-Type', 'application/json');
    }
    if (TOKEN) HEADERS.append('Authorization', TOKEN);

    const OPTIONS: IRequestModel = {
      url     : `${URL}${details.url}`,
      method  : details.method,
      headers : HEADERS
    };
    /* Change body */
    if (details.data) OPTIONS.body = details.data;
    const REQUEST_OPTIONS = new RequestOptions(OPTIONS);
    return this.errorHandler.check(this.http.request(new Request(REQUEST_OPTIONS)), disableLoader);
  }
}
