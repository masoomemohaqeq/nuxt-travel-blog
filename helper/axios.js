import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    debugger;
    let errorMsg = "Sorry something went wrong.";
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      errorMsg = "Sorry something went wrong. please try again";
    } else if (error.request) {
      console.log(error.request);

      errorMsg = "Sorry something went wrong. sever error.";
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);

    // throw new Error(errorMsg);
    return Promise.reject(errorMsg);
  }
);
