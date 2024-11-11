import type { RouteLocationRaw } from "vue-router";
import api from "~/api";
// import { NavigateToOptions } from "vue-router";
import auth from "~/api/auth";

export interface IUser {
  id?: number;
  name: string;
}

interface IUserserGenerateToken {
  user: IUser;
  token: string;
}

const defaultUser: IUser = {
  name: "Admin",
};

export default async () => {
  const accessToken = useCookie<string | null>("accessToken", {
    maxAge: 60 * 60 * 24 * 7,
  });
  const user = useState<IUser | null>("user", () => null);

  const setUser = (resp: IUserserGenerateToken) => {
    user.value = resp?.user ?? defaultUser;
    accessToken.value = resp?.token;
  };

  const login = async (data: any, isRedirect = true) => {
    try {
      const resp = await auth.login(data);

      if (resp?.error) {
        return resp?.errorResponse?.data;
      }

      setUser(resp);

      if (isRedirect) {
        navigateTo({ name: "chats" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (data: any, isRedirect = true) => {
    try {
      const resp = await auth.register(data);
      // if (resp?.error) resp?.popup();
      if (resp?.error) {
        return resp?.errorResponse?.data;
      }

      setUser(resp);
      if (isRedirect) {
        navigateTo({ name: "index" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    try {
      // await auth
      // .me(
      //   //   {
      //   //     // extends:
      //   //     //   "contacts,country,image,flat_owners.user,alert,collection_relats.collection",
      //   //   },
      //   {},
      //   { Authorization: `Bearer ${accessToken.value}` }
      // )
      // .then((resp) => {
      //   if (!resp?.error && resp) {
      //     user.value = resp;
      //   }
      // });
      // const
      await api.chats.getAll?.({ params: { chatIds: [1] } });
      user.value = defaultUser;
    } catch (error) {
      console.error(error);
      user.value = null;
      accessToken.value = null;
    }
  };

  const logout = (
    params?: RouteLocationRaw | null | undefined
    // options?: NavigateToOptions | undefined
  ) => {
    accessToken.value = null;
    user.value = null;

    if (params) {
      navigateTo(params);
    } else {
      navigateTo("/login");
    }
  };

  // if (accessToken.value && !user.value) {
  //   await getUser();
  // }

  return {
    accessToken,
    user,
    login,
    register,
    getUser,
    logout,
  };
};
