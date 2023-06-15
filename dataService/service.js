import axios from "axios";
import { apiConfig } from "~/configurations/apiConfig";

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
