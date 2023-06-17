export const axiosResponseHandler = (response) => {
  console.log("axiosResponseHandler");
  return response;
};

export const axiosErrorHandler = (error) => {
  console.log("axiosErrorHandler");

  let errorMsg = "Sorry something went wrong.";
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);

    errorMsg = "Sorry something went wrong. please try again";
    if (error.response.status === 404) {
      errorMsg = "Not Found";
    }
  } else if (error.request) {
    console.log(error.request);

    errorMsg = "Sorry something went wrong. sever error.";
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);

  return Promise.reject(errorMsg);
};
