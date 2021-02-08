import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API;

const request = axios.create({
  baseURL: API_BASE_URL,
});

export function getData(response) {
  return response.data;
}

export default request;
