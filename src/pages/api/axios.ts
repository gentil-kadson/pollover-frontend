import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.116.235:3000",
});

export default api;
