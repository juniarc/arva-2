import { Product } from "@/types/types";
import axios from "axios";

export const api = (() => {
  const instance = axios.create({
    baseURL: "http://arva-backend-production.up.railway.app",
    // timeout: 10000,
  });

  async function getAllProducts(): Promise<Product[]> {
    const start = performance.now(); // Waktu mulai request

    return instance
      .get("/product/getreqallproduct")
      .then((response) => {
        const end = performance.now(); // Waktu setelah response diterima
        console.log("Response Time:", (end - start).toFixed(2), "ms");
        // console.log(response.data);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  }

  return {
    getAllProducts,
  };
})();
