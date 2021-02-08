import { format, parseISO } from "date-fns";

export const toMonthDayYearDate = (date) =>
  format(parseISO(date), "MM/dd/yyyy");
