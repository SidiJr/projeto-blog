import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const UPLOADS_URL = `${api.defaults.baseURL}uploads/`;

export default api;
