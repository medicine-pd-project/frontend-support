import users from "./modules/users";
import chats from "./modules/chats";
import messages from "./modules/messages";

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

const api = {
  users,
  chats,
  messages,
};

type apiNames = keyof typeof api;

export { api as default, type apiNames, type apiMethods };
