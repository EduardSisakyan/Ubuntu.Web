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

export interface IPaginationViewModel<T> {
  readonly pageCount: number;
  readonly itemCount: number;
  data: T[];
}

export interface IGetViaPaginationModel {
  count: number;
  page: number;
  dateFrom: string;
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
