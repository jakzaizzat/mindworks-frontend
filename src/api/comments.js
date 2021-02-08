import axios, { getData } from "../lib/axios";

export function getComments(postId) {
  return axios.get(`/comments?postId=${postId}`).then(getData);
}
