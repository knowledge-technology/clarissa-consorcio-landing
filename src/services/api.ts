// api.ts
import axios from "axios";

const token = import.meta.env.VITE_API_TOKEN;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:1337",
  headers: {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export default api;
