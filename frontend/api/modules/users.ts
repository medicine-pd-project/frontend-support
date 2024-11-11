import useFetcher from "../../utils/fetch";
import type { apiMethods } from "../index";

export default <apiMethods>{
  get: async ({ id, params }) => useFetcher().get(`/users/${id}`, params),
  // delete: async ({ id, params }) => useFetcher().delete(`/users/${id}`, params),
  // update: async ({ id, data, params }) =>
  //   useFetcher().patch(`/users/${id}`, data, params),
  getAll: async ({ params }, headers?: any) =>
    useFetcher().get(`/users`, params, headers),
  create: async ({ data }) => useFetcher().post(`/users`, data),
};
