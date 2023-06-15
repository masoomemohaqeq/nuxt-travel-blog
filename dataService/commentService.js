import { apiConfig } from "~/configurations/apiConfig";
import { Services } from "./service";
import axios from "axios";

export class CommentService extends Services {
  constructor() {
    super("comments");
  }

  async getPostComments(postId) {
    return axios.get(`${apiConfig.url}/comments?postId=${postId}`);
  }
}
