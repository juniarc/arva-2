import axios from "axios";

export const publicUrl = axios.create({
  baseURL: "http://arva-backend-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 10000,
});

export const privateUrl = axios.create({
  baseURL: "http://arva-backend-production.up.railway.app",
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
