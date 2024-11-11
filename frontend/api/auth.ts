import useFetcher from "../utils/fetch";

interface authMethods {
  login: (...args: Array<any>) => Promise<any>;
  register: (...args: Array<any>) => Promise<any>;
  logout: (...args: Array<any>) => Promise<any>;
  me: (...args: Array<any>) => Promise<any>;
}

export default <authMethods>{
  login: async (data) => useFetcher().post(`/auth/login`, data),
  register: async (data) => useFetcher().post(`/auth/register`, data),
  logout: async (data) => useFetcher().post(`/auth/logout`, data),
  me: async (params, headers) => useFetcher().get(`/auth/me`, params, headers),
};
