import { IPost } from "@/interfaces/post.interface";
import axios from "axios";

const API_URI = "https://jsonplaceholder.typicode.com";
axios.defaults.baseURL = API_URI;

export const PostService = {
  async getAll() {
    const { data } = await axios.get<IPost[]>("/posts");
    return data;
  },

  async getSinglePost(id: string) {
    const { data } = await axios.get<IPost[]>("/posts", {
      params: {
        id,
      },
    });
    return data[0];
  },
};
