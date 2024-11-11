import useFetcher from "../../utils/fetch";

export interface IChatsMethods {
  getAll: ({ params }: { params: any }) => Promise<any>;
  close: ({ chatId, params }: { chatId: number; params?: any }) => Promise<any>;
}

export default <IChatsMethods>{
  getAll: async ({ params }, headers?: any) =>
    useFetcher().post(`/chat/get`, params, headers),
  close: async ({ chatId, params }) =>
    useFetcher().post(`/chat/close?chatId=${chatId}`, params),
};
