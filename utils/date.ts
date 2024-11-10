import moment from "moment";

export const getDate = (date: Date | string | number) =>
  moment(date).format("YYYY-MM-DD");
