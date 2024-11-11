import type { apiNames } from "~/api";
import api from "~/api";
import type { initialFiltersItem } from "./useFilter";
import uniqueId from "lodash/uniqueId";

// const name = {
// login: () => {},
// };

interface iUseApi {
  // name: `${keyof typeof users}`;
  // ${keyof apiNames}.
  apiName: apiNames;
  apiMethod: "get" | "getAll";
  params?: object;
  filters?: globalThis.Ref<initialFiltersItem>;
  //   unwatchedFilters = {},
  requestParams?: any;
  //   callback = null,
  init?: boolean;
  afterCallback?: Function;
  headers?: HeadersInit;
  //   initialValue = null,
  afterInit?: Function;
  popup?: boolean;
  withCache?: boolean;
  cacheDataLimit?: number;
}

export default async <T>({
  apiName,
  apiMethod,
  params = {},
  filters,
  //   unwatchedFilters = {},
  requestParams = {},
  //   callback = null,
  init = false,
  afterCallback = () => {},
  headers = {},
  //   initialValue = null,
  afterInit = () => {},
  popup = true,
  withCache = false,
  cacheDataLimit = 20,
}: iUseApi) => {
  const id = uniqueId();
  const data = useState<T | null>(`data-${id}`, () => null);
  const isLoading = useState<boolean | null>(`loading-${id}`, () => null);
  const error = useState(`error-${id}`, () => false);
  const meta = useState(`meta-${id}`, () => []);
  const cache = useState<
    {
      params: string;
      data: T;
      // meta: any;
    }[]
  >(`cache-${id}`, () => []);

  const get = async (
    rParams: object = {},
    filter: object = {}
  ): Promise<void> => {
    try {
      const preParams = {
        ...requestParams,
        ...rParams,
        params: {
          ...params,
          // ...unwatchedFilters.value,
          ...filters?.value,
          ...filter,
          // signal: signal.value,
        },
      } as { headers?: any; params: any };
      if (headers) {
        preParams.headers = headers;
      }

      if (withCache) {
        const cacheValue = cache.value.find(
          (item) => item.params === JSON.stringify(preParams)
        );

        if (cacheValue) {
          data.value = cacheValue.data;
          // meta.value = cacheValue.meta;
          return;
        }
      }

      if (isLoading.value === false) return;
      isLoading.value = false;

      await api?.[apiName]?.[apiMethod]?.(preParams, headers)?.then(
        async (res: any) => {
          // const { data: dataLocal, ...other } = res;
          const dataLocal = res;
          // const { data: dataLocal, ...other } = res;

          // data.value = dataLocal ?? res;
          data.value = res;
          // meta.value = other;

          if (withCache) {
            cache.value = [
              ...cache.value,
              {
                params: JSON.stringify(preParams),
                data: dataLocal,
                // meta: other,
              },
            ];
          }
        }
      );

      isLoading.value = true;
    } catch (e) {
      console.error(e);
      isLoading.value = false;
    }
  };

  if (withCache) {
    watch(
      () => cache.value.length,
      (nV) => {
        if (nV > cacheDataLimit) {
          cache.value = cache.value.slice(nV - cacheDataLimit);
        }
      }
    );
  }

  onMounted(() => {
    if (isReactive(filters?.value)) {
      watch(
        [() => filters?.value],
        async () => {
          await get({}, { ...params, ...filters?.value });
        },
        { deep: true }
      );
    }
  });

  if (init) {
    onMounted(async () => {
      await get({}, { ...params, ...filters?.value });
    });
  }

  return {
    data,
    isLoading,
    error,
    meta,
    get,
  };
};
