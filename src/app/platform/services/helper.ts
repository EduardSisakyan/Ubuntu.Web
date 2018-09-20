import { Router }     from '@angular/router';
import { Injectable } from '@angular/core';

import { IToasterModel } from '../models';
import { Dispatcher }    from './dispatcher';

@Injectable({
  providedIn: 'root',
})

export class AppHelper {

  constructor(
    private router: Router,
    private dispatcher: Dispatcher,
  ) {}

  public getCookieStatus = (event?: any): boolean => {
    if (!navigator.cookieEnabled) {
      if (event.url.search('sign-in') === -1) {
        this.router.navigate(['sign-in']);
      } else alert('Please enable your cookie');
      return false;
    }
    return true;
  }

  public getFileName = (text: string): string => {
    let newText: string[] | string = text.split('/');
    if (newText.length === 1) return text;
    newText = newText[newText.length - 1].split('-');

    let format: string[] | string = newText[newText.length - 1].split('.');
    newText.splice(newText.length - 1, 1);
    newText = newText.join();
    format = format[format.length - 1];
    newText += `.${format}`;

    return newText;
  }

  public textEllipsis = (text: string): string => {
    const count = window.innerWidth / 5;
    let newText: string = text.slice(0, count);
    if (newText < text) newText += '...';
    return newText;
  }

  public changeToISOString = (date): any => {
    const tzoffset = (new Date(date)).getTimezoneOffset() * 60000;
    const localISOTime = (new Date(new Date(date).getTime() - tzoffset)).toISOString().slice(0, -1);
    return localISOTime;
  }

  public showNotification = (status: number, text: string): void => {
    const TOASTER: IToasterModel = {
      status : status,
      text   : text,
    };
    this.dispatcher.toasterState = TOASTER;
  }
}
