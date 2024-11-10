import todos from "./modules/todos";
import users from "./modules/users";
import categories from "./modules/categories";

type apiNames = "categories" | "todos" | "users";

interface apiMethods {
  get?: ({ id, params }: { id: number | string; params?: any }) => Promise<any>;
  getAll?: ({ params }: { params: any }) => Promise<any>;
  create?: ({ data }: { data: any }) => Promise<any>;
  update?: ({
    id,
    data,
    params,
  }: {
    id: number | string;
    data: any;
    params?: any;
  }) => Promise<any>;
  delete?: ({ id, params }: { id: number; params?: any }) => Promise<any>;
}

type typeApi = Record<apiNames, apiMethods>;

// Record<apiMethods, (...args: Array<any>) => Promise<any>>
// [_: apiMethods]: (...args: Array<any>) => Promise<any> | never;
const api: typeApi = {
  categories,
  todos,
  users,
};

export { api as default, type typeApi, type apiMethods };
