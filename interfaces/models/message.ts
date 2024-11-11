export enum MessageTypeEnum {
  IN = "IN",
  OUT = "OUT",
}
export interface IMessageView {
  id: number;
  chatId: number;
  createdBy: string;
  createdAt: number;
  text: string;
  type: keyof typeof MessageTypeEnum;
}
