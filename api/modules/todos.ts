import useFetcher from "../../utils/fetch";
import type { apiMethods } from "../index";

export default <apiMethods>{
  get: async ({ id, params }) => useFetcher().get(`/Todo/${id}`, params),
  delete: async ({ id, params }) => useFetcher().delete(`/Todo/${id}`, params),
  update: async ({ id, data, params }) =>
    useFetcher().patch(`/Todo/${id}`, data, params),
  getAll: async (
    {
      params,
      type = "",
    }: {
      params?: any;
      type: "Period" | "";
    },
    headers?: any
  ) => useFetcher().get(`/Todo${type ? "/" + type : ""}`, params, headers),
  create: async ({ data }) => useFetcher().post(`/Todo`, data),
};
