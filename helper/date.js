export const toLongDate = (date) => {
  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let d = new Date(date);
  return d.toLocaleDateString("en-GB", dateOptions);
};

export const toShortDate = (date) => {
  var dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let d = new Date(date);
  return d.toLocaleDateString("en-GB", dateOptions);
};
