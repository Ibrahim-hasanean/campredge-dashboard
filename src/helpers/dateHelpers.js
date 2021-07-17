import { format } from "date-fns";

export const formatDate = (date, formatString = "yyyy-MM-dd") => {
  return format(new Date(date), formatString);
};
