import axios from "axios";

export const api = axios.create({
  baseURL: "https://everhook.herokuapp.com",
});

export default api;