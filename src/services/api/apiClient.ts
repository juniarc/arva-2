import axios from "axios";

export const publicUrl = axios.create({
  baseURL: "http://capitalist-corliss-revoustudents-ed34d764.koyeb.app",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 10000,
});

export const privateUrl = axios.create({
  baseURL: "http://capitalist-corliss-revoustudents-ed34d764.koyeb.app",
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
