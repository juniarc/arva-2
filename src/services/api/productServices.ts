import { Product } from "@/types/types";
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
    category_id: number,
    limit?: number
  ): Promise<Product[] | undefined> {
    try {
      const response = await publicUrl.get(
        `product/getproductbycategory/${category_id}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },
};

export default api;
