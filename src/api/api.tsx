import { Product } from "@/types/types";
import axios from "axios";

export const api = (() => {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000",
    timeout: 10000,
  });

  async function getAllProducts(): Promise<Product[]> {
    return instance
      .get("/product/getreqallproduct")
      .then((response) => {
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
