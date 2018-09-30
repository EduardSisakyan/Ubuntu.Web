import { IPagingBodyModel, IPagingResModel } from '../index';

export interface ICreateServerBodyModel {
  name: string;
  host: string;
  username: string;
  password: string;
}

export interface IGetServersBodyModel extends IPagingBodyModel {}
export interface IGetServersResModel extends IPagingResModel<IServersModel> {}
export interface IServersModel {
  name: string;
  username: string;
  host: string;
  updatedDt: Date;
  createdDt: Date;
}

