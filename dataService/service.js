import axios from "axios";
import { apiConfig } from "~/configurations/apiConfig";

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     let errorMsg = "Sorry something went wrong.";
//     if (error.response) {
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);

//       errorMsg = "Sorry something went wrong. please try again";
//     } else if (error.request) {
//       console.log(error.request);

//       errorMsg = "Sorry something went wrong. sever error.";
//     } else {
//       console.log("Error", error.message);
//     }
//     console.log(error.config);

//     // throw new Error(errorMsg);
//     return Promise.reject(errorMsg);
//   }
// );

export class Services {
  constructor(controller) {
    this.controller = controller;
  }

  async get(paging) {
    return axios.post(`${apiConfig.url}/${this.controller}`, paging);
  }

  async getAll() {
    return axios.get(`${apiConfig.url}/${this.controller}`);
  }

  async getById(id) {
    return axios.get(`${`${apiConfig.url}/${this.controller}`}/${id}`);
  }

  async getBySlug(slug) {
    return axios.get(`${`${apiConfig.url}/${this.controller}`}/${slug}`);
  }

  async create(data) {
    return axios.post(`${apiConfig.url}/${this.controller}`, data);
  }

  async update(id, data) {
    return axios.put(`${apiConfig.url}/${this.controller}/${id}`, data);
  }

  async delete(id) {
    return axios.delete(`${`${apiConfig.url}/${this.controller}`}/${id}`);
  }
}
