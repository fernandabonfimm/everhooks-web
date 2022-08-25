import axios from "axios";

export const api = axios.create({
  baseURL: "https://neweverhook.herokuapp.com",
});

export default api;