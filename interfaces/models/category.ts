export enum EnumCategoryType {
  "Expenses",
  "Income",
}

export type TypeCategory = keyof typeof EnumCategoryType;

export interface ICategoryView {
  id: number;
  title: string;
  type: EnumCategoryType;
  iconUrl?: string;
  color: string;
}
