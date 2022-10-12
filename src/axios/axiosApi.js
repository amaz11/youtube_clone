import axios from "axios";

const apibase = axios.create({
  baseURL: "http://localhost:8081/",
  withCredentials: true,
  credentials: "include",
});

export { apibase };
