import useFetcher from "../../utils/fetch";
import type { apiMethods } from "../index";

export default <apiMethods>{
  get: async ({ id, params }) => useFetcher().get(`/Category/${id}`, params),
  // delete: async ({ id, params }) => useFetcher().delete(`/Category/${id}`, params),
  // update: async ({ id, data, params }) =>
  //   useFetcher().patch(`/Category/${id}`, data, params),
  getAll: async (
    {
      params,
      type = "",
    }: {
      params?: any;
      type: "Period" | "";
    },
    headers?: any
  ) => useFetcher().get(`/Category${type ? "/" + type : ""}`, params, headers),
  //   create: async ({ data }) => useFetcher().post(`/Category`, data),
};
