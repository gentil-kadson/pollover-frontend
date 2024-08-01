import axios from "axios";

const api = axios.create({
  baseURL: "http://10.112.5.156:3000",
});

export default api;
