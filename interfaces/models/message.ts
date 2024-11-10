export type IMessageType = "IN" | "OUT";

export interface IMessageView {
  id: number;
  chatId: number;
  createdBy: string;
  createdAt: number;
  text: string;
  type: IMessageType;
  //   status: IChatType;
}
