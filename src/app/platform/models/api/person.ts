import { RoleEnum } from 'app/platform/enums';

export interface IProfileDetailsResModel {
  username: string;
  role: RoleEnum;
  updatedDt: Date;
  createdDt: Date;
}
