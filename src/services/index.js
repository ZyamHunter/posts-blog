import axios from "axios";

const baseURL = process.env.VUE_APP_baseURL;

const api = axios.create({
  baseURL,
  timeout: 20000,
});

export default api;
