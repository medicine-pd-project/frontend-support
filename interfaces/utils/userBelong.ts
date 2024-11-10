import type { IDateModel } from "./dateModel";

export interface IUserBelong {
  userId: Number;
  user: any;
}

export interface IUserBelongWithDateModel extends IDateModel, IUserBelong {}
