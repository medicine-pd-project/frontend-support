import type { IMessageView } from "./message";

export enum ChatTypeEnum {
  OPEN = "OPEN",
  IN_WORK = "IN_WORK",
  CLOSE = "CLOSE",
}

export type ChatType = keyof typeof ChatTypeEnum;

export interface IChatView {
  id: number;
  messages?: IMessageView[];
  creatorBy: string;
  createdAt: number;
  status: keyof typeof ChatTypeEnum;
}
