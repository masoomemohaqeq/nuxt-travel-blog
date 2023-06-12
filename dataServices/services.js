import axios from "axios";
import apiConfig from "~/configurations/apiConfig";

class Services {
  constructor(controller) {
    this.controller = controller;
  }

  async get(paging) {
    return axios.post(apiConfig, paging);
  }

  async getAll() {
    return axios.get(apiConfig);
  }

  async get(id) {
    return axios.get(`${apiConfig}/${id}`);
  }

  async create(data) {
    return axios.post(apiConfig, data);
  }

  async update(data) {
    return axios.put(apiConfig, data);
  }

  async delete(id) {
    return axios.delete(`${apiConfig}/${id}`);
  }
}
