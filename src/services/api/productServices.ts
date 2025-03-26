import { Product, ProductDetail } from "@/types/types";
import { publicUrl } from "./apiClient";

const api = {
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await publicUrl.get("/product/getreqallproduct");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  },

  async getAllProductsByCategory(
    category_id: number
  ): Promise<Product[] | undefined> {
    try {
      const response = await publicUrl.get(
        `/product/getproductbycategory/${category_id}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },

  async getDetailProductById(
    productId: number
  ): Promise<ProductDetail | undefined> {
    try {
      const response = await publicUrl.get(
        `/product/getreqproductdetail/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw Error;
    }
  },
};

export default api;
