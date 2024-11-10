import moment from "moment";

export const isCurrentYear = (date: Date | number | string) =>
  new Date().getFullYear() === new Date(date).getFullYear();

export const dateTimeUsabilityFormat = (date: Date | number | string) =>
  moment(date).format("DD " + (isCurrentYear(date) ? "MMMM" : "MM YY"));

export const convertToMilliseconds = (seconds: number) => seconds * 1000;
