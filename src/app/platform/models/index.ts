import { Observable } from 'rxjs';

export interface IRequestModel {
  url: string;
  method: string;
  data ?: any;
  headers ?: any;
  body ?: any;
}

export interface IObservable<T = any> extends Observable<IObservableResponse<T>> {}

export interface IObservableResponse<T> {
  readonly value: T;
}

export interface IPromiseResponse<T> {
  readonly promise: T;
}

export interface ISelectModel<T = any> {
  name: string;
  value: T;
  id?: number;
  default ?: boolean;
}

export interface IPagingResModel<T> {
  itemCount: number;
  pageCount: number;
  data: T[];
}

export interface IPagingBodyModel {
  limit: number;
  offset: number;
}

export interface IToasterModel {
  text: string;
  status: number;
}

export interface IToasterViewModel extends IToasterModel {
  id: number;
  isActive: boolean;
  disableRemove: boolean;
}

export interface IProfileDetailsModel {
  username: string;
  role: number;
  updatedDt: Date;
  createdDt: Date;
}
