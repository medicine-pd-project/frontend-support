import { useToast } from "vue-toastification";
import isObject from "lodash/isObject";
import last from "lodash/last";

const toast = useToast();

export const warningPopup = (message: string = "Упс, что-то пошло не так!") => {
  try {
    toast.error(message, {
      timeout: 2000,
    });
  } catch (error) {
    console.error("warningPopup", error);
  }
};

export function getErrorData(error: any, aborted?: any) {
  try {
    if (aborted) {
      return;
    }
    let errorMessage = `${
      error?.data?.errors?.message ??
      error?.message ??
      `Что то пошло не так: ${error}`
    }`;

    if (error?.data?.errors?.messages) {
      for (let message in error?.data?.errors?.messages) {
        errorMessage += ": " + error?.data?.errors?.messages[message];
      }
    }

    if (isObject(error?.data?.errors)) {
      for (let message in error?.data?.errors) {
        errorMessage += ": " + error?.data?.errors[message];
      }
    }

    const popup = () => {
      toast.error(errorMessage, {
        timeout: 2000,
      });
    };

    return {
      error: true,
      isError: true,
      message: errorMessage,
      errorResponse: error,
      popup: popup,
    };
  } catch (error) {
    console.error("notify", error);
  }
}

// type notifyType =
//   // | string
//   | {
//       data?: {
//         errors?: {
//           message?: string;
//         };
//       };
//       message?: string
//     };

export const notify = (error: string) => {
  try {
    // let errorMessage = `${
    //   error?.data?.errors?.message ??
    //   error?.message ??
    //   `Что то пошло не так: ${error}`
    // }`;
    // if (error?.data?.errors?.messages) {
    //   for (let message in error?.data?.errors?.messages) {
    //     errorMessage += ": " + error?.data?.errors?.messages[message];
    //   }
    // }
    // toast.error(errorMessage);
    toast.error(error);
  } catch (error) {
    console.error("notify", error);
  }
};

export const success = (message: string = "Данные успешно сохранены") => {
  try {
    toast.success(message, {
      timeout: 2000,
    });
  } catch (error) {
    console.error(error);
  }
};

export const convertValuesToString = (obj: object) => {
  const result: Record<string, string> = {};

  Object.keys(obj).forEach((k) => {
    result[k] = String(obj[k as keyof typeof obj]);
  });

  return result;
};

// type checkSavedResp = {
//   errors?: any[];
//   error?: string;
//   message?: string;
// };

// export const checkSaved = (
//   resp: checkSavedResp | checkSavedResp[],
//   callback?: Function,
//   message = null,
//   errorCallback?: Function
// ) => {
//   try {
//     if (
//       resp?.errors ||
//       resp?.error ||
//       (resp?.length && (resp?.[0]?.error || resp?.[0]?.errors))
//     ) {
//       if (errorCallback) {
//         errorCallback(resp);
//       }
//       notify(resp);
//     } else {
//       success(resp?.message ?? message ?? "Данные успешно сохранены");
//       typeof callback == "function" ? callback(resp) : null;
//     }
//   } catch (error) {
//     console.error("checkSaved", error);
//   }
// };

// function declination(number, titles = [" год", " года", " лет"]) {
//   const cases = [2, 0, 1, 1, 1, 2];
//   return titles[
//     number % 100 > 4 && number % 100 < 20
//       ? 2
//       : cases[number % 10 < 5 ? number % 10 : 5]
//   ];
// }

export const getTgNick = (nickname: string) => "@" + last(nickname?.split(" "));
