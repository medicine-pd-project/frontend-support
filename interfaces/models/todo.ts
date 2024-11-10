import type { IUserBelongWithDateModel } from "../utils/userBelong";
import type { ICategoryView, TypeCategory } from "./category";

export interface ITodoView extends IUserBelongWithDateModel {
  id: number;
  title: string;
  description?: string;
  sum: number;
  date: Date;
  categoryId: number;
  category: ICategoryView | null;
}

export interface ITodoPeriodView extends ITodoView {
  total: number;
}

export interface ITodoMutation {
  Type: TypeCategory;
  Title?: string | null;
  Description?: string | null;
  Sum: string | null;
  Date: any;
  CategoryId: number | null;
  Img?: any;
}