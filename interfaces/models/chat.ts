import type { IMessageView } from "./message";

export type IChatType = "OPEN" | "IN_WORK" | "CLOSE";

export interface IChatView {
  id: number;
  messages?: IMessageView[];
  creatorBy: string;
  createdAt: number;
  status: IChatType;
}
