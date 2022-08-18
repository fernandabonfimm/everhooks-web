import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9200",
});

export default api;