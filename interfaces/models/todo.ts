import type { IUserBelongWithDateModel } from "../utils/userBelong";

export interface ITodoView extends IUserBelongWithDateModel {
  id: number;
  title: string;
  description?: string;
  sum: number;
  date: Date;
  categoryId: number;
}

export interface ITodoPeriodView extends ITodoView {
  total: number;
}

export interface ITodoMutation {
  Title?: string | null;
  Description?: string | null;
  Sum: string | null;
  Date: any;
  CategoryId: number | null;
  Img?: any;
}
