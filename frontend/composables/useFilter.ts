import uniqueId from "lodash/uniqueId";
import cloneDeep from "lodash/cloneDeep";
import debounce from "lodash/debounce";
import pickBy from "lodash/pickBy";

export type initialFiltersItem = Record<string, any>;

export interface useFilterArguments {
  initialFilters?: initialFiltersItem;
  withQueryParams?: boolean;
  withInitQueryParams?: boolean;
  debounceMs?: number;
}

export default <T>({
  initialFilters = {},
  withQueryParams = false,
  withInitQueryParams = false,
  debounceMs = 500,
}: useFilterArguments = {}) => {
  const id = uniqueId();
  const router = useRouter();
  const filters = useState<initialFiltersItem | T>(
    "filters-" + id,
    () => initialFilters
  );

  if (withInitQueryParams) {
    onMounted(() => {
      const params: initialFiltersItem = useRoute().query as initialFiltersItem;

      filters.value = {
        ...filters.value,
        ...params,
      };
    });
  }

  const resetFilterValues = () => {
    filters.value = {};

    if (withQueryParams) router.replace({ query: {} });
  };

  const urlSerachParams = computed((): string =>
    filters.value ? "?" + new URLSearchParams(filters.value).toString() : ""
  );

  watch(
    () => cloneDeep(filters.value),
    debounce((newVal: any) => {
      if (withQueryParams)
        router.replace({
          query: pickBy(
            newVal,
            (value: any) =>
              value !== "" && value !== null && value !== undefined
          ),
        });
    }, debounceMs)
  );

  return {
    filters,
    resetFilterValues,
    urlSerachParams,
  };
};
