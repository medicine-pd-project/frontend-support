import type { NitroFetchOptions, NitroFetchRequest } from "nitropack";
import { getErrorData } from "./base";

type bodyType = Record<string, any> | null | undefined;

interface IInitialParams {
  baseURL: string;
  headers: {
    Authorization?: string;
  };
}

interface IGetParams extends NitroFetchOptions<string, "get"> {
  signal?: AbortSignal | null | undefined;
}

export default function useFetcher() {
  const token = useCookie("accessToken", { maxAge: 60 * 60 * 24 * 7 }).value;
  const config = useRuntimeConfig();
  const baseUrl = config.public.API_URL;

  const initialParams = {
    baseURL: baseUrl,
    headers: {},
  } as IInitialParams;

  if (token && token !== "") {
    initialParams.headers.Authorization = `Bearer ${token}`;
  }

  const apiFetch = $fetch.create(initialParams);

  return {
    get: async (url: string, params: IGetParams = {}, headers = {}) => {
      let signal = params?.signal;
      delete params?.signal;
      let opts = {
        signal,
        method: "GET",
        params,
        headers: { ...initialParams?.headers, ...headers },
      } as NitroFetchOptions<string, "get">;

      return await apiFetch(url, opts)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return getErrorData(error, signal?.aborted)?.popup();
        });
    },
    post: async (
      url: string,
      body: bodyType,
      config = {} as NitroFetchOptions<string, "post">
    ) => {
      const headers = {
        ...initialParams?.headers,
        ...config?.headers,
      };

      const conf = {
        ...config,
        headers,
      };

      return await apiFetch(url, { method: "POST", body, ...conf })
        .then(async (res) => {
          if (res instanceof Blob) {
            return JSON.parse(await res.text());
          }
          return res;
        })
        .catch((error) => {
          let res = getErrorData(error);
          // res?.popup();
          return res;
        });
    },
    patch: async (url: string, body: bodyType, config = {}) => {
      return await apiFetch(url, { method: "PATCH", body, ...config })
        .then((res) => {
          return res;
        })
        .catch((error) => {
          let res = getErrorData(error);
          // res?.popup();
          return res;
        });
    },
    put: async (url: string, body: bodyType, config = {}) => {
      return await apiFetch(url, { method: "PUT", body, ...config })
        .then((res) => {
          return res;
        })
        .catch((error) => {
          let res = getErrorData(error);
          // res?.popup();
          return res;
        });
    },
    delete: async (url: string, config = {}) => {
      return await apiFetch(url, { method: "DELETE", ...config })
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return getErrorData(error);
        });
    },
  };
}
