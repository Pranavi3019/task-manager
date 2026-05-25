import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-1-37bq.onrender.com"
});

// Automatically send token in requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;