import axios, { getData } from "../lib/axios";

export function getPosts() {
  return axios.get("/posts").then(getData);
}

export function getPost(id) {
  return axios.get(`/posts/${id}`).then(getData);
}
