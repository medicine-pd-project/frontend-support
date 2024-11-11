import useFetcher from "../../utils/fetch";

export interface IMessagesMethods {
  create: ({
    data,
  }: {
    data: { chatId: number; text: string };
  }) => Promise<any>;
}

export default <IMessagesMethods>{
  create: async ({ data }) => useFetcher().post(`/message/`, data),
};
