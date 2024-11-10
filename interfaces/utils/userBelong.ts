import type { IDateModel } from "./dateModel";

export interface IUserBelong {
  userId: number;
  user: any;
}

export interface IUserBelongWithDateModel extends IDateModel, IUserBelong {}
